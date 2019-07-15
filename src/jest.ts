import path from 'path'
import { window, workspace } from 'vscode'
import _ from 'lodash'
import makeDir from 'make-dir'
import { runJestTestInIterm } from './iterm.jxa'
import { showTextDocument } from './utils'

export async function openCorrespondingTestFile() {
  const editor = window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const filenameParts = path.basename(filepath).split('.')
  if (filenameParts.length === 1) return

  const dir = path.dirname(filepath)
  let filepathToShow: string
  let testFilepath: string

  if (_.last(filenameParts) === 'snap') {
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
    filenameParts.splice(-1, 0, 'test')
    filepathToShow = path.join(dir, '__tests__', filenameParts.join('.'))
    testFilepath = filepathToShow
  }

  console.log(workspace.workspaceFolders![0].uri.fsPath)
  return Promise.all([
    showTextDocument(filepathToShow, true),
    runJestTestInIterm(workspace.workspaceFolders![0].uri.fsPath, testFilepath),
  ])
}

export function openCorrespondingSnapshot() {
  const editor = window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const snapshot = path.join(
    path.dirname(filepath),
    '__snapshots__',
    `${path.basename(filepath)}.snap`
  )
  return showTextDocument(snapshot, true)
}
