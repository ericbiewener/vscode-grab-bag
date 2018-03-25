const {workspace, commands, ConfigurationTarget} = require('vscode')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  context.subscriptions.push(
    commands.registerCommand('grabBag.hideTests', hideTests),
    commands.registerCommand('grabBag.gotoSymbolGrouped', gotoSymbolGrouped)
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

function hideTests() {
  const exclude = workspace.getConfiguration('files.exclude', ConfigurationTarget.Global)
  console.log(exclude)
  testGlobs.forEach(glob => exclude.update(glob, true, ConfigurationTarget.Global))
  console.log(exclude)
}
