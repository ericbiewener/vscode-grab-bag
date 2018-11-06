const path = require('path')
const fs = require('fs')
const {
  window,
  workspace,
  commands,
  ConfigurationTarget,
  Selection
} = require('vscode')
const _ = require('lodash')
const clipboardy = require('clipboardy')
const makeDir = require('make-dir')
const { executeTerminalCmd, executeWorkspaceTerminalCmd, getCorrespondingPathForSnapshot,
  getPythonTestPath, getTestFilePath, isFile, showTextDocument, swapJsxExtensionIfNoFile
} = require('./utils')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  context.subscriptions.push(
    commands.registerCommand('grabBag.hideTests', () => toggleTests(true)),
    commands.registerCommand('grabBag.showTests', () => toggleTests()),
    commands.registerCommand(
      'grabBag.toggleLightDarkTheme',
      toggleLightDarkTheme
    ),
    commands.registerCommand('grabBag.gotoSymbolGrouped', gotoSymbolGrouped),
    commands.registerCommand(
      'grabBag.openCorrespondingTestFile',
      openCorrespondingTestFile
    ),
    commands.registerCommand(
      'grabBag.openCorrespondingSnapshot',
      openCorrespondingSnapshot
    ),
    commands.registerCommand('grabBag.jestWatchActiveFile', () =>
      jestActiveFile('jw', false)
    ),
    commands.registerCommand('grabBag.jestUpdateActiveFile', () =>
      jestActiveFile('ju')
    ),
    commands.registerCommand('grabBag.pythonTestActiveFunction', pythonTestActiveFunction),
    commands.registerCommand(
      'grabBag.moveEditorToOtherGroup',
      moveEditorToOtherGroup
    ),
    commands.registerCommand(
      'grabBag.toggleEditorMaxWidth',
      toggleEditorMaxWidth
    ),
    commands.registerCommand('grabBag.moveCaretDown', () => moveCaret(true)),
    commands.registerCommand('grabBag.moveCaretUp', () => moveCaret(false)),
    commands.registerCommand(
      'grabBag.copyEscapedFilePath',
      copyEscapedFilePath
    ),
    commands.registerCommand('grabBag.copyPythonTestPath', copyPythonTestPath),
    commands.registerCommand('grabBag.closeAllPanels', closeAllPanels),
    commands.registerCommand('grabBag.focusOpenEditor', focusOpenEditor)
  )
}
exports.activate = activate

function gotoSymbolGrouped() {
  return commands.executeCommand('workbench.action.quickOpen', '@:')
}

function focusOpenEditor() {
  return commands.executeCommand('workbench.action.quickOpen', 'edt active ')
}

const testGlobs = [
  '**/__tests__',
  '**/__mocks__',
  '**/__fixtures__',
  '**/*.spec.js'
]

async function toggleTests(shouldHide) {
  const files = workspace.getConfiguration(
    'files',
    ConfigurationTarget.Workspace
  )
  const exclude = files.get('exclude')
  testGlobs.forEach(g => (exclude[g] = shouldHide))
  await files.update('exclude', exclude, ConfigurationTarget.Workspace)
}

function toggleLightDarkTheme() {
  const config = workspace.getConfiguration(
    'workbench',
    ConfigurationTarget.Global
  )
  config.update(
    'colorTheme',
    config.get('colorTheme') === 'Ayu Light' ? 'Ayu Mirage' : 'Ayu Light',
    ConfigurationTarget.Global
  )
}

function moveEditorToOtherGroup() {
  if (window.activeTextEditor.viewColumn > 1) {
    commands.executeCommand('workbench.action.moveEditorToPreviousGroup')
  } else {
    commands.executeCommand('workbench.action.moveEditorToNextGroup')
  }
}

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
    text: '\u0003'
  })
  executeWorkspaceTerminalCmd(cmd + ' ' + filePath, true, focusEditor)
}

async function moveCaret(down = true) {
  const editor = window.activeTextEditor
  const position = editor.selection.active
  const change = down ? 10 : -10
  const newLine = Math.min(
    editor.document.lineCount,
    Math.max(0, position.line + change)
  )
  var newPosition = position.with(newLine, position.character)
  var newSelection = new Selection(newPosition, newPosition)
  editor.selection = newSelection
  await commands.executeCommand('revealLine', {lineNumber: newLine})
}

function copyEscapedFilePath() {
  clipboardy.writeSync(
    window.activeTextEditor.document.fileName.replace(/ /g, '\\ ')
  )
}

let isMaximized
function toggleEditorMaxWidth() {
  const cmd = isMaximized ? 'evenEditorWidths' : 'maximizeEditor'
  isMaximized = !isMaximized
  return commands.executeCommand('workbench.action.' + cmd)
}

async function closeAllPanels() {
  commands.executeCommand('workbench.action.closePanel')
  await commands.executeCommand('workbench.action.maximizeEditor')
  commands.executeCommand('workbench.action.evenEditorWidths')
}

function copyPythonTestPath() {
  const testPath = getPythonTestPath()
  clipboardy.writeSync(`tpf ${testPath}`)
  window.showInformationMessage(`Copied test path: ${testPath}`)
}

function pythonTestActiveFunction() {
  const testPath = getPythonTestPath()
  executeTerminalCmd(`tpf ${testPath}`)
}

// function toggleAndFocusMaximizedPanel() {
//   workbench.action.focusActiveEditorGroup
//   workbench.action.focusPanel
//   workbench.action.toggleMaximizedPanel
// }
