const fs = require('fs')
const _ = require('lodash')
const makeDir = require('make-dir')
const path = require('path')
const { commands, window } = require('vscode')
const {
  executeWorkspaceTerminalCmd,
  getCorrespondingPathForSnapshot,
  getTestFilePath,
  isFile,
  showTextDocument,
  swapJsxExtensionIfNoFile,
} = require('./utils')

function openCorrespondingTestFile() {
  if (!window.activeTextEditor) return
  const filePath = window.activeTextEditor.document.fileName
  const fileNameParts = path.basename(filePath).split('.')
  if (fileNameParts.length < 2) return

  const isTest = fileNameParts[fileNameParts.length - 2] === 'test'
  const ext = _.last(fileNameParts)
  const newFilePath = isTest
    ? path.join(
        path.dirname(path.dirname(filePath)),
        fileNameParts.slice(0, -2).join('.') + '.' + ext
      )
    : getTestFilePath(filePath, false)

  const jsxSwappedPath = swapJsxExtensionIfNoFile(newFilePath)
  const noFileCreation = isTest || isFile(jsxSwappedPath)
  const fileCreation = noFileCreation
    ? Promise.resolve()
    : makeDir(path.dirname(newFilePath)).then(() =>
        fs.writeFile(newFilePath, '')
      )

  fileCreation.then(() => {
    showTextDocument(noFileCreation ? jsxSwappedPath : newFilePath, true).then(
      () => jestActiveFile('jw')
    )
  })
}

function openCorrespondingSnapshot() {
  if (!window.activeTextEditor) return
  const filePath = getCorrespondingPathForSnapshot(
    window.activeTextEditor.document.fileName
  )
  showTextDocument(filePath, true)
}

async function jestActiveFile(cmd, focusEditor) {
  const filePath = getTestFilePath(window.activeTextEditor.document.fileName)
  if (cmd === 'jw' && !filePath.includes('mumbai')) cmd = 'yt'
  await commands.executeCommand('workbench.action.terminal.sendSequence', {
    text: '\u0003',
  })
  executeWorkspaceTerminalCmd(cmd + ' ' + filePath, true, focusEditor)
}

module.exports = {
  openCorrespondingTestFile,
  openCorrespondingSnapshot,
  jestActiveFile,
}
