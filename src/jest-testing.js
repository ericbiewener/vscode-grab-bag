const fs = require("fs");
const _ = require("lodash");
const makeDir = require("make-dir");
const path = require("path");
const { commands, window } = require("vscode");
const {
  executeWorkspaceTerminalCmd,
  getCorrespondingPathForSnapshot,
  getTestFilePath,
  isFile,
  showTextDocument,
  swapJsxExtensionIfNoFile
} = require("./utils");

async function openCorrespondingTestFile() {
  if (!window.activeTextEditor) return;
  const filePath = window.activeTextEditor.document.fileName;
  const fileNameParts = path.basename(filePath).split(".");
  if (fileNameParts.length < 2) return;

  const isTest = fileNameParts[fileNameParts.length - 2] === "test";
  const ext = _.last(fileNameParts);
  const newFilePath = isTest
    ? path.join(
        path.dirname(path.dirname(filePath)),
        fileNameParts.slice(0, -2).join(".") + "." + ext
      )
    : getTestFilePath(filePath, false);

  const jsxSwappedPath = swapJsxExtensionIfNoFile(newFilePath);
  const noFileCreation = isTest || isFile(jsxSwappedPath);
  if (!noFileCreation) {
    await makeDir(path.dirname(newFilePath));
    await fs.writeFileSync(newFilePath, "");
  }

  await showTextDocument(noFileCreation ? jsxSwappedPath : newFilePath, true);
  await jestActiveFile("jw");
}

function openCorrespondingSnapshot() {
  if (!window.activeTextEditor) return;
  const filePath = getCorrespondingPathForSnapshot(
    window.activeTextEditor.document.fileName
  );
  showTextDocument(filePath, true);
}

function getJestCommand(cmd) {
  const filePath = getTestFilePath(window.activeTextEditor.document.fileName);
  if (cmd === "jw" && !filePath.includes("mumbai")) cmd = "yt";
  return cmd + " " + filePath;
}

async function jestActiveFile(cmd, focusEditor) {
  const jestCmd = getJestCommand(cmd);
  await commands.executeCommand("workbench.action.terminal.sendSequence", {
    text: "\u0003"
  });
  executeWorkspaceTerminalCmd(jestCmd, true, focusEditor);
}

module.exports = {
  openCorrespondingTestFile,
  openCorrespondingSnapshot,
  jestActiveFile
};
