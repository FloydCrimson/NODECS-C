export interface PathModule {
    delimiter(type: PlatformPathType): Promise<string>;
    sep(type: PlatformPathType): Promise<string>;
    basename(type: PlatformPathType, p: string, ext?: string): Promise<string>;
    dirname(type: PlatformPathType, p: string): Promise<string>;
    extname(type: PlatformPathType, p: string): Promise<string>;
    format(type: PlatformPathType, pP: FormatInputPathObject): Promise<string>;
    isAbsolute(type: PlatformPathType, p: string): Promise<boolean>;
    join(type: PlatformPathType, ...paths: string[]): Promise<string>;
    normalize(type: PlatformPathType, p: string): Promise<string>;
    parse(type: PlatformPathType, p: string): Promise<ParsedPath>;
    relative(type: PlatformPathType, from: string, to: string): Promise<string>;
    resolve(type: PlatformPathType, ...pathSegments: string[]): Promise<string>;
    toNamespacedPath(type: PlatformPathType, path: string): Promise<string>;
}

export type PlatformPathType = 'default' | 'posix' | 'win32';

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
