const { commands } = require('vscode')
const {
  closeAllPanels,
  moveCaret,
  moveEditorToOtherGroup,
  openActiveFileInOtherGroup,
  toggleEditorMaxWidth,
} = require('./editor-manipulation')
const {
  jestActiveFile,
  openCorrespondingSnapshot,
  openCorrespondingTestFile,
} = require('./jest-testing')
const {
  copyEscapedFilePath,
  focusOpenEditor,
  gotoSymbolGrouped,
} = require('./misc')
const {
  copyPythonTestPath,
  pythonTestActiveFunction,
} = require('./python-testing')
const { toggleLightDarkTheme, toggleTests } = require('./settings')
const { repeatLastTerminalCmd } = require('./utils')

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
    commands.registerCommand(
      'grabBag.pythonTestActiveFunction',
      pythonTestActiveFunction
    ),
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
    commands.registerCommand('grabBag.focusOpenEditor', focusOpenEditor),
    commands.registerCommand(
      'grabBag.repeatLastTerminalCmd',
      repeatLastTerminalCmd
    ),
    commands.registerCommand(
      'grabBag.openActiveFileInOtherGroup',
      openActiveFileInOtherGroup
    )
  )
}
exports.activate = activate

// function toggleAndFocusMaximizedPanel() {
//   workbench.action.focusActiveEditorGroup
//   workbench.action.focusPanel
//   workbench.action.toggleMaximizedPanel
// }
