import JSZip from 'jszip';
import { loadLayers } from './gerber';
import type { InputLayer } from 'pcb-stackup';
import { Unrar } from 'unrar.js';

export interface ProcessedLayers {
  layers: InputLayer[];
  totalLayers: number;
  copperLayers: number;
  maskLayers: number;
  padCount: number;
}

export interface OutputLayer extends InputLayer {
  svg?: string;
}

export async function processFile(file: File): Promise<ProcessedLayers> {
  const fileType = getFileType(file.name);
  
  if (fileType === 'zip') {
    return processZipFile(file);
  } else if (fileType === 'rar') {
    return processRarFile(file);
  } else {
    throw new Error(`Unsupported file type: ${fileType}`);
  }
}

function getFileType(filename: string): 'zip' | 'rar' | 'unknown' {
  const extension = filename.split('.').pop()?.toLowerCase();
  if (extension === 'zip') return 'zip';
  if (extension === 'rar') return 'rar';
  return 'unknown';
}

async function processZipFile(file: File): Promise<ProcessedLayers> {
  try {
    const layers = await loadLayers(file);
    return analyzeLayers(layers);
  } catch (error) {
    console.error('Error processing ZIP file:', error);
    throw new Error('Failed to process ZIP file');
  }
}

async function processRarFile(file: File): Promise<ProcessedLayers> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const unrar = new Unrar(arrayBuffer);
    
    // First check if the RAR file is valid
    if (!await unrar.isValid()) {
      throw new Error('Invalid RAR file');
    }
    
    const files = await unrar.getFiles();
    
    // Filter for Gerber files with more detailed logging
    const gerberFiles = files.filter(file => {
      const isGerber = file.name.toUpperCase().match(/\.(GTL|GBL|GTO|GBO|GTS|GBS|GTP|GBP|DRL|TXT|GKO)$/);
      if (!isGerber) {
        console.log(`Skipping non-Gerber file: ${file.name}`);
      }
      return isGerber;
    });
    
    if (gerberFiles.length === 0) {
      throw new Error('No Gerber files found in RAR archive');
    }
    
    console.log(`Found ${gerberFiles.length} Gerber files in RAR archive`);
    
    // Convert RAR files to InputLayer format with progress tracking
    const layers: InputLayer[] = await Promise.all(
      gerberFiles.map(async (file, index) => {
        console.log(`Processing file ${index + 1}/${gerberFiles.length}: ${file.name}`);
        try {
          const content = await file.extract();
          return {
            filename: file.name,
            content: content.toString(),
            type: determineLayerType(file.name)
          };
        } catch (error) {
          console.error(`Error processing file ${file.name}:`, error);
          throw error;
        }
      })
    );
    
    return analyzeLayers(layers);
  } catch (error) {
    console.error('Error processing RAR file:', error);
    throw new Error(`Failed to process RAR file: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

function determineLayerType(filename: string): string {
  const upperName = filename.toUpperCase();
  if (upperName.includes('.DRL') || upperName.includes('.TXT')) return 'drill';
  if (upperName.includes('.GTL') || upperName.includes('.GBL')) return 'copper';
  if (upperName.includes('.GTO') || upperName.includes('.GBO')) return 'silkscreen';
  if (upperName.includes('.GTS') || upperName.includes('.GBS')) return 'soldermask';
  if (upperName.includes('.GTP') || upperName.includes('.GBP')) return 'paste';
  if (upperName.includes('.GKO')) return 'outline';
  return 'ignore';
}

function analyzeLayers(layers: InputLayer[]): ProcessedLayers {
  const copperLayers = layers.filter(layer => 
    layer.filename?.toUpperCase().includes('.GTL') || 
    layer.filename?.toUpperCase().includes('.GBL')
  );

  const maskLayers = layers.filter(layer => 
    layer.filename?.toUpperCase().includes('.GTS') || 
    layer.filename?.toUpperCase().includes('.GBS')
  );

  // Count pads by analyzing drill files
  const drillFiles = layers.filter(layer => 
    layer.filename?.toUpperCase().includes('.DRL') || 
    layer.filename?.toUpperCase().includes('.TXT')
  );

  let padCount = 0;
  // Improved pad counting by parsing drill files
  drillFiles.forEach(file => {
    if (file.content) {
      // Count drill hits in the file
      const drillHits = (file.content.match(/X[0-9.]+Y[0-9.]+/g) || []).length;
      padCount += drillHits;
    }
  });

  return {
    layers,
    totalLayers: layers.length,
    copperLayers: copperLayers.length,
    maskLayers: maskLayers.length,
    padCount
  };
} 