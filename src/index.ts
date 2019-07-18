import { commands, ExtensionContext } from 'vscode'
import { closeAllPanels, moveCaret, moveEditorToOtherGroup } from './editor-manipulation'
import {
  createCorrespondingTestFile,
  openCorrespondingSnapshot,
  openCorrespondingTestFile,
} from './jest'
import { setExtCtx } from './utils'

export const activate = async function activate(ctx: ExtensionContext) {
  setExtCtx(ctx)

  ctx.subscriptions.push(
    commands.registerCommand('grabBag.openCorrespondingTestFile', openCorrespondingTestFile),
    commands.registerCommand('grabBag.openCorrespondingSnapshot', openCorrespondingSnapshot),
    commands.registerCommand('grabBag.createCorrespondingTestFile', createCorrespondingTestFile),
    commands.registerCommand('grabBag.closeAllPanels', closeAllPanels),
    commands.registerCommand('grabBag.moveEditorToOtherGroup', moveEditorToOtherGroup),
    commands.registerCommand('grabBag.moveCaretDown', () => moveCaret()),
    commands.registerCommand('grabBag.moveCaretUp', () => moveCaret(false))
  )
}
