import path from 'path'
import vsc from 'vscode'

export function gotoSymbolGrouped() {
  vsc.commands.executeCommand('workbench.action.quickOpen', '@:')
}

export const openAllFilesListedInDocument = () => {
  const editor = vsc.window.activeTextEditor
  const { workspaceFolders } = vsc.workspace
  if (!editor || !workspaceFolders) return

  const lines = editor.document
    .getText()
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)

  const rootPath = workspaceFolders[0].uri.fsPath

  for (const line of lines) {
    const filepath = !line.startsWith('/') ? path.join(rootPath, line) : line
    vsc.window.showTextDocument(vsc.Uri.file(filepath), { preview: false })
  }
}
