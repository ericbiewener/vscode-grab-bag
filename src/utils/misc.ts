import vsc from 'vscode'
import { isFile } from '@ericbiewener/utils/src/isFile'
import { maybeSwapExtension } from './filepaths'

export async function showTextDocument(
  filepath: string,
  moveToOtherColumn = true,
  preserveFocus = false
) {
  filepath = maybeSwapExtension(filepath)
  if (!isFile(filepath)) return

  let viewColumn = 1
  const editor = vsc.window.activeTextEditor

  if (moveToOtherColumn && editor && editor.viewColumn) {
    viewColumn = editor.viewColumn + (editor.viewColumn > 1 ? -1 : 1)
  }

  const newEditor = await vsc.window.showTextDocument(vsc.Uri.file(filepath), {
    preserveFocus,
    preview: false,
  })

  if (newEditor.viewColumn !== viewColumn) moveEditorToOtherGroup()
  return filepath
}

function moveEditorToOtherGroup() {
  const editor = vsc.window.activeTextEditor
  if (!editor || !editor.viewColumn) return

  if (editor.viewColumn > 1) {
    vsc.commands.executeCommand('workbench.action.moveEditorToPreviousGroup')
  } else {
    vsc.commands.executeCommand('workbench.action.moveEditorToNextGroup')
  }
}

export const getExtensionConfig = (resource?: vsc.Uri) =>
  vsc.workspace.getConfiguration('grabBag', resource)

export const getWorkspaceRoot = () => {
  const { workspaceFolders } = vsc.workspace
  const workspaceFolder = workspaceFolders ? workspaceFolders[0] : null
  if (!workspaceFolder) throw new Error('No workspace folders')
  return workspaceFolder.uri.fsPath
}
