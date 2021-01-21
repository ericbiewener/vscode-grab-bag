import { isFile } from '@ericbiewener/utils/src/isFile'

export const findFileForExtensions = (
  filepath: string,
  extensions: string[]
) => {
  const filepathRoot = filepath.slice(0, filepath.lastIndexOf('.'))
  for (const ext of extensions) {
    const newPath = `${filepathRoot}.${ext}`
    if (isFile(newPath)) return newPath
  }
}
