import runJxa from 'run-jxa';
const cmd = `
  function cmd(session, text) {
    session.write({ text, newline: true });
  }`;
const getSessions = `
  function getSessions(window) {
    const sessions = []
    for (const tab of window.tabs()) sessions.push(...tab.sessions())
    return sessions
  }`;
let Application;
let delay;
let jestItermId = 'null';
export async function runJestTestInIterm(rootDir, filepath) {
    // eslint-disable-next-line require-atomic-updates
    jestItermId = await runJxa((cmd, getSessions, jestItermId, rootDir, filepath) => {
        eval(cmd);
        eval(getSessions);
        const iTerm = Application('iTerm2');
        iTerm.includeStandardAdditions = true;
        iTerm.activate();
        delay(0.1);
        const window = iTerm.currentWindow();
        let session;
        let newJestItermId = jestItermId;
        if (jestItermId) {
            session = getSessions(window).find((s) => s.id() === jestItermId);
            if (session) {
                session.select();
                Application('System Events').keystroke('c', { using: 'control down' });
                delay(0.1);
            }
        }
        if (!session) {
            session = window.createTabWithDefaultProfile().currentSession();
            newJestItermId = session.id();
        }
        cmd(session, `cd ${rootDir}`);
        cmd(session, `npm run jest:watch ${filepath}`);
        return newJestItermId;
    }, [cmd, getSessions, jestItermId, rootDir, filepath]);
}
//# sourceMappingURL=iterm.jxa.js.map