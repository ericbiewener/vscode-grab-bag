import { window, languages } from 'vscode'

export async function removeUnusedVariableDestructuring(): Promise<void> {
  const editor = window.activeTextEditor
  if (!editor) return

  const { document } = editor
  const diagnostics = languages
    .getDiagnostics(document.uri)
    .filter(({ code, source }) => source === 'eslint' && code === 'no-unused-vars')
    .map(d => ({
      start: console.log(d.range[0]) || document.offsetAt(getPos(d.range[0])),
      end: console.log(d.range[1]) || document.offsetAt(getPos(d.range[1])),
    }))

  console.log(diagnostics)
  return

  if (!diagnostics.length) return

  const regex = /const {[^}]*/g

  const text = document.getText()
  const ranges = []
  let match
  while ((match = regex.exec(text))) {
    ranges.push({ start: match.index, end: match.index + match[0].length })
  }

  const editRanges = []

  for (const d of diagnostics) {
    console.log(d, d.range, d.range[0])
    const start = document.offsetAt(getPos(d.range[0]))
    const end = document.offsetAt(getPos(d.range[1]))
    const isDestructure = ranges.some(r => r.start <= start && r.end >= end)
    if (isDestructure) editRanges.push(d.range)
  }

  await editor.edit(builder => {
    for (const r of editRanges) {
      const start = r[0]
      const end = r[1]
      const endOffset = document.offsetAt(getPos(end))
      const endOffsetModifier = text[endOffset + 1] === ',' ? 1 : 0
      builder.delete(
        new Range(start.line, start.character, end.line, end.character + endOffsetModifier)
      )
    }
  })
}
