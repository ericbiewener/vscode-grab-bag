import fs from 'fs'
import path from 'path'
import { window } from 'vscode'
import _ from 'lodash'
import makeDir from 'make-dir'
import { isFile, showTextDocument } from './utils'

export async function openCorrespondingTestFile() {
  const editor = window.activeTextEditor
  if (!editor) return

  const filepath = editor.document.fileName
  const filenameParts = path.basename(filepath).split('.')
  if (filenameParts.length < 2) return

  const isTest = filenameParts[filenameParts.length - 2] === 'test'
  const ext = _.last(filenameParts)

  const correspondingFilepath = isTest
    ? path.join(
        path.dirname(path.dirname(filepath)),
        filenameParts.slice(0, -2).join('.') + '.' + ext
      )
    : getTestFilepath(filepath, false)

  const jsxSwappedPath = swapJsxExtensionIfNoFile(correspondingFilepath)
  const noFileCreation = isTest || isFile(jsxSwappedPath)
  if (!noFileCreation) {
    await makeDir(path.dirname(correspondingFilepath))
    await fs.writeFileSync(correspondingFilepath, '')
  }

  await showTextDocument(noFileCreation ? jsxSwappedPath : correspondingFilepath, true)
}

function getTestFilepath(filepath: string, swapExt = true) {
  let testPath

  if (filepath.includes('__tests__')) {
    if (!filepath.includes('__snapshots__')) return filepath
    testPath = getCorrespondingPathForSnapshot(filepath)
  } else {
    const ext = path.extname(filepath)
    const fileName = path.basename(filepath, ext) + '.test' + ext
    testPath = path.join(path.dirname(filepath), '__tests__', fileName)
  }

  return swapExt ? swapJsxExtensionIfNoFile(testPath) : testPath
}

function swapJsxExtensionIfNoFile(filePath: string) {
  return isFile(filePath)
    ? filePath
    : filePath.endsWith('x')
    ? filePath.slice(0, -1)
    : filePath + 'x'
}

function getCorrespondingPathForSnapshot(filepath: string): string {
  if (filepath.endsWith('.snap')) {
    const fileName = path.basename(filepath)
    return path.join(
      path.dirname(path.dirname(filepath)),
      fileName.slice(0, fileName.lastIndexOf('.'))
    )
  }

  const testFilepath = getTestFilepath(filepath)
  const fileName = path.basename(testFilepath)
  return path.join(path.dirname(testFilepath), '__snapshots__', fileName + '.snap')
}
