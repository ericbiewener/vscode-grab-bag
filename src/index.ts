import { commands, ExtensionContext } from 'vscode'
import { openCorrespondingTestFile } from './jest'

export const activate = async function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('grabBag.openCorrespondingTestFile', openCorrespondingTestFile)
  )
}
