import { commands } from 'vscode'

export function gotoSymbolGrouped() {
  commands.executeCommand('workbench.action.quickOpen', '@:')
}
