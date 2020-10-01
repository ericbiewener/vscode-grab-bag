import path from 'path'
import { window } from 'vscode'
import { writeFileIfNew } from '@ericbiewener/utils/src/writeFileIfNew'
import { removeFileExt } from '@ericbiewener/utils/src/removeFileExt'
import { findFileForExtensions } from './utils/filepaths'
import { getConfiguration, showTextDocument } from './utils/misc'

const CSS_EXTENSIONS = ['css', 'pcss']
const JS_EXTENSIONS = ['js', 'jsx', 'ts', 'tsx']

export const openCorrespondingCssModule = () => {
  const editor = window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const ext = path.extname(filepath)

  const correspondingFile = CSS_EXTENSIONS.includes(ext)
    ? findFileForExtensions(filepath, JS_EXTENSIONS)
    : findFileForExtensions(filepath, CSS_EXTENSIONS)

  if (correspondingFile) showTextDocument(correspondingFile)
}

export const createCorrespondingCssModule = async () => {
  const editor = window.activeTextEditor
  if (!editor) return

  const { cssModuleFileExtension } = await getConfiguration()

  const filepath = `${removeFileExt(editor.document.fileName)}.${cssModuleFileExtension}`
  writeFileIfNew(filepath)
  showTextDocument(filepath)
}
