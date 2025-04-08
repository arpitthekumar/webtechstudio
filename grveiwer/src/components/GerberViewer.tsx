'use client';

import { useEffect, useState, useRef } from 'react';
import PCB3DViewer from './PCB3DViewer';

interface GerberViewerProps {
  gerberFiles: { name: string; content: Blob }[];
}

export default function GerberViewer({ gerberFiles }: GerberViewerProps) {
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  const [loading, setLoading] = useState<boolean>(false);
  const [view2DMode, setView2DMode] = useState<'top' | 'bottom'>('top');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // PCB specifications
  const pcbSpecs = {
    name: "PCB-RAR v1.0",
    layers: 2,
    width: 60,
    height: 60,
    thickness: 1.6,
    copper: "1oz (35µm)",
    material: "FR-4",
    finish: "HASL"
  };

  // Create detailed PCB SVG for top view
  const topViewSVG = `
    <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <!-- PCB Base -->
      <rect x="0" y="0" width="400" height="400" fill="#0a5f2c" />
      
      <!-- Border -->
      <rect x="10" y="10" width="380" height="380" fill="none" stroke="#cca069" stroke-width="4" />
      
      <!-- Copper Traces - Main Grid -->
      <g stroke="#cca069" stroke-width="3">
        <line x1="50" y1="50" x2="350" y2="50" />
        <line x1="50" y1="100" x2="350" y2="100" />
        <line x1="50" y1="150" x2="350" y2="150" />
        <line x1="50" y1="200" x2="350" y2="200" />
        <line x1="50" y1="250" x2="350" y2="250" />
        <line x1="50" y1="300" x2="350" y2="300" />
        <line x1="50" y1="350" x2="350" y2="350" />
        
        <line x1="50" y1="50" x2="50" y2="350" />
        <line x1="100" y1="50" x2="100" y2="350" />
        <line x1="150" y1="50" x2="150" y2="350" />
        <line x1="200" y1="50" x2="200" y2="350" />
        <line x1="250" y1="50" x2="250" y2="350" />
        <line x1="300" y1="50" x2="300" y2="350" />
        <line x1="350" y1="50" x2="350" y2="350" />
      </g>
      
      <!-- Mounting Holes -->
      <circle cx="30" cy="30" r="8" fill="#333" stroke="#cca069" stroke-width="3" />
      <circle cx="370" cy="30" r="8" fill="#333" stroke="#cca069" stroke-width="3" />
      <circle cx="30" cy="370" r="8" fill="#333" stroke="#cca069" stroke-width="3" />
      <circle cx="370" cy="370" r="8" fill="#333" stroke="#cca069" stroke-width="3" />
      
      <!-- Connection Pads -->
      <g fill="#cca069">
        <circle cx="50" cy="50" r="6" />
        <circle cx="50" cy="100" r="6" />
        <circle cx="50" cy="150" r="6" />
        <circle cx="50" cy="200" r="6" />
        <circle cx="50" cy="250" r="6" />
        <circle cx="50" cy="300" r="6" />
        <circle cx="50" cy="350" r="6" />
        
        <circle cx="100" cy="50" r="6" />
        <circle cx="100" cy="100" r="6" />
        <circle cx="100" cy="150" r="6" />
        <circle cx="100" cy="200" r="6" />
        <circle cx="100" cy="250" r="6" />
        <circle cx="100" cy="300" r="6" />
        <circle cx="100" cy="350" r="6" />
      </g>
      
      <!-- IC Chip Component -->
      <g transform="translate(250, 150)">
        <rect x="-30" y="-30" width="60" height="60" fill="black" />
        
        <!-- IC Pins -->
        <g fill="#cca069">
          <!-- Left side pins -->
          <rect x="-35" y="-25" width="10" height="5" />
          <rect x="-35" y="-15" width="10" height="5" />
          <rect x="-35" y="-5" width="10" height="5" />
          <rect x="-35" y="5" width="10" height="5" />
          <rect x="-35" y="15" width="10" height="5" />
          <rect x="-35" y="25" width="10" height="5" />
          
          <!-- Right side pins -->
          <rect x="25" y="-25" width="10" height="5" />
          <rect x="25" y="-15" width="10" height="5" />
          <rect x="25" y="-5" width="10" height="5" />
          <rect x="25" y="5" width="10" height="5" />
          <rect x="25" y="15" width="10" height="5" />
          <rect x="25" y="25" width="10" height="5" />
          
          <!-- Top side pins -->
          <rect x="-25" y="-35" width="5" height="10" />
          <rect x="-15" y="-35" width="5" height="10" />
          <rect x="-5" y="-35" width="5" height="10" />
          <rect x="5" y="-35" width="5" height="10" />
          <rect x="15" y="-35" width="5" height="10" />
          <rect x="25" y="-35" width="5" height="10" />
          
          <!-- Bottom side pins -->
          <rect x="-25" y="25" width="5" height="10" />
          <rect x="-15" y="25" width="5" height="10" />
          <rect x="-5" y="25" width="5" height="10" />
          <rect x="5" y="25" width="5" height="10" />
          <rect x="15" y="25" width="5" height="10" />
          <rect x="25" y="25" width="5" height="10" />
        </g>
        
        <!-- IC Dot -->
        <circle cx="-20" cy="-20" r="3" fill="white" />
      </g>
      
      <!-- SMD Resistors -->
      <g transform="translate(100, 250)">
        <rect x="0" y="0" width="20" height="8" fill="#f0f0f0" />
      </g>
      <g transform="translate(130, 250)">
        <rect x="0" y="0" width="20" height="8" fill="#f0f0f0" />
      </g>
      <g transform="translate(160, 250)">
        <rect x="0" y="0" width="20" height="8" fill="#ff0000" />
      </g>
      <g transform="translate(190, 250)">
        <rect x="0" y="0" width="20" height="8" fill="#f0f0f0" />
      </g>
      
      <!-- Crystal -->
      <g transform="translate(150, 300)">
        <rect x="-15" y="-7" width="30" height="14" fill="silver" stroke="#888" stroke-width="1" />
      </g>
      
      <!-- Capacitor -->
      <g transform="translate(100, 300)">
        <circle cx="0" cy="0" r="10" fill="#222" stroke="#888" stroke-width="1" />
        <line x1="-5" y1="-5" x2="5" y2="5" stroke="white" stroke-width="1" />
        <line x1="-5" y1="5" x2="5" y2="-5" stroke="white" stroke-width="1" />
      </g>
      
      <!-- USB Connector -->
      <g transform="translate(350, 200)">
        <rect x="-40" y="-20" width="40" height="40" fill="silver" />
        <rect x="-30" y="-10" width="20" height="20" fill="#222" />
      </g>
      
      <!-- Silkscreen Labels -->
      <g fill="white" font-family="Arial" font-size="8">
        <text x="200" y="380" text-anchor="middle">PCB-RAR v1.0</text>
        <text x="300" y="350" font-size="12" font-weight="bold">TOP LAYER</text>
        <text x="250" y="130" font-size="6">IC1</text>
        <text x="100" y="245" font-size="6">R1</text>
        <text x="130" y="245" font-size="6">R2</text>
        <text x="160" y="245" font-size="6">LED</text>
        <text x="190" y="245" font-size="6">R3</text>
        <text x="150" y="320" font-size="6">XTAL</text>
        <text x="100" y="320" font-size="6">C1</text>
        <text x="310" y="190" font-size="6">USB</text>
      </g>
    </svg>
  `;

  // Create detailed PCB SVG for bottom view
  const bottomViewSVG = `
    <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <!-- PCB Base -->
      <rect x="0" y="0" width="400" height="400" fill="#0a5f2c" />
      
      <!-- Border -->
      <rect x="10" y="10" width="380" height="380" fill="none" stroke="#cca069" stroke-width="4" />
      
      <!-- Copper Traces - Flipped to show bottom -->
      <g stroke="#cca069" stroke-width="3">
        <line x1="50" y1="50" x2="350" y2="50" />
        <line x1="50" y1="100" x2="350" y2="100" />
        <line x1="50" y1="150" x2="350" y2="150" />
        <line x1="50" y1="200" x2="350" y2="200" />
        <line x1="50" y1="250" x2="350" y2="250" />
        <line x1="50" y1="300" x2="350" y2="300" />
        <line x1="50" y1="350" x2="350" y2="350" />
        
        <line x1="50" y1="50" x2="50" y2="350" />
        <line x1="100" y1="50" x2="100" y2="350" />
        <line x1="150" y1="50" x2="150" y2="350" />
        <line x1="200" y1="50" x2="200" y2="350" />
        <line x1="250" y1="50" x2="250" y2="350" />
        <line x1="300" y1="50" x2="300" y2="350" />
        <line x1="350" y1="50" x2="350" y2="350" />
      </g>
      
      <!-- Mounting Holes (flipped) -->
      <circle cx="370" cy="30" r="8" fill="#333" stroke="#cca069" stroke-width="3" />
      <circle cx="30" cy="30" r="8" fill="#333" stroke="#cca069" stroke-width="3" />
      <circle cx="370" cy="370" r="8" fill="#333" stroke="#cca069" stroke-width="3" />
      <circle cx="30" cy="370" r="8" fill="#333" stroke="#cca069" stroke-width="3" />
      
      <!-- Connection Pads (flipped) -->
      <g fill="#cca069">
        <circle cx="350" cy="50" r="6" />
        <circle cx="350" cy="100" r="6" />
        <circle cx="350" cy="150" r="6" />
        <circle cx="350" cy="200" r="6" />
        <circle cx="350" cy="250" r="6" />
        <circle cx="350" cy="300" r="6" />
        <circle cx="350" cy="350" r="6" />
        
        <circle cx="300" cy="50" r="6" />
        <circle cx="300" cy="100" r="6" />
        <circle cx="300" cy="150" r="6" />
        <circle cx="300" cy="200" r="6" />
        <circle cx="300" cy="250" r="6" />
        <circle cx="300" cy="300" r="6" />
        <circle cx="300" cy="350" r="6" />
      </g>
      
      <!-- Through-hole vias -->
      <g fill="#cca069" stroke="#0a5f2c" stroke-width="1">
        <circle cx="150" cy="200" r="4" />
        <circle cx="200" cy="250" r="4" />
        <circle cx="250" cy="200" r="4" />
        <circle cx="200" cy="150" r="4" />
        <circle cx="150" cy="100" r="4" />
        <circle cx="250" cy="100" r="4" />
        <circle cx="150" cy="300" r="4" />
        <circle cx="250" cy="300" r="4" />
      </g>
      
      <!-- Bottom side traces -->
      <g stroke="#cca069" stroke-width="4" fill="none">
        <path d="M150,200 L200,250 L250,200 L200,150 Z" />
        <path d="M150,100 L250,100" />
        <path d="M150,300 L250,300" />
      </g>
      
      <!-- SMD Components (bottom side) -->
      <g transform="translate(100, 150)">
        <rect x="0" y="0" width="30" height="15" fill="#2d2d2d" />
      </g>
      
      <g transform="translate(300, 150)">
        <rect x="-30" y="0" width="30" height="15" fill="#2d2d2d" />
      </g>
      
      <!-- Silkscreen Labels -->
      <g fill="white" font-family="Arial" font-size="8">
        <text x="200" y="380" text-anchor="middle">PCB-RAR v1.0</text>
        <text x="300" y="350" font-size="12" font-weight="bold">BOTTOM LAYER</text>
        <text x="100" y="145" font-size="6">U2</text>
        <text x="300" y="145" font-size="6">U3</text>
      </g>
      
      <!-- Reference marks -->
      <g fill="white">
        <circle cx="30" cy="30" r="2" />
        <circle cx="370" cy="30" r="2" />
        <text x="50" y="30" font-family="Arial" font-size="8">1</text>
        <text x="350" y="30" font-family="Arial" font-size="8">2</text>
      </g>
    </svg>
  `;

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        <span className="ml-3 text-gray-700">Rendering PCB...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-xl shadow-sm" ref={containerRef}>
      {/* Header with title and description */}
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">PCB Gerber Viewer</h2>
        <p className="text-sm text-gray-600">Interactive 2D/3D visualization of PCB design files</p>
      </div>
      
      {/* PCB Specifications Card */}
      <div className="mb-6 bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-700">PCB Specifications</h3>
          <span className="text-xs py-1 px-2 bg-blue-100 text-blue-800 rounded-full">
            {pcbSpecs.name}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <span className="font-semibold block text-gray-600">Layers:</span>
            <span className="text-gray-800">{pcbSpecs.layers}-layer board</span>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <span className="font-semibold block text-gray-600">Dimensions:</span>
            <span className="text-gray-800">{pcbSpecs.width}mm × {pcbSpecs.height}mm</span>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <span className="font-semibold block text-gray-600">Thickness:</span>
            <span className="text-gray-800">{pcbSpecs.thickness}mm</span>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <span className="font-semibold block text-gray-600">Copper:</span>
            <span className="text-gray-800">{pcbSpecs.copper}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <span className="font-semibold block text-gray-600">Material:</span>
            <span className="text-gray-800">{pcbSpecs.material}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <span className="font-semibold block text-gray-600">Surface Finish:</span>
            <span className="text-gray-800">{pcbSpecs.finish}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <span className="font-semibold block text-gray-600">Gerber Files:</span>
            <span className="text-gray-800">{gerberFiles.length} files</span>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <span className="font-semibold block text-gray-600">Status:</span>
            <span className="text-green-600 flex items-center">
              <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Ready
            </span>
          </div>
        </div>
      </div>
      
      {/* View Mode Selector */}
      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg border border-gray-300 ${
              viewMode === '2d' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setViewMode('2d')}
          >
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              2D View
            </div>
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border border-gray-300 ${
              viewMode === '3d' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setViewMode('3d')}
          >
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              3D View
            </div>
          </button>
        </div>
      </div>
      
      {viewMode === '2d' ? (
        <div className="flex flex-col">
          {/* 2D View Layer Selector */}
          <div className="mb-4 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-xs font-medium rounded-l-lg border ${
                  view2DMode === 'top' 
                    ? 'bg-indigo-600 text-white border-indigo-600' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                }`}
                onClick={() => setView2DMode('top')}
              >
                Top Layer
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-xs font-medium rounded-r-lg border ${
                  view2DMode === 'bottom' 
                    ? 'bg-indigo-600 text-white border-indigo-600' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                }`}
                onClick={() => setView2DMode('bottom')}
              >
                Bottom Layer
              </button>
            </div>
          </div>
          
          {/* 2D View Container */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            {view2DMode === 'top' ? (
              <div className="flex flex-col">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-center text-gray-800">Top Layer (Layer 1)</h3>
                  <div className="text-xs text-gray-600 text-center">
                    Components, copper traces, silkscreen markings
                  </div>
                </div>
                <div className="p-4">
                  <div 
                    className="gerber-view rounded-lg p-2 bg-gray-50 h-[480px] flex items-center justify-center overflow-auto border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors"
                    dangerouslySetInnerHTML={{ __html: topViewSVG }}
                  />
                </div>
                <div className="p-3 bg-gray-50 border-t border-gray-200 text-xs">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center">
                      <div className="w-3 h-3 bg-amber-600 mr-1 rounded-sm"></div>
                      Copper
                    </span>
                    <span className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center">
                      <div className="w-3 h-3 bg-black mr-1 rounded-sm"></div>
                      Components
                    </span>
                    <span className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center">
                      <div className="w-3 h-3 bg-white border border-gray-300 mr-1 rounded-sm"></div>
                      Silkscreen
                    </span>
                    <span className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center">
                      <div className="w-3 h-3 bg-red-600 mr-1 rounded-sm"></div>
                      LEDs
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-center text-gray-800">Bottom Layer (Layer 2)</h3>
                  <div className="text-xs text-gray-600 text-center">
                    Solder mask, copper traces, silkscreen markings
                  </div>
                </div>
                <div className="p-4">
                  <div 
                    className="gerber-view rounded-lg p-2 bg-gray-50 h-[480px] flex items-center justify-center overflow-auto border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors"
                    dangerouslySetInnerHTML={{ __html: bottomViewSVG }}
                  />
                </div>
                <div className="p-3 bg-gray-50 border-t border-gray-200 text-xs">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center">
                      <div className="w-3 h-3 bg-amber-600 mr-1 rounded-sm"></div>
                      Copper
                    </span>
                    <span className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center">
                      <div className="w-3 h-3 bg-gray-700 mr-1 rounded-sm"></div>
                      Components
                    </span>
                    <span className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center">
                      <div className="w-3 h-3 bg-white border border-gray-300 mr-1 rounded-sm"></div>
                      Silkscreen
                    </span>
                    <span className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center">
                      <div className="w-3 h-3 bg-green-700 mr-1 rounded-sm"></div>
                      Solder Mask
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 border-b border-gray-200">
            <h3 className="text-lg font-medium text-center text-gray-800">3D PCB Preview</h3>
            <div className="text-xs text-gray-600 text-center">
              Interactive 3D model with all components and layers
            </div>
          </div>
          <div className="p-4">
            <PCB3DViewer gerberFiles={gerberFiles} />
          </div>
          <div className="p-3 bg-gray-50 border-t border-gray-200 text-xs">
            <div className="text-center text-gray-600">
              Use mouse to interact: <span className="font-medium">drag</span> to rotate, <span className="font-medium">scroll</span> to zoom, <span className="font-medium">shift+drag</span> to pan
            </div>
          </div>
        </div>
      )}
      
      {/* Layer Stack-up Diagram */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h4 className="font-medium mb-3 text-sm text-gray-700 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Layer Stack-up
        </h4>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md">
            <div className="bg-white border border-gray-300 p-1 rounded text-center text-xs">Top Silkscreen (0.01mm)</div>
            <div className="bg-green-600 border border-gray-300 p-1 rounded text-center text-white text-xs">Top Solder Mask (0.015mm)</div>
            <div className="bg-amber-600 border border-gray-300 p-1 rounded text-center text-white text-xs">Top Copper - Layer 1 (35µm)</div>
            <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 border border-gray-300 p-4 rounded text-center text-xs">FR4 Substrate (1.5mm)</div>
            <div className="bg-amber-600 border border-gray-300 p-1 rounded text-center text-white text-xs">Bottom Copper - Layer 2 (35µm)</div>
            <div className="bg-green-600 border border-gray-300 p-1 rounded text-center text-white text-xs">Bottom Solder Mask (0.015mm)</div>
            <div className="bg-white border border-gray-300 p-1 rounded text-center text-xs">Bottom Silkscreen (0.01mm)</div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-4 text-center text-xs text-gray-500">
        PCB Gerber Viewer | Designed for viewing and analyzing PCB design files
      </div>
    </div>
  );
} 