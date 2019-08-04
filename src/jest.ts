import path from 'path'
import { window, workspace } from 'vscode'
import { runJestTestInIterm } from './iterm'
import { isFile, showTextDocument } from './utils'
import fs from 'fs'

export async function openCorrespondingTestFile() {
  const editor = window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const filenameParts = getFilenameParts(filepath)
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

export function createCorrespondingTestFile() {
  const editor = window.activeTextEditor
  if (!editor) return

  const testFilepath = getCorrespondingTestFilepath(editor.document.fileName)
  if (!isFile(testFilepath)) {
    fs.mkdirSync(path.dirname(testFilepath), { recursive: true })
    fs.writeFileSync(testFilepath, '')
  }
  showTextDocument(testFilepath)
}

export function getFilenameParts(filepath: string) {
  return path.basename(filepath).split('.')
}

function getCorrespondingTestFilepath(filepath: string) {
  const filenameParts = getFilenameParts(filepath)
  filenameParts.splice(-1, 0, 'test')
  return path.join(path.dirname(filepath), '__tests__', filenameParts.join('.'))
}