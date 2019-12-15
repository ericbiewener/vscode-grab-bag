import path from 'path';
import { window } from 'vscode';
import * as parser from '@babel/parser';
export function parseActiveDocument() {
    const editor = window.activeTextEditor;
    if (!editor)
        return;
    const { document } = editor;
    const typePlugin = path.extname(document.uri.fsPath).startsWith('.ts') ? 'typescript' : 'flow';
    const ast = parser.parse(document.getText(), {
        sourceType: 'unambiguous',
        allowImportExportEverywhere: true,
        allowAwaitOutsideFunction: true,
        allowReturnOutsideFunction: true,
        allowSuperOutsideMethod: true,
        allowUndeclaredExports: true,
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        errorRecovery: true,
        plugins: [
            typePlugin,
            'jsx',
            'asyncGenerators',
            'bigInt',
            'classProperties',
            'classPrivateProperties',
            'classPrivateMethods',
            // 'decorators',
            'doExpressions',
            'dynamicImport',
            'exportDefaultFrom',
            'exportNamespaceFrom',
            'functionBind',
            'functionSent',
            'importMeta',
            'logicalAssignment',
            'nullishCoalescingOperator',
            'numericSeparator',
            'objectRestSpread',
            'optionalCatchBinding',
            'optionalChaining',
            'partialApplication',
            // 'pipelineOperator',
            'throwExpressions',
            'topLevelAwait'
        ]
    });
    return ast.program;
}
//# sourceMappingURL=parseText.js.map