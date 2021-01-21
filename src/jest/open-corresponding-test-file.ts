import path from 'path'
import vsc from 'vscode'
import { getCorrespondingTestFilepath } from './get-corresponding-test-filepath'
import { copyTestCommand } from './copy-test-command'
import { showTextDocument } from '../utils'

export const openCorrespondingTestFile = async () => {
  const editor = vsc.window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const filenameParts = path.basename(filepath).split('.')
  if (filenameParts.length === 1) return

  const dir = path.dirname(filepath)
  let filepathToShow: string
  let testFilepath: string

  if (filenameParts[filenameParts.length - 1] === 'snap') {
    // Snapshot
    filepathToShow = path.join(dir, '..', path.basename(filepath, '.snap'))
    testFilepath = filepathToShow
  } else if (filenameParts[filenameParts.length - 2] === 'test') {
    // Test file
    filenameParts.splice(-2, 1)
    filepathToShow = path.join(dir, '..', filenameParts.join('.'))
    testFilepath = filepath
  } else {
    // Production Code
    filepathToShow = getCorrespondingTestFilepath(filepath)
    testFilepath = filepathToShow
  }

  copyTestCommand(testFilepath)
  return showTextDocument(filepathToShow)
}
