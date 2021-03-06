import path from 'path';
import { isFile } from '../utils/misc';
const EXTENSION_MAP = {
    js: 'jsx',
    jsx: 'js',
    ts: 'tsx',
    tsx: 'ts',
    css: 'pcss',
    pcss: 'css',
};
export function maybeSwapExtension(filepath) {
    if (isFile(filepath))
        return filepath;
    const ext = path.extname(filepath).slice(1);
    const newExt = EXTENSION_MAP[ext];
    if (!newExt)
        return filepath;
    return `${filepath.slice(0, filepath.lastIndexOf('.'))}${newExt}`;
}
export function findFileForExtensions(filepath, extensions) {
    const filepathRoot = filepath.slice(0, filepath.lastIndexOf('.'));
    for (const ext of extensions) {
        const newPath = `${filepathRoot}.${ext}`;
        if (isFile(newPath))
            return newPath;
    }
}
//# sourceMappingURL=filepaths.js.map