'use client';

import { useState, useRef, useEffect } from 'react';
import ModelViewer from './ModelViewer';
import VideoPlayer from './VideoPlayer';
import GerberViewer from './GerberViewer';
import { extractRARFile, getFileType, ExtractedFile } from '../utils/rarExtractor';

interface FileEntry {
  name: string;
  size: number;
  isDirectory: boolean;
  path: string;
  type?: string;
  content?: Blob;
  url?: string;
}

export default function RARViewer() {
  const [entries, setEntries] = useState<FileEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<FileEntry | null>(null);
  const [previewContent, setPreviewContent] = useState<string | null>(null);
  const [extractedFiles, setExtractedFiles] = useState<Map<string, Blob>>(new Map());
  const [gerberFiles, setGerberFiles] = useState<{name: string; content: Blob}[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Verify it's a RAR file (at least by extension)
    if (!file.name.toLowerCase().endsWith('.rar')) {
      setError('Please upload a RAR file (.rar)');
      return;
    }

    setLoading(true);
    setError(null);
    setUploadedFile(file);
    setEntries([]);
    setSelectedEntry(null);
    setPreviewContent(null);
    setGerberFiles([]);

    try {
      // Extract the RAR file using our utility
      const extractedEntries = await extractRARFile(file);
      
      // Convert to FileEntry objects
      const fileEntries: FileEntry[] = extractedEntries.map(entry => ({
        name: entry.name,
        size: entry.size,
        isDirectory: entry.isDirectory,
        path: entry.path,
        type: entry.type,
        content: entry.content
      }));
      
      // Store extracted blobs for preview
      const filesMap = new Map<string, Blob>();
      extractedEntries.forEach(entry => {
        if (!entry.isDirectory) {
          filesMap.set(entry.path, entry.content);
          
          // Collect Gerber files for PCB rendering
          if (entry.type === 'gerber') {
            setGerberFiles(prev => [...prev, {name: entry.name, content: entry.content}]);
          }
        }
      });
      
      setExtractedFiles(filesMap);
      setEntries(fileEntries);
    } catch (err) {
      console.error('Error processing RAR file:', err);
      setError('Failed to process RAR file. Make sure it\'s a valid RAR archive.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilePreview = async (entry: FileEntry) => {
    if (!uploadedFile) {
      setError('No file uploaded. Please upload a RAR file first.');
      return;
    }

    setLoading(true);
    setSelectedEntry(entry);
    
    try {
      // Get content from our extracted files
      if (extractedFiles.has(entry.path)) {
        const blob = extractedFiles.get(entry.path)!;
        
        if (entry.type === 'text') {
          const text = await blob.text();
          setPreviewContent(text);
        } else if (entry.type === 'image') {
          const url = URL.createObjectURL(blob);
          setPreviewContent(url);
        } else if (entry.type === '3d') {
          const url = URL.createObjectURL(blob);
          setPreviewContent('MODEL:' + url);
        } else if (entry.type === 'video') {
          const url = URL.createObjectURL(blob);
          setPreviewContent('VIDEO:' + url);
        } else if (entry.type === 'gerber') {
          // Handle gerber files in the gerber viewer
          setPreviewContent('GERBER:' + entry.path);
        } else {
          setPreviewContent(`No preview available for ${entry.name}`);
        }
      } else {
        setPreviewContent(`No content available for ${entry.name}`);
      }
    } catch (err) {
      console.error('Error extracting file:', err);
      setError('Failed to extract file from archive.');
      setPreviewContent(null);
    } finally {
      setLoading(false);
    }
  };

  const handleFileDownload = async (entry: FileEntry) => {
    if (!uploadedFile) {
      setError('No file uploaded. Please upload a RAR file first.');
      return;
    }

    try {
      // Get content from our extracted files
      if (extractedFiles.has(entry.path)) {
        const blob = extractedFiles.get(entry.path)!;
        
        // Create a download link
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = entry.name.split('/').pop() || entry.name;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        setError(`File content not found for ${entry.name}`);
      }
    } catch (err) {
      console.error('Error downloading file:', err);
      setError('Failed to download file from archive.');
    }
  };

  const renderPreview = () => {
    if (!selectedEntry || !previewContent) return null;

    const fileName = selectedEntry.name.split('/').pop() || selectedEntry.name;

    switch (selectedEntry.type) {
      case 'text':
        return (
          <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-auto h-96">
            <pre className="whitespace-pre-wrap font-mono text-sm">{previewContent}</pre>
          </div>
        );
      case 'image':
        return (
          <div className="flex flex-col items-center">
            <img 
              src={previewContent} 
              alt={fileName} 
              className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
            />
          </div>
        );
      case '3d':
        // We're using our 3D model viewer component here
        return (
          <ModelViewer modelUrl={previewContent.replace('MODEL:', '')} modelType={fileName.split('.').pop() || 'obj'} />
        );
      case 'video':
        // We're using our video player component here
        return (
          <VideoPlayer videoUrl={previewContent.replace('VIDEO:', '')} fileName={fileName} />
        );
      case 'gerber':
        // Show Gerber PCB viewer with all gerber files
        return (
          <GerberViewer gerberFiles={gerberFiles} />
        );
      default:
        return (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-center text-gray-700">No preview available for this file type.</p>
          </div>
        );
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.name.toLowerCase().endsWith('.rar')) {
        if (fileInputRef.current) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);
          fileInputRef.current.files = dataTransfer.files;
          handleFileUpload({ target: { files: dataTransfer.files } } as unknown as React.ChangeEvent<HTMLInputElement>);
        }
      } else {
        setError('Please upload a RAR file (.rar)');
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8 text-center hover:border-blue-500 transition duration-300"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mt-1 text-sm text-gray-600">
              Drag and drop your RAR file here, or click to select
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Upload a RAR file containing Gerber PCB files (.gbr, .gbl, etc.)
            </p>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept=".rar"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
          >
            Select RAR File
          </label>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-6">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <span className="ml-3 text-gray-600">Processing...</span>
          </div>
        )}

        {entries.length > 0 && (
          <div className="bg-white rounded-lg shadow overflow-auto max-h-[calc(100vh-240px)]">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="font-medium">Contents</h3>
              <p className="text-xs text-gray-500 mt-1">
                {uploadedFile?.name} - {entries.length} items - {(uploadedFile?.size || 0) / 1024 / 1024 < 1 
                  ? `${((uploadedFile?.size || 0) / 1024).toFixed(2)} KB` 
                  : `${((uploadedFile?.size || 0) / 1024 / 1024).toFixed(2)} MB`}
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {entries.map((entry, index) => (
                <li 
                  key={index} 
                  className={`${
                    selectedEntry?.path === entry.path ? 'bg-blue-50' : 'hover:bg-gray-50'
                  } cursor-pointer`}
                  onClick={() => !entry.isDirectory && handleFilePreview(entry)}
                >
                  <div className="px-4 py-3 flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 text-gray-400">
                      {entry.isDirectory ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                      ) : entry.type === 'image' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      ) : entry.type === '3d' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.152V13h6v-1a1 1 0 012 0v1h6V7.152l-1.254.716a1 1 0 11-.992-1.736l.23-.132a1 1 0 01-.372-1.364l.5-.866a1 1 0 011.366-.366l1.254.716a1 1 0 01.372 1.364l-.5.866a1 1 0 01-1.366.366l-.23-.132-.23.132a1 1 0 01-1.364-.366l-.5-.866a1 1 0 01.366-1.364l1.254-.716a1 1 0 111.364.366l.5.866a1 1 0 01-.366 1.364L15 7.152V14a1 1 0 01-1 1H6a1 1 0 01-1-1V7.152l-1.254.716a1 1 0 11-.992-1.736l.23-.132a1 1 0 01-.366-1.364l.5-.866a1 1 0 011.366-.366l1.254.716a1 1 0 01.366 1.364l-.5.866z" clipRule="evenodd" />
                        </svg>
                      ) : entry.type === 'video' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                      ) : entry.type === 'gerber' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v1h12V3a1 1 0 00-1-1H5zm-2 3a1 1 0 00-1 1v10a2 2 0 002 2h12a2 2 0 002-2V6a1 1 0 00-1-1H3zm3 2a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3 flex-1 overflow-hidden">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {entry.name.split('/').pop() || entry.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {entry.isDirectory ? 'Directory' : `${(entry.size / 1024).toFixed(2)} KB`}
                      </div>
                    </div>
                    {!entry.isDirectory && (
                      <div className="ml-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFileDownload(entry);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                          disabled={loading}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="md:col-span-2">
        {selectedEntry ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
              <h3 className="font-medium">{selectedEntry.name}</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleFileDownload(selectedEntry)}
                  className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                >
                  Download
                </button>
                <button 
                  onClick={() => setSelectedEntry(null)}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="p-4">
              {renderPreview()}
            </div>
          </div>
        ) : (
          gerberFiles.length > 0 ? (
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-medium text-lg mb-4">PCB Preview</h3>
              <GerberViewer gerberFiles={gerberFiles} />
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center justify-center h-96">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-lg">Upload a RAR file with Gerber files</p>
              <p className="text-gray-400 text-sm mt-2">The viewer will automatically detect and render PCB files</p>
            </div>
          )
        )}
      </div>
    </div>
  );
} 