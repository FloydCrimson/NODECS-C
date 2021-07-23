export interface FSModule {
    access(path: string, mode?: AccessConstants): Promise<void>;
    lstat(path: string, options?: { bigint?: false; throwIfNoEntry?: boolean; }): Promise<Stats>;
    lstat(path: string, options: { bigint: true; throwIfNoEntry?: boolean; }): Promise<BigIntStats>;
    lstat(path: string, options?: { bigint?: boolean; throwIfNoEntry?: boolean; }): Promise<Stats | BigIntStats>;
    readdir(path: string, options?: { encoding?: BufferEncoding; withFileTypes?: false; } | BufferEncoding): Promise<string[]>;
    readdir(path: string, options: { encoding?: BufferEncoding; withFileTypes: true; } | BufferEncoding): Promise<Dirent[]>;
    readdir(path: string, options?: { encoding?: BufferEncoding; withFileTypes?: boolean; } | BufferEncoding): Promise<string[] | Dirent[]>;
    readFile(path: string, options: { encoding: BufferEncoding; flag?: string; } | string): Promise<string>;
    writeFile(path: string, data: string, options: WriteFileOptions): Promise<void>;
}

export type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex';

export type AccessConstants = 'UV_FS_SYMLINK_DIR' | 'UV_FS_SYMLINK_JUNCTION' | 'O_RDONLY' | 'O_WRONLY' | 'O_RDWR' | 'UV_DIRENT_UNKNOWN' | 'UV_DIRENT_FILE' | 'UV_DIRENT_DIR' | 'UV_DIRENT_LINK' | 'UV_DIRENT_FIFO' | 'UV_DIRENT_SOCKET' | 'UV_DIRENT_CHAR' | 'UV_DIRENT_BLOCK' | 'S_IFMT' | 'S_IFREG' | 'S_IFDIR' | 'S_IFCHR' | 'S_IFLNK' | 'O_CREAT' | 'O_EXCL' | 'UV_FS_O_FILEMAP' | 'O_TRUNC' | 'O_APPEND' | 'F_OK' | 'R_OK' | 'W_OK' | 'X_OK' | 'UV_FS_COPYFILE_EXCL' | 'COPYFILE_EXCL' | 'UV_FS_COPYFILE_FICLONE' | 'COPYFILE_FICLONE' | 'UV_FS_COPYFILE_FICLONE_FORCE' | 'COPYFILE_FICLONE_FORCE';

export type Mode = number | string;

export type WriteFileOptions = (ObjectEncodingOptions & { mode?: Mode | undefined; flag?: string | undefined; }) | string | null;

export interface ObjectEncodingOptions {
    encoding?: BufferEncoding | null | undefined;
}

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
