import vsc from 'vscode'
import { isFile } from '@ericbiewener/utils/src/isFile'
import { maybeSwapExtension } from './maybe-swap-extension'
import { moveEditorToOtherGroup } from './move-editor-to-other-group'

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
