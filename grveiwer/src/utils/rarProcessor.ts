import { Unrar } from 'unrar-js';

export interface FileEntry {
  name: string;
  size: number;
  date: number;
  isDirectory: boolean;
}

export async function processRarFile(file: File): Promise<FileEntry[]> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/rar', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to process RAR file. Please make sure it\'s a valid RAR archive.');
  }

  const data = await response.json();
  return data.entries;
}

export async function extractFile(file: File, entryName: string): Promise<Blob> {
  // Create a temporary URL for the file
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch(`/api/rar?entry=${encodeURIComponent(entryName)}`, {
    method: 'POST',
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error('Failed to extract file from archive');
  }

  return response.blob();
} 