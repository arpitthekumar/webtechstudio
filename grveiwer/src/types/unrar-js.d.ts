declare module 'unrar-js' {
  export interface RarFile {
    name: string;
    size: number;
    date: number;
    isDirectory: boolean;
  }

  export class Unrar {
    constructor(filePath: string);
    on(event: 'error', callback: (error: Error) => void): void;
    on(event: 'list', callback: (files: RarFile[]) => void): void;
    on(event: 'extract', callback: (data: Buffer) => void): void;
    list(): void;
    extract(entryName: string): void;
    close(): Promise<void>;
  }
} 