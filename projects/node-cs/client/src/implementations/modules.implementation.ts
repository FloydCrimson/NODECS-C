export interface ModulesImplementation {
  'fs': {
    readdir: (path: _fs_.PathLike, options: { encoding: _global_.BufferEncoding | null; withFileTypes?: false | undefined } | _global_.BufferEncoding | undefined | null) => Promise<[NodeJS.ErrnoException | null, string[]]>
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

declare namespace _global_ {
  export type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';
}

declare namespace _fs_ {
  export type PathLike = string | URL;
  export interface ObjectEncodingOptions { encoding?: null | undefined; }
}

declare namespace _path_ {
  export interface ParsedPath {
    root: string;
    dir: string;
    base: string;
    ext: string;
    name: string;
  }
  export interface FormatInputPathObject {
    root?: string | undefined;
    dir?: string | undefined;
    base?: string | undefined;
    ext?: string | undefined;
    name?: string | undefined;
  }
  // export interface PlatformPath {
  //   normalize(p: string): string;
  //   join(...paths: string[]): string;
  //   resolve(...pathSegments: string[]): string;
  //   isAbsolute(p: string): boolean;
  //   relative(from: string, to: string): string;
  //   dirname(p: string): string;
  //   basename(p: string, ext?: string): string;
  //   extname(p: string): string;
  //   readonly sep: string;
  //   readonly delimiter: string;
  //   parse(p: string): ParsedPath;
  //   format(pP: FormatInputPathObject): string;
  //   toNamespacedPath(path: string): string;
  //   readonly posix: PlatformPath;
  //   readonly win32: PlatformPath;
  // }
}

declare namespace NodeJS {
  export interface ErrnoException extends Error { errno?: number | undefined; code?: string | undefined; path?: string | undefined; syscall?: string | undefined; stack?: string | undefined; }
}
