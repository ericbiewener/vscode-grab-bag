import fs from 'fs'
import { Uri, window } from 'vscode'

export function isFile(filepath: string) {
  try {
    return fs.statSync(filepath).isFile()
  } catch (e) {
    if (e.code !== 'ENOENT') throw e // File might exist, but something else went wrong (e.g. permissions error)
    return false
  }
}

export function showTextDocument(
  filepath: string,
  moveToOtherColumn = false,
  preserveFocus = false
) {
  if (!window.activeTextEditor) return

  let { viewColumn } = window.activeTextEditor
  if (viewColumn == null) return

  if (moveToOtherColumn) viewColumn += viewColumn > 1 ? -1 : 1
  return window.showTextDocument(Uri.file(filepath), {
    viewColumn,
    preserveFocus,
    preview: false,
  })
}
