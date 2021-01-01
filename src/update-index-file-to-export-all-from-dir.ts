import * as vsc from 'vscode'
import { promises as fs } from 'fs'
import path from 'path'
import { removeEndOfString } from '@ericbiewener/utils/src/removeEndOfString'
import { isFile } from '@ericbiewener/utils/src/isFile'

export const updateIndexFileToExportAllFromDir = async () => {
  const editor = vsc.window.activeTextEditor
  if (!editor) return

  const { document } = editor
  const filename = path.basename(document.fileName)
  if (!['index.ts', 'index.js'].includes(filename)) return

  const dir = path.dirname(document.fileName)
  const items = await fs.readdir(dir)
  const extensions = ['.js', '.jsx', '.ts', '.tsx']
  const importPaths = items
    .filter(
      (p) =>
        p !== filename &&
        (!isFile(path.join(dir, p)) || extensions.includes(path.extname(p)))
    )
    .map((p) => `export * from './${removeEndOfString(p)}'`)

  await editor.edit((builder) => {
    const endPos = document.positionAt(document.getText().length)
    builder.replace(
      new vsc.Range(0, 0, endPos.line, endPos.character),
      importPaths.join('\n')
    )
  })
}
