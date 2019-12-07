import fs from 'fs';
import { commands, Uri, window, workspace } from 'vscode';
import { maybeSwapExtension } from './filepaths';
export let CTX;
export function setExtCtx(ctx) {
    CTX = ctx;
}
export function isFile(filepath) {
    try {
        return fs.statSync(filepath).isFile();
    }
    catch (e) {
        if (e.code !== 'ENOENT')
            throw e; // File might exist, but something else went wrong (e.g. permissions error)
        return false;
    }
}
export function mkdirSync(dir, options) {
    try {
        fs.mkdirSync(dir, options);
    }
    catch (e) {
        if (e.code !== 'EEXIST')
            throw e;
    }
}
export async function showTextDocument(filepath, moveToOtherColumn = true, preserveFocus = false) {
    filepath = maybeSwapExtension(filepath);
    if (!isFile(filepath))
        return;
    let viewColumn = 1;
    const editor = window.activeTextEditor;
    if (moveToOtherColumn && editor && editor.viewColumn) {
        viewColumn = editor.viewColumn + (editor.viewColumn > 1 ? -1 : 1);
    }
    const newEditor = await window.showTextDocument(Uri.file(filepath), {
        preserveFocus,
        preview: false,
    });
    if (newEditor.viewColumn !== viewColumn)
        moveEditorToOtherGroup();
    return filepath;
}
function moveEditorToOtherGroup() {
    const editor = window.activeTextEditor;
    if (!editor || !editor.viewColumn)
        return;
    if (editor.viewColumn > 1) {
        commands.executeCommand('workbench.action.moveEditorToPreviousGroup');
    }
    else {
        commands.executeCommand('workbench.action.moveEditorToNextGroup');
    }
}
export function getConfiguration(resource) {
    return workspace.getConfiguration('grabBag', resource);
}
//# sourceMappingURL=misc.js.map