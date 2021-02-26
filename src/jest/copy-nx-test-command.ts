import vsc from 'vscode'
import path from 'path'
import { promises as fs } from 'fs'
import { getWorkspaceRoot } from '../utils/get-workspace-root'

export const copyNxTestCommand = async () => {
  const fileName = vsc.window.activeTextEditor?.document.fileName
  if (!fileName) return

  const testPath = vsc.workspace.asRelativePath(fileName)

  const { projects } = JSON.parse(
    await fs.readFile(path.join(getWorkspaceRoot(), 'workspace.json'), 'utf8')
  )

  let projectName: string | undefined

  for (const name in projects) {
    const config = projects[name]
    if (!testPath.startsWith(config.root)) continue
    projectName = name
    break
  }

  if (!projectName) {
    vsc.window.showErrorMessage(
      'Could not find Nx project name for active file.'
    )
    return
  }

  await vsc.env.clipboard.writeText(
    `yarn test ${projectName} --skip-nx-cache --codeCoverage 0 --testFile ${testPath} --watch`
  )
}
