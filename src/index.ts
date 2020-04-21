import { commands, ExtensionContext } from 'vscode'
import { addReturnToArrowFunction } from './codemods/addReturnToArrowFunction'
import {
  closeAllPanels,
  consolidateToTwoEditors,
  moveCaret,
  moveEditorToOtherGroup,
} from './editor-manipulation'
import {
  createCorrespondingTestFile,
  openCorrespondingSnapshot,
  openCorrespondingTestFile,
} from './jest'
import { gotoSymbolGrouped, openAllFilesListedInDocument } from './misc'
import { openCorrespondingCssModule } from './openCorrespondingCssModule'
import { openCorrespondingReduxContainer } from './openCorrespondingReduxContainer'
import { setExtCtx } from './utils/misc'

export const activate = async function activate(ctx: ExtensionContext) {
  setExtCtx(ctx)

  ctx.subscriptions.push(
    commands.registerCommand('grabBag.openCorrespondingCssModule', openCorrespondingCssModule),
    commands.registerCommand('grabBag.openCorrespondingTestFile', openCorrespondingTestFile),
    commands.registerCommand('grabBag.openCorrespondingSnapshot', openCorrespondingSnapshot),
    commands.registerCommand('grabBag.createCorrespondingTestFile', createCorrespondingTestFile),
    commands.registerCommand(
      'grabBag.openCorrespondingReduxContainer',
      openCorrespondingReduxContainer,
    ),
    commands.registerCommand('grabBag.closeAllPanels', closeAllPanels),
    commands.registerCommand('grabBag.moveEditorToOtherGroup', moveEditorToOtherGroup),
    commands.registerCommand('grabBag.consolidateToTwoEditors', consolidateToTwoEditors),
    commands.registerCommand('grabBag.moveCaretDown', () => moveCaret()),
    commands.registerCommand('grabBag.moveCaretUp', () => moveCaret(false)),
    commands.registerCommand('grabBag.gotoSymbolGrouped', gotoSymbolGrouped),
    commands.registerCommand('grabBag.addReturnToArrowFunction', addReturnToArrowFunction),
    commands.registerCommand('grabBag.openAllFilesListedInDocument', openAllFilesListedInDocument),
  )
}
