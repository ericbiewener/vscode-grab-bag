const clipboardy = require('clipboardy')
const { window } = require('vscode')
const { executeTerminalCmd, getPythonTestPath } = require('./utils')

function copyPythonTestPath() {
  const testPath = getPythonTestPath()
  clipboardy.writeSync(`tpf ${testPath}`)
  window.showInformationMessage(`Copied test path: ${testPath}`)
}

function pythonTestActiveFunction() {
  const cmd = `cdb && tpf ${getPythonTestPath()}`
  if (window.terminals.length) {
    executeTerminalCmd(cmd)
  } else {
    executeTerminalCmd('cde && vs')
    setTimeout(() => executeTerminalCmd(cmd), 10000)
  }
}

module.exports = {
  copyPythonTestPath,
  pythonTestActiveFunction,
}
