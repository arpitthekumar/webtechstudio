'use client';

import { useState, useEffect } from 'react';
import RARViewer from '@/components/RARViewer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load necessary dependencies
    setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">RAR File Viewer</h1>
        <p className="text-center mb-8 text-gray-600">
          Upload and view RAR files directly in your browser. No installation needed.
        </p>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <RARViewer />
        )}
      </div>
    </main>
  );
}
