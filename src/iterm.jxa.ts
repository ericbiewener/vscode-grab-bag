import runJxa from 'run-jxa'

let Application: any
let delay: any

let jestItermId = 'null'

export async function runJestTestInIterm(rootDir: string, filepath: string) {
  jestItermId = await runJxa(
    (cmd: any, getSessions: any, jestItermId: any, rootDir: any, filepath: any): string => {
      eval(cmd)
      eval(getSessions)

      const iTerm = Application('iTerm2')
      iTerm.includeStandardAdditions = true
      iTerm.activate()
      delay(0.5)

      const window = iTerm.currentWindow()
      let session

      if (jestItermId) {
        session = getSessions(window).find((s: any) => s.id() === jestItermId)
      }

      if (!session) {
        session = window.createTabWithDefaultProfile().currentSession()
        jestItermId = session.id()
      }

      session.select()
      Application('System Events').keystroke('c', { using: 'control down' })

      cmd(session, `cd ${rootDir}`)
      cmd(session, `npm run jest:watch ${filepath}`)

      return jestItermId
    },
    [cmd, getSessions, jestItermId, rootDir, filepath]
  )
}

const cmd = `
  function cmd(session, text) {
    session.write({ text, newline: true });
  }`

const getSessions = `
  function getSessions(window) {
    const sessions = []
    for (const tab of window.tabs()) sessions.push(...tab.sessions())
    return sessions
  }`
