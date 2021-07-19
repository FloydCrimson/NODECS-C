export interface FSModule {
    lstat(path: string, options?: { bigint?: false; throwIfNoEntry?: boolean; }): Promise<Stats>;
    lstat(path: string, options: { bigint: true; throwIfNoEntry?: boolean; }): Promise<BigIntStats>;
    lstat(path: string, options?: { bigint?: boolean; throwIfNoEntry?: boolean; }): Promise<Stats | BigIntStats>;
    readdir(path: string, options?: { encoding?: BufferEncoding; withFileTypes?: false; } | BufferEncoding): Promise<string[]>;
    readdir(path: string, options: { encoding?: BufferEncoding; withFileTypes: true; } | BufferEncoding): Promise<Dirent[]>;
    readdir(path: string, options?: { encoding?: BufferEncoding; withFileTypes?: boolean; } | BufferEncoding): Promise<string[] | Dirent[]>;
}

export type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex';

export interface Stats extends StatsBase<number> { }

export interface BigIntStats extends StatsBase<bigint> { }

export interface StatsBase<T> {
    isFile: boolean;
    isDirectory: boolean;
    isBlockDevice: boolean;
    isCharacterDevice: boolean;
    isSymbolicLink: boolean;
    isFIFO: boolean;
    isSocket: boolean;
    dev: T;
    ino: T;
    mode: T;
    nlink: T;
    uid: T;
    gid: T;
    rdev: T;
    size: T;
    blksize: T;
    blocks: T;
    atimeMs: T;
    mtimeMs: T;
    ctimeMs: T;
    birthtimeMs: T;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;
}

export interface Dirent {
    isFile: boolean;
    isDirectory: boolean;
    isBlockDevice: boolean;
    isCharacterDevice: boolean;
    isSymbolicLink: boolean;
    isFIFO: boolean;
    isSocket: boolean;
    name: string;
}
