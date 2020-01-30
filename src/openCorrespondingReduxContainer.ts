import path from 'path'
import { window } from 'vscode'
import { showTextDocument } from './utils/misc'

const SUFFIX = 'connect'

export function openCorrespondingReduxContainer() {
  const editor = window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const parts = path.basename(filepath).split('.')
  const containerIndex = parts.length - 2

  if (parts[containerIndex] === SUFFIX) {
    parts.splice(containerIndex, 1)
  } else {
    parts.splice(parts.length - 1, 0, SUFFIX)
  }
  showTextDocument(path.join(path.dirname(filepath), parts.join('.')))
}
