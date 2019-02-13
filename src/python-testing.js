const clipboardy = require("clipboardy");
const { window } = require("vscode");
const { executeTerminalCmd, getPythonTestPath } = require("./utils");

function copyPythonTestPath() {
  const testPath = getPythonTestPath();
  clipboardy.writeSync(`tpf ${testPath}`);
  window.showInformationMessage(`Copied test path: ${testPath}`);
}

function pythonTestActiveFunction() {
  const cmd = `cdb && tpf ${getPythonTestPath()}`;
  const terminal = window.terminals[0];
  if (!terminal || terminal.name !== "vagrant") executeTerminalCmd("cde && vs");
  executeTerminalCmd(cmd);
}

module.exports = {
  copyPythonTestPath,
  pythonTestActiveFunction
};
