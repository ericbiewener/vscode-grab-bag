import path from 'path'
import { isFile } from '@ericbiewener/utils/src/isFile'
import { removeEndOfString } from '@ericbiewener/utils/src/removeEndOfString'

const EXTENSION_MAP: Record<string, string> = {
  js: 'jsx',
  jsx: 'js',
  ts: 'tsx',
  tsx: 'ts',
  css: 'pcss',
  pcss: 'css',
}

export const maybeSwapExtension = (filepath: string) => {
  if (isFile(filepath)) return filepath

  const ext = path.extname(filepath).slice(1)
  const newExt = EXTENSION_MAP[ext]
  if (!newExt) return filepath

  const swappedFilepath = `${removeEndOfString(filepath)}.${newExt}`
  return isFile(swappedFilepath) ? swappedFilepath : filepath
}
