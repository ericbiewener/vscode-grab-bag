import vsc from 'vscode'
import path from 'path'
import { isFile } from '@ericbiewener/utils/dist/isFile'
import { maybeSwapExtension, getExtensionConfig } from '../utils'
import { getWorkspaceRoot } from '../utils/get-workspace-root'
import { copyNxTestCommand } from './copy-nx-test-command'

export const copyTestCommand = async (filepath: string) => {
  const nxJson = path.join(getWorkspaceRoot(), 'nx.json')
  if (isFile(nxJson)) return copyNxTestCommand()

  const { testCommand } = await getExtensionConfig()
  if (!testCommand) return

  const relativePath = vsc.workspace.asRelativePath(
    maybeSwapExtension(filepath)
  )
  await vsc.env.clipboard.writeText(`${testCommand} ${relativePath}`)
}
