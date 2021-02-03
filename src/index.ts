import 'regenerator-runtime/runtime'
import { commands, ExtensionContext } from 'vscode'
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
  copyTestCommand,
} from './jest'
import {
  gotoSymbolGrouped,
  openAllFilesOrLinksListedInDocument,
  openFileInDefaultProgram,
} from './misc'
import {
  openCorrespondingCssModule,
  createCorrespondingCssModule,
} from './correspondingCssModule'
import { openCoverageReport } from './open-coverage-report'
import { openCorrespondingReduxContainer } from './openCorrespondingReduxContainer'
import { updateIndexFileToExportAllFromDir } from './update-index-file-to-export-all-from-dir'
import { toggleJestTest } from './toggle-jest-test'

export const activate = async function activate(ctx: ExtensionContext) {
  ctx.subscriptions.push(
    commands.registerCommand(
      'grabBag.openCorrespondingCssModule',
      openCorrespondingCssModule
    ),
    commands.registerCommand(
      'grabBag.createCorrespondingCssModule',
      createCorrespondingCssModule
    ),
    commands.registerCommand('grabBag.copyTestCommand', copyTestCommand),
    commands.registerCommand(
      'grabBag.openCorrespondingTestFile',
      openCorrespondingTestFile
    ),
    commands.registerCommand(
      'grabBag.openCorrespondingSnapshot',
      openCorrespondingSnapshot
    ),
    commands.registerCommand(
      'grabBag.createCorrespondingTestFile',
      createCorrespondingTestFile
    ),
    commands.registerCommand(
      'grabBag.openCorrespondingReduxContainer',
      openCorrespondingReduxContainer
    ),
    commands.registerCommand('grabBag.closeAllPanels', closeAllPanels),
    commands.registerCommand(
      'grabBag.moveEditorToOtherGroup',
      moveEditorToOtherGroup
    ),
    commands.registerCommand(
      'grabBag.consolidateToTwoEditors',
      consolidateToTwoEditors
    ),
    commands.registerCommand('grabBag.moveCaretDown', () => moveCaret()),
    commands.registerCommand('grabBag.moveCaretUp', () => moveCaret(false)),
    commands.registerCommand('grabBag.gotoSymbolGrouped', gotoSymbolGrouped),
    commands.registerCommand(
      'grabBag.openAllFilesOrLinksListedInDocument',
      openAllFilesOrLinksListedInDocument
    ),
    commands.registerCommand(
      'grabBag.openFileInDefaultProgram',
      openFileInDefaultProgram
    ),
    commands.registerCommand('grabBag.openCoverageReport', openCoverageReport),
    commands.registerCommand(
      'grabBag.updateIndexFileToExportAllFromDir',
      updateIndexFileToExportAllFromDir
    ),
    commands.registerCommand('grabBag.toggleJestOnly', toggleJestTest),
    commands.registerCommand('grabBag.toggleJestSkip', () =>
      toggleJestTest(false)
    )
    // commands.registerCommand('grabBag.toggleJestOnlyExclusive', () =>
    //   toggleJestTestExclusive()
    // )
  )
}
