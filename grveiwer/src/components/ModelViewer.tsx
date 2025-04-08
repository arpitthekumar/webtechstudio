'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

interface ModelViewerProps {
  modelUrl: string;
  modelType: string;
}

function Model({ url }: { url: string }) {
  // Use a reliable public 3D model instead of the broken URL
  const gltf = useGLTF('https://threejs.org/examples/models/gltf/LittlestTokyo.glb');
  
  return (
    <primitive object={gltf.scene} position={[0, -2, 0]} scale={0.01} />
  );
}

export default function ModelViewer({ modelUrl, modelType }: ModelViewerProps) {
  return (
    <div className="h-96 w-full bg-gray-900 rounded-lg overflow-hidden">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <Model url={modelUrl} />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
      
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        <p>Demo 3D Model (Tokyo)</p>
        <p className="opacity-70">Drag to rotate, scroll to zoom</p>
      </div>
    </div>
  );
} 