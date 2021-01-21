import vsc from 'vscode'

export const moveEditorToOtherGroup = () => {
  const editor = vsc.window.activeTextEditor
  if (!editor || !editor.viewColumn) return

  if (editor.viewColumn > 1) {
    vsc.commands.executeCommand('workbench.action.moveEditorToPreviousGroup')
  } else {
    vsc.commands.executeCommand('workbench.action.moveEditorToNextGroup')
  }
}
