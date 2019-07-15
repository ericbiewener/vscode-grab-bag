import fs from 'fs'
import { Uri, window, workspace, commands } from 'vscode'

export function isFile(filepath: string) {
  try {
    return fs.statSync(filepath).isFile()
  } catch (e) {
    if (e.code !== 'ENOENT') throw e // File might exist, but something else went wrong (e.g. permissions error)
    return false
  }
}

export async function showTextDocument(
  filepath: string,
  moveToOtherColumn = false,
  preserveFocus = false
) {
  if (!isFile(filepath)) return

  let viewColumn = 1
  const editor = window.activeTextEditor

  if (moveToOtherColumn && editor && editor.viewColumn) {
    viewColumn = editor.viewColumn + (editor.viewColumn > 1 ? -1 : 1)
  }

  const newEditor = await window.showTextDocument(Uri.file(filepath), {
    preserveFocus,
    preview: false,
  })

  if (newEditor.viewColumn !== viewColumn) moveEditorToOtherGroup()
}

function moveEditorToOtherGroup() {
  const editor = window.activeTextEditor
  if (!editor || !editor.viewColumn) return

  if (editor.viewColumn > 1) {
    commands.executeCommand('workbench.action.moveEditorToPreviousGroup')
  } else {
    commands.executeCommand('workbench.action.moveEditorToNextGroup')
  }
}
