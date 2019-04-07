const { commands, Position, Range, Selection, window } = require("vscode");

const closingChars = ['"', "'", "`", ")", "}", "]", ">"];

async function grow() {
  await commands.executeCommand("editor.action.smartSelect.grow");
  const {
    document,
    selection: { start, end }
  } = window.activeTextEditor;

  if (!start.line && !start.character) return null; // Reached the start of the document with no match

  // `smartSelect.grow` sometimes includes the closing char, sometimes not. So we add 1 to the end
  // of the range in case we need to check that character as well
  const text = document.getText(
    new Range(start.line, start.character, end.line, end.character + 1)
  );
  if (closingChars.includes(text.slice(-2))) return end;
  if (closingChars.includes(text.slice(-1)))
    return new Position(end.line, end.character + 1);
  return grow();
}

async function moveCursorAfterToken() {
  const editor = window.activeTextEditor;
  if (!editor) return;

  const originalSelections = editor.selections;
  const pos = await grow();

  editor.selections = pos ? [new Selection(pos, pos)] : originalSelections;
  await commands.executeCommand("revealLine", {
    lineNumber: editor.selection.end.line
  });
}

module.exports = {
  moveCursorAfterToken
};
