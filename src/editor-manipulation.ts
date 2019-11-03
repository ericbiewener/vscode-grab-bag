import { commands, Selection, window } from 'vscode'
import { getConfiguration } from './utils/misc'

export async function closeAllPanels() {
  commands.executeCommand('workbench.action.closePanel')
  await commands.executeCommand('workbench.action.maximizeEditor')
  commands.executeCommand('workbench.action.evenEditorWidths')
}

export async function moveEditorToOtherGroup() {
  const editor = window.activeTextEditor
  if (!editor || !editor.viewColumn) return

  const { maxEditorGroups } = await getConfiguration()

  if (editor.viewColumn >= maxEditorGroups) {
    commands.executeCommand('workbench.action.moveEditorToFirstGroup')
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
  const newPosition = position.with(newLine, position.character)
  const newSelection = new Selection(newPosition, newPosition)
  editor.selection = newSelection
  commands.executeCommand('revealLine', { lineNumber: newLine })
}
