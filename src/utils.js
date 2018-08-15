const path = require('path')
const fs = require('fs')
const { commands, Uri, window, workspace } = require( 'vscode')

function getCorrespondingPathForSnapshot(filePath) {
  if (filePath.endsWith('.snap')) {
    const fileName = path.basename(filePath)
    return path.join(path.dirname(path.dirname(filePath)), fileName.slice(0, fileName.lastIndexOf('.')))
  }
  
  const testFilePath = getTestFilePath(filePath)
  const fileName = path.basename(testFilePath)
  return path.join(path.dirname(testFilePath), '__snapshots__', fileName + '.snap')
}

function getTestFilePath(filePath, swapExt=true) {
  let testPath
  
  if (filePath.includes('__tests__')) {
    if (!filePath.includes('__snapshots__')) return filePath
    testPath = getCorrespondingPathForSnapshot(filePath)
  }
  else {
    const ext = path.extname(filePath)
    const fileName = path.basename(filePath, ext) + '.test' + ext
    testPath =  path.join(path.dirname(filePath), '__tests__', fileName)
  }
  
  return swapExt ? swapJsxExtensionIfNoFile(testPath) : testPath
}

function showTextDocument(filePath, move, preserveFocus) {
  let {viewColumn} = window.activeTextEditor
  if (move) viewColumn += viewColumn > 1 ? -1 : 1
  return window.showTextDocument(Uri.file(filePath), {viewColumn, preserveFocus, preview: false})
}

function changeToWorkspaceFolder() {
  const {fileName} = window.activeTextEditor.document
  for (const {uri} of workspace.workspaceFolders) {
    if (fileName.startsWith(uri.path)) {
      executeTerminalCmd('cd ' + uri.path.replace(/ /g, '\\ '), false)
      return
    }
  }
}

function executeWorkspaceTerminalCmd(cmd, show=true) {
  changeToWorkspaceFolder()
  executeTerminalCmd(cmd, show)
}

let terminal
function executeTerminalCmd(cmd, show=true) {
  terminal = terminal || window.createTerminal('Grab Bag')
  terminal.sendText(cmd)
  if (show) terminal.show(false)
  setTimeout(() => commands.executeCommand('workbench.action.focusActiveEditorGroup'), 1000)
}

function isFile(file) {
  try {
    return fs.statSync(file).isFile()
  } catch (e) {
    if (e.code !== 'ENOENT') throw e // File might exist, but something else went wrong (e.g. permissions error)
    return false
  }
}

function swapJsxExtensionIfNoFile(filePath) {
  return isFile(filePath)
    ? filePath
    : filePath.endsWith('x') ? filePath.slice(0, -1) : filePath + 'x'
}

function strUntil(str, endChar) {
  const index = str.search(endChar)
  return index < 0 ? str : str.slice(0, index)
}

module.exports = {
  getCorrespondingPathForSnapshot,
  getTestFilePath,
  showTextDocument,
  changeToWorkspaceFolder,
  executeWorkspaceTerminalCmd,
  swapJsxExtensionIfNoFile,
  isFile,
  strUntil,
}
