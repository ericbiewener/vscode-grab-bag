import vsc from 'vscode'
import { writeFileIfNew } from '@ericbiewener/utils/src/writeFileIfNew'
import { showTextDocument } from '../utils'
import { getCorrespondingTestFilepath } from './get-corresponding-test-filepath'
import { copyTestCommand } from './copy-test-command'

export const createCorrespondingTestFile = () => {
  const editor = vsc.window.activeTextEditor
  if (!editor) return

  const testFilepath = getCorrespondingTestFilepath(editor.document.fileName)
  try {
    writeFileIfNew(testFilepath)
    copyTestCommand(testFilepath)
    showTextDocument(testFilepath)
  } catch (e) {
    console.info(':: ', e)
  }
}
