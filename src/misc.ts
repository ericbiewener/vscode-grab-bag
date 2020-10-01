import path from 'path'
import vsc from 'vscode'
import open from 'open'

export function gotoSymbolGrouped() {
  vsc.commands.executeCommand('workbench.action.quickOpen', '@:')
}

export const openAllFilesOrLinksListedInDocument = () => {
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
    if (line.startsWith('http')) {
      open(line)
      continue
    }
    const filepath = !line.startsWith('/') ? path.join(rootPath, line) : line
    vsc.window.showTextDocument(vsc.Uri.file(filepath), { preview: false })
  }
}

export const openFileInDefaultProgram = () => {
  const filepath = vsc.window.activeTextEditor?.document.fileName
  if (filepath) open(filepath)
}
