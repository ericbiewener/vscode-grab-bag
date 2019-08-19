import path from 'path'
import { isFile } from '../utils/misc'

const EXTENSION_MAP: Record<string, string> = {
  js: 'jsx',
  jsx: 'js',
  ts: 'tsx',
  tsx: 'ts',
}

export function maybeSwapExtension(filepath: string) {
  if (isFile(filepath)) return filepath

  const ext = path.extname(filepath).slice(1)
  const newExt = EXTENSION_MAP[ext]
  if (!newExt) return filepath

  return `${filepath.slice(0, filepath.length - ext.length)}${newExt}`
}
