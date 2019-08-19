import path from 'path'
import { spawnSync } from 'child_process'
import { window } from 'vscode'
import { CTX } from './utils/misc'

export async function runJestTestInIterm(rootDir: string, filepath: string): Promise<void> {
  const cmd = [`cd ${rootDir}`, `npm run jest:watch ${filepath}`].join('&&')
  const scriptPath = path.join(CTX.extensionPath, 'scripts/run-in-iterm.py')

  const { stdout, stderr } = spawnSync(scriptPath, ['Jest', runJestTestInIterm.sessionId, cmd])
  const error = stderr.toString()

  if (error) {
    console.error(error)
    window.showErrorMessage(
      'Error when trying to execute shell command. Toggle developer tools for details.'
    )
    return
  }

  runJestTestInIterm.sessionId = stdout.toString().trim()
}
runJestTestInIterm.sessionId = ''
