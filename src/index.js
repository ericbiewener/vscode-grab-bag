const path = require('path')
const {Uri, window, workspace, commands, ConfigurationTarget, Selection} = require('vscode')
const _ = require('lodash')
const clipboardy = require('clipboardy')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  context.subscriptions.push(
    commands.registerCommand('grabBag.hideTests', () => toggleTests(true)),
    commands.registerCommand('grabBag.showTests', () => toggleTests()),
    commands.registerCommand('grabBag.gotoSymbolGrouped', gotoSymbolGrouped),
    commands.registerCommand('grabBag.openCorrespondingTestFile', openCorrespondingTestFile),
    commands.registerCommand('grabBag.openCorrespondingSnapshot', openCorrespondingSnapshot),
    commands.registerCommand('grabBag.jestWatchActiveFile', () => jestActiveFile('jw')),
    commands.registerCommand('grabBag.jestUpdateActiveFile', () => jestActiveFile('ju')),
    commands.registerCommand('grabBag.moveEditorToOtherGroup', moveEditorToOtherGroup),
    commands.registerCommand('grabBag.toggleEditorMaxWidth', toggleEditorMaxWidth),
    commands.registerCommand('grabBag.moveCaretDown', moveCaret),
    commands.registerCommand('grabBag.moveCaretUp', () => moveCaret(false)),
    commands.registerCommand('grabBag.flowStatus', flowStatus),
    commands.registerCommand('grabBag.copyEscapedFilePath', copyEscapedFilePath),
  )
}
exports.activate = activate

function gotoSymbolGrouped() {
  commands.executeCommand('workbench.action.quickOpen', '@:')
}

const testGlobs = [
  '**/__tests__',
  '**/__mocks__',
  '**/*.spec.js',
]

async function toggleTests(hide) {
  const files = workspace.getConfiguration('files', ConfigurationTarget.Global)
  const exclude = files.get('exclude')
  testGlobs.forEach(g => exclude[g] = hide)
  await files.update('exclude', exclude, ConfigurationTarget.Global)
}

function getTestFilePath(filePath) {
  if (filePath.includes('__tests__')) return filePath
  const ext = path.extname(filePath)
  const fileName = path.basename(filePath, ext) + '.test' + ext
  return path.join(path.dirname(filePath), '__tests__', fileName)
}

function moveEditorToOtherGroup() {
  if (window.activeTextEditor.viewColumn > 1) {
    commands.executeCommand('workbench.action.moveEditorToPreviousGroup')
  } else {
    commands.executeCommand('workbench.action.moveEditorToNextGroup')
  }
}

function showTextDocument(filePath, move, preserveFocus) {
  let {viewColumn} = window.activeTextEditor
  if (move) viewColumn += viewColumn > 1 ? -1 : 1
  return window.showTextDocument(Uri.file(filePath), {viewColumn, preserveFocus, preview: false})
}

function openCorrespondingTestFile() {
  if (!window.activeTextEditor) return
  const filePath = window.activeTextEditor.document.fileName
  const fileNameParts = path.basename(filePath).split('.')
  if (fileNameParts.length < 2) return

  const isTest = fileNameParts[fileNameParts.length - 2] === 'test'
  const ext = _.last(fileNameParts)
  const newFilePath = isTest
    ? path.join(path.dirname(path.dirname(filePath)), fileNameParts.slice(0, -2).join('.') + '.' + ext)
    : getTestFilePath(filePath)

  showTextDocument(newFilePath, true)
}

function openCorrespondingSnapshot() {
  if (!window.activeTextEditor) return
  const filePath = window.activeTextEditor.document.fileName
  const fileName = path.basename(filePath)

  const newFilePath = filePath.endsWith('.snap')
    ? path.join(path.dirname(path.dirname(filePath)), fileName.slice(0, fileName.lastIndexOf('.')))
    : path.join(path.dirname(filePath), '__snapshots__', fileName + '.snap')

  showTextDocument(newFilePath, true)
}

let isMaximized
function toggleEditorMaxWidth() {
  const cmd = isMaximized ? 'evenEditorWidths' : 'maximizeEditor'
  commands.executeCommand('workbench.action.' + cmd)
  isMaximized = !isMaximized
}

let terminal
function executeTerminalCmd(cmd, show=true) {
  terminal = terminal || window.createTerminal('Grab Bag')
  terminal.sendText(cmd)
  if (show) terminal.show()
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

function jestActiveFile(cmd) {
  changeToWorkspaceFolder()
  const filePath = getTestFilePath(window.activeTextEditor.document.fileName)
  executeTerminalCmd(cmd + ' ' + filePath)
}

function flowStatus() {
  changeToWorkspaceFolder()
  executeTerminalCmd('echo -e \\\\033c; ./node_modules/.bin/flow status')
}

async function moveCaret(down=true) {
  const editor = window.activeTextEditor
  const position = editor.selection.active
  const change = down ? 10 : -10
  const newLine = Math.min(editor.document.lineCount, Math.max(0, position.line + change))
  var newPosition = position.with(newLine, position.character)
  var newSelection = new Selection(newPosition, newPosition)
  editor.selection = newSelection
  await commands.executeCommand('revealLine', {lineNumber: newLine})
}

function copyEscapedFilePath() {
  clipboardy.writeSync(window.activeTextEditor.document.fileName.replace(/ /g, '\\ '))
}
