import { commands, window } from 'vscode';
import _ from 'lodash';
import { parseActiveDocument } from './parseText';
export async function addReturnToArrowFunction() {
    const editor = window.activeTextEditor;
    if (!editor)
        return;
    const { document, selection } = editor;
    const node = parseActiveDocument();
    const offset = document.offsetAt(selection.start);
    const allArrowFns = findInnerArrowFns(node, offset).filter(r => r.body.type !== 'BlockStatement');
    const innerMost = _.last(allArrowFns);
    if (!innerMost)
        return;
    const { start, end } = innerMost;
    const text = document.getText();
    const bodyStart = text.indexOf('=>', start) + 2;
    await editor.edit(builder => {
        builder.insert(document.positionAt(end), '}');
        builder.insert(document.positionAt(bodyStart), '{ return ');
    });
    await commands.executeCommand('editor.action.formatDocument');
}
function findInnerArrowFns(node, offset, results = []) {
    if (!node)
        return results;
    if (Array.isArray(node)) {
        for (const n of node)
            findInnerArrowFns(n, offset, results);
        return results;
    }
    // Use `>=` for start to ensure that we are not immediately to the left of the arrow function
    if (node.start >= offset || node.end < offset)
        return results;
    if (node.type === 'ArrowFunctionExpression') {
        results.push(node);
    }
    if (node.body) {
        if (Array.isArray(node.body)) {
            findInnerArrowFns(node.body, offset, results);
        }
        else {
            findInnerArrowFns(node.body, offset, results);
        }
    }
    findInnerArrowFns(node.init, offset, results);
    findInnerArrowFns(node.declarations, offset, results);
    findInnerArrowFns(node.argument, offset, results);
    if (node.expression)
        findInnerArrowFns(node.expression.arguments, offset, results);
    // JSX
    if (node.openingElement)
        findInnerArrowFns(node.openingElement.attributes, offset, results);
    if (_.isObject(node.value))
        findInnerArrowFns(node.value.expression, offset, results);
    return results;
}
//# sourceMappingURL=addReturnToArrowFunction.js.map