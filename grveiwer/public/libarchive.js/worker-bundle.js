/**
 * This is a placeholder for libarchive.js worker file.
 * In a production environment, you would need to copy the actual worker file
 * from the libarchive.js module to this location.
 */

self.addEventListener('message', function(e) {
  const data = e.data;
  
  if (data.type === 'extract') {
    // Simulated extraction process
    self.postMessage({
      type: 'progress',
      progress: 100
    });
    
    // Report error - this is expected as this is just a placeholder
    self.postMessage({
      type: 'error',
      error: 'This is a placeholder worker. Please install and build libarchive.js properly.'
    });
  }
}); 