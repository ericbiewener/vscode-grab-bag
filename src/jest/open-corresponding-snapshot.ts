import path from 'path'
import vsc from 'vscode'
import { showTextDocument } from '../utils'

export const openCorrespondingSnapshot = () => {
  const editor = vsc.window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const snapshot = path.join(
    path.dirname(filepath),
    '__snapshots__',
    `${path.basename(filepath)}.snap`
  )
  return showTextDocument(snapshot)
}
