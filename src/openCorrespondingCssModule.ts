import path from 'path'
import { window } from 'vscode'
import { findFileForExtensions } from './utils/filepaths'
import { showTextDocument } from './utils/misc'

const CSS_EXTENSIONS = ['css', 'pcss']
const JS_EXTENSIONS = ['js', 'jsx', 'ts', 'tsx']

export function openCorrespondingCssModule() {
  const editor = window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const ext = path.extname(filepath)

  const correspondingFile = CSS_EXTENSIONS.includes(ext)
    ? findFileForExtensions(filepath, JS_EXTENSIONS)
    : findFileForExtensions(filepath, CSS_EXTENSIONS)

  if (correspondingFile) showTextDocument(correspondingFile)
}
