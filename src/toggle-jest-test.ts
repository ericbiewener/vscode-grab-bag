import * as vsc from 'vscode'
import { updateLine } from './utils'

const DISABLED = /(^\s*)(test|it|describe)\(/
const ENABLED_ONLY = /(^\s*)(test|it|describe)\.only/
const ENABLED_SKIP = /(^\s*)(test|it|describe)\.skip/

const disableLineReplacer = (m: string, g1: string, g2: string) => `${g1}${g2}`

const enableLine = (
  builder: vsc.TextEditorEdit,
  lineNumber: number,
  line: string,
  useOnly: boolean
) => {
  const modifier = useOnly ? 'only' : 'skip'
  const newLine = line.replace(
    DISABLED,
    (m, g1, g2) => `${g1}${g2}.${modifier}(`
  )
  return updateLine(builder, lineNumber, newLine)
}

const disableLine = (
  builder: vsc.TextEditorEdit,
  lineNumber: number,
  line: string,
  useOnly: boolean
) => {
  const enabledRegex = useOnly ? ENABLED_ONLY : ENABLED_SKIP
  const newLine = line.replace(enabledRegex, disableLineReplacer)
  return updateLine(builder, lineNumber, newLine)
}

const getNewLine = (builder: vsc.TextEditorEdit, useOnly: boolean) => {
  const editor = vsc.window.activeTextEditor!
  const { document, selection } = editor

  const enabledRegex = useOnly ? ENABLED_ONLY : ENABLED_SKIP

  const lines = document
    .getText()
    .split('\n')
    .slice(0, selection.end.line + 1)

  for (let i = lines.length - 1; i > -1; i--) {
    const line = lines[i]

    if (DISABLED.test(line)) return enableLine(builder, i, line, useOnly)
    if (enabledRegex.test(line)) return disableLine(builder, i, line, useOnly)
  }
}

export const toggleJestTest = (useOnly = true) =>
  vsc.window.activeTextEditor!.edit((builder) => getNewLine(builder, useOnly))

// export const toggleJestTestExclusive = () => {
//   const editor = vsc.window.activeTextEditor!
//   const { document, selection } = editor

//   const globalEnabledRegex = new RegExp(ENABLED_ONLY, 'g')

//   return editor.edit((builder) => {
//     const newText = document
//       .getText()
//       .replace(globalEnabledRegex, disableLineReplacer)
//   })

//   const enabledRegex = useOnly ? ENABLED_ONLY : ENABLED_SKIP

//   const lines = document
//     .getText()
//     .split('\n')
//     .slice(0, selection.end.line + 1)

//   for (let i = lines.length - 1; i > -1; i--) {
//     const line = lines[i]

//     if (DISABLED.test(line)) return enableLine(i, line, useOnly)
//     if (enabledRegex.test(line)) return disableLine(i, line, useOnly)
//   }
// }
