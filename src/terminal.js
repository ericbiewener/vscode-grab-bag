function executeWorkspaceTerminalCmd(cmd, show = true, focusEditor = true) {
  changeToWorkspaceFolder();
  executeTerminalCmd(cmd, show, focusEditor);
}

let lastCmd;
function executeTerminalCmd(cmd, show = true, focusEditor = true) {
  lastCmd = cmd;
  const terminal = window.terminals[0] || window.createTerminal("Grab Bag");
  terminal.sendText(cmd);
  if (show) terminal.show(false);
  if (focusEditor)
    setTimeout(
      () => commands.executeCommand("workbench.action.focusActiveEditorGroup"),
      1000
    );
}

function repeatLastTerminalCmd() {
  if (lastCmd) executeTerminalCmd(lastCmd);
}
