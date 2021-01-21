import path from 'path'

export const getCorrespondingTestFilepath = (filepath: string) => {
  const filenameParts = path.basename(filepath).split('.')
  filenameParts.splice(-1, 0, 'test')
  return path.join(path.dirname(filepath), '__tests__', filenameParts.join('.'))
}
