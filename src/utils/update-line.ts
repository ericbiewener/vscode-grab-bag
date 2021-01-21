import * as vsc from 'vscode'

export const updateLine = (
  builder: vsc.TextEditorEdit,
  lineNumber: number,
  line: string
) => builder.replace(new vsc.Range(lineNumber, 0, lineNumber, 9999999999), line)
