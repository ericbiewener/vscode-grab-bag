import path from 'path'
import { spawnSync } from 'child_process'
import { CTX } from './utils'

function getScriptPath() {
  return path.join(CTX.extensionPath, 'scripts/run-in-iterm.py')
}

export async function runJestTestInIterm(rootDir: string, filepath: string): Promise<void> {
  const cmd = [`cd ${rootDir}`, `npm run jest:watch ${filepath}`].join('&&')

  const { stdout } = spawnSync(getScriptPath(), ['Jest', runJestTestInIterm.sessionId, cmd])

  runJestTestInIterm.sessionId = stdout.toString().trim()
}
runJestTestInIterm.sessionId = ''
