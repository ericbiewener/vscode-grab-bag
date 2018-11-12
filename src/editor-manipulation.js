
const { commands, Selection, window } = require('vscode')

function moveEditorToOtherGroup() {
  if (window.activeTextEditor.viewColumn > 1) {
    commands.executeCommand('workbench.action.moveEditorToPreviousGroup')
  } else {
    commands.executeCommand('workbench.action.moveEditorToNextGroup')
  }
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

module.exports = {
  moveEditorToOtherGroup,
moveCaret,
toggleEditorMaxWidth,
closeAllPanels,
}
