export declare namespace _path_ {
    export interface ParsedPath { root: string; dir: string; base: string; ext: string; name: string; }
    export interface FormatInputPathObject { root?: string | undefined; dir?: string | undefined; base?: string | undefined; ext?: string | undefined; name?: string | undefined; }
    // export interface PlatformPath { normalize(p: string): string; join(...paths: string[]): string; resolve(...pathSegments: string[]): string; isAbsolute(p: string): boolean; relative(from: string, to: string): string; dirname(p: string): string; basename(p: string, ext?: string): string; extname(p: string): string; readonly sep: string; readonly delimiter: string; parse(p: string): ParsedPath; format(pP: FormatInputPathObject): string; toNamespacedPath(path: string): string; readonly posix: PlatformPath; readonly win32: PlatformPath; }
}
