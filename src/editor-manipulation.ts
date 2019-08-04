import { commands, Selection, window } from 'vscode'

export async function closeAllPanels() {
  commands.executeCommand('workbench.action.closePanel')
  await commands.executeCommand('workbench.action.maximizeEditor')
  commands.executeCommand('workbench.action.evenEditorWidths')
}

export function moveEditorToOtherGroup() {
  const editor = window.activeTextEditor
  if (!editor || !editor.viewColumn) return

  if (editor.viewColumn > 1) {
    commands.executeCommand('workbench.action.moveEditorToPreviousGroup')
  } else {
    commands.executeCommand('workbench.action.moveEditorToNextGroup')
  }
}

export async function moveCaret(down = true) {
  const editor = window.activeTextEditor
  if (!editor) return

  const position = editor.selection.active
  const change = down ? 10 : -10
  const newLine = Math.min(editor.document.lineCount, Math.max(0, position.line + change))
  var newPosition = position.with(newLine, position.character)
  var newSelection = new Selection(newPosition, newPosition)
  editor.selection = newSelection
  commands.executeCommand('revealLine', { lineNumber: newLine })
}
