const clipboardy = require('clipboardy')
const { commands, window } = require('vscode')

function gotoSymbolGrouped() {
  return commands.executeCommand('workbench.action.quickOpen', '@:')
}

function focusOpenEditor() {
  return commands.executeCommand('workbench.action.quickOpen', 'edt active ')
}

function copyEscapedFilePath() {
  clipboardy.writeSync(
    window.activeTextEditor.document.fileName.replace(/ /g, '\\ ')
  )
}

module.exports = {
  gotoSymbolGrouped,
  focusOpenEditor,
  copyEscapedFilePath,
}
