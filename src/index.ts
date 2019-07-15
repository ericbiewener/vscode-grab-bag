import { commands, ExtensionContext } from 'vscode'
import { closeAllPanels } from './editor-manipulation'
import { openCorrespondingSnapshot, openCorrespondingTestFile } from './jest'

export const activate = async function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('grabBag.openCorrespondingTestFile', openCorrespondingTestFile),
    commands.registerCommand('grabBag.openCorrespondingSnapshot', openCorrespondingSnapshot),
    commands.registerCommand('grabBag.closeAllPanels', closeAllPanels)
  )
}
