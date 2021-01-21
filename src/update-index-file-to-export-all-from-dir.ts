import * as vsc from 'vscode'
import { promises as fs } from 'fs'
import path from 'path'
import { removeEndOfString } from '@ericbiewener/utils/src/removeEndOfString'
import { isFile } from '@ericbiewener/utils/src/isFile'
import { maybeSwapExtension } from './utils'

export const updateIndexFileToExportAllFromDir = async () => {
  const editor = vsc.window.activeTextEditor
  if (!editor) return

  const { document } = editor
  const filename = path.basename(document.fileName)

  const dir = path.dirname(document.fileName)
  const ext = path.extname(filename)
  // Strip off trailing `x` from extension because if this is a new file, `maybeSwapExtension` will
  // return whatever filename we give it, and we don't want a new file to have the `x` part of the
  // extension.
  const indexFilename = maybeSwapExtension(
    path.join(dir, `index${ext.replace(/x$/, '')}`)
  )

  const items = await fs.readdir(dir)
  const extensions = ['.js', '.jsx', '.ts', '.tsx']
  const importPaths = items
    .filter(
      (p) =>
        p !== indexFilename &&
        (!isFile(path.join(dir, p)) || extensions.includes(path.extname(p)))
    )
    .map((p) => `export * from './${removeEndOfString(p)}'`)

  await fs.writeFile(indexFilename, importPaths.join('\n'), 'utf8')
}
