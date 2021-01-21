import vsc from 'vscode'
import path from 'path'
import open from 'open'
import { getWorkspaceRoot } from './utils'

export const openCoverageReport = () => {
  const filename = vsc.window.activeTextEditor?.document.fileName
  if (!filename) return

  const workspaceRoot = getWorkspaceRoot()
  const relativeFilepath = filename.slice(workspaceRoot.length)
  const libFilepath = relativeFilepath.replace(/\/src.*/, '')

  const coveragePath = path.join(
    workspaceRoot,
    'coverage',
    libFilepath,
    'lcov-report',
    `${path.basename(filename)}.html`
  )

  open(coveragePath, { app: 'google chrome' })
}
