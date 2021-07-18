import { _global_ } from '../namespaces/global.namespace';
import { _fs_ } from '../namespaces/fs.namespace';
import { _path_ } from '../namespaces/path.namespace';

export interface ModulesImplementation {
  'fs': {
    lstat: (path: _fs_.PathLike, options: _fs_.StatOptions | undefined) => Promise<[_global_.NodeJS.ErrnoException, Transformer<_fs_.Stats | _fs_.BigIntStats>]>,
    readdir: (path: _fs_.PathLike, options: { encoding: _global_.BufferEncoding | null; } | _global_.BufferEncoding | undefined | null) => Promise<[_global_.NodeJS.ErrnoException, string[]]>
  },
  'path': {
    delimiter: (p: string) => Promise<string>,
    // posix: (p: string) => Promise<_path_.PlatformPath>, // Not supported
    sep: (p: string) => Promise<string>,
    // win32: (p: string) => Promise<_path_.PlatformPath>, // Not supported
    basename: (p: string, ext?: string) => Promise<string>,
    dirname: (p: string) => Promise<string>,
    extname: (p: string) => Promise<string>,
    format: (pP: _path_.FormatInputPathObject) => Promise<string>,
    isAbsolute: (p: string) => Promise<boolean>,
    join: (...paths: string[]) => Promise<string>,
    normalize: (p: string) => Promise<string>,
    parse: (p: string) => Promise<_path_.ParsedPath>,
    relative: (from: string, to: string) => Promise<string>,
    resolve: (...pathSegments: string[]) => Promise<string>,
    toNamespacedPath: (path: string) => Promise<string>
  }
}

type Transformer<T, K extends keyof T = never> = { [KT in Exclude<keyof T, K>]: T[KT] extends () => Promise<infer I> | infer I ? [I, any] : never };
