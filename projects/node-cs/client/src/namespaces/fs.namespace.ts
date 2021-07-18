export declare namespace _fs_ {
    export type PathLike = string | URL;
    export interface StatOptions { bigint?: boolean | undefined; throwIfNoEntry?: boolean | undefined; }
    export interface Stats extends StatsBase<number> { }
    export interface BigIntStats extends StatsBase<bigint> { }
    export interface StatsBase<T> { isFile(): boolean; isDirectory(): boolean; isBlockDevice(): boolean; isCharacterDevice(): boolean; isSymbolicLink(): boolean; isFIFO(): boolean; isSocket(): boolean; dev: T; ino: T; mode: T; nlink: T; uid: T; gid: T; rdev: T; size: T; blksize: T; blocks: T; atimeMs: T; mtimeMs: T; ctimeMs: T; birthtimeMs: T; atime: Date; mtime: Date; ctime: Date; birthtime: Date; }
    export interface ObjectEncodingOptions { encoding?: null | undefined; }
}
