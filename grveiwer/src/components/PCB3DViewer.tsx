'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface PCB3DViewerProps {
  gerberFiles: { name: string; content: Blob }[];
  width?: number;
  height?: number;
}

function PCBModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // PCB dimensions in mm
  const pcbWidth = 60;
  const pcbHeight = 60;
  const pcbThickness = 1.6;
  
  // Create PCB textures with high detail using the existing createPCBTexture function
  const textureFront = useRef<THREE.CanvasTexture | null>(null);
  const textureBack = useRef<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    // Initialize textures once the component mounts
    if (textureFront.current === null) {
      textureFront.current = new THREE.CanvasTexture(createPCBTexture('front'));
      textureFront.current.anisotropy = 16;
    }
    
    if (textureBack.current === null) {
      textureBack.current = new THREE.CanvasTexture(createPCBTexture('back'));
      textureBack.current.anisotropy = 16;
    }
  }, []);
  
  return (
    <group>
      {/* Main PCB board with refined materials */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[pcbWidth, pcbHeight, pcbThickness]} />
        <meshPhysicalMaterial 
          color="#0a8f35"
          roughness={0.25}
          metalness={0.15}
          clearcoat={1.0}
          clearcoatRoughness={0.15}
          emissive="#032312"
          emissiveIntensity={0.2}
          map={textureFront.current}
          side={THREE.FrontSide}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* PCB back side with separate material for realistic look */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[pcbWidth, pcbHeight, pcbThickness]} />
        <meshPhysicalMaterial 
          color="#0a8f35"
          roughness={0.25}
          metalness={0.15}
          clearcoat={1.0}
          clearcoatRoughness={0.15}
          emissive="#032312"
          emissiveIntensity={0.2}
          map={textureBack.current}
          side={THREE.BackSide}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* PCB edge with different material */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.8, 0]}>
        <boxGeometry args={[pcbWidth, pcbHeight, pcbThickness]} />
        <meshPhysicalMaterial 
          color="#088f3b"
          roughness={0.6}
          metalness={0.1}
          side={THREE.DoubleSide}
          transparent
          opacity={0.97}
        />
      </mesh>
      
      {/* Black QFP IC component with better materials */}
      <mesh position={[15, 2.2, 10]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <boxGeometry args={[12, 12, 1.5]} />
        <meshPhysicalMaterial color="#101010" roughness={0.6} metalness={0.2} emissive="#000000" />
        
        {/* IC markings */}
        <mesh position={[0, 0.76, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshBasicMaterial color="white" transparent opacity={0.95}>
            <canvasTexture attach="map" image={createICTexture()} />
          </meshBasicMaterial>
        </mesh>
        
        {/* IC pins - with more detailed geometry */}
        {[...Array(8)].map((_, i) => {
          const spacing = 12 / 9;
          const offset = -12/2 + spacing * (i + 1);
          
          return (
            <group key={`pins-${i}`}>
              {/* Bottom row */}
              <mesh position={[offset, -12/2 - 0.6, -1.5/2 + 0.1]} rotation={[0, 0, 0]}>
                <boxGeometry args={[0.5, 1.2, 0.2]} />
                <meshStandardMaterial color="silver" metalness={0.9} roughness={0.1} />
              </mesh>
              
              {/* Top row */}
              <mesh position={[offset, 12/2 + 0.6, -1.5/2 + 0.1]} rotation={[0, 0, 0]}>
                <boxGeometry args={[0.5, 1.2, 0.2]} />
                <meshStandardMaterial color="silver" metalness={0.9} roughness={0.1} />
              </mesh>
              
              {/* Left column */}
              <mesh position={[-12/2 - 0.6, offset, -1.5/2 + 0.1]} rotation={[0, 0, Math.PI/2]}>
                <boxGeometry args={[0.5, 1.2, 0.2]} />
                <meshStandardMaterial color="silver" metalness={0.9} roughness={0.1} />
              </mesh>
              
              {/* Right column */}
              <mesh position={[12/2 + 0.6, offset, -1.5/2 + 0.1]} rotation={[0, 0, Math.PI/2]}>
                <boxGeometry args={[0.5, 1.2, 0.2]} />
                <meshStandardMaterial color="silver" metalness={0.9} roughness={0.1} />
              </mesh>
            </group>
          );
        })}
      </mesh>
      
      {/* Black SOT-23 with more detail */}
      <mesh position={[-15, 1.7, 15]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <boxGeometry args={[3, 3, 1]} />
        <meshPhysicalMaterial color="#0a0a0a" roughness={0.6} metalness={0.2} />
        
        {/* SOT-23 pins */}
        <mesh position={[-1, -1.5, -0.5]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.2]} />
          <meshStandardMaterial color="silver" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[1, -1.5, -0.5]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.2]} />
          <meshStandardMaterial color="silver" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 1.5, -0.5]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.2]} />
          <meshStandardMaterial color="silver" metalness={0.9} roughness={0.1} />
        </mesh>
      </mesh>
      
      {/* Silver crystal with better reflections */}
      <mesh position={[-15, 2.0, -5]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <boxGeometry args={[7, 3, 1.5]} />
        <meshPhysicalMaterial 
          color="silver" 
          metalness={0.95} 
          roughness={0.05}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          envMapIntensity={2.0}
        />
        
        {/* Crystal markings */}
        <mesh position={[0, 0.76, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[6, 2.5]} />
          <meshBasicMaterial color="black" transparent opacity={0.85}>
            <canvasTexture attach="map" image={createCrystalTexture()} />
          </meshBasicMaterial>
        </mesh>
      </mesh>
      
      {/* Small capacitor */}
      <mesh position={[-15, 2.0, -15]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} castShadow>
        <cylinderGeometry args={[2, 2, 3, 32]} />
        <meshPhysicalMaterial color="#555" metalness={0.5} roughness={0.4} />
        
        {/* Capacitor markings */}
        <mesh position={[0, 0, 2.01]} rotation={[Math.PI/2, 0, 0]}>
          <circleGeometry args={[1.8, 32]} />
          <meshBasicMaterial color="#222" />
          <mesh position={[0, 0, 0.01]}>
            <circleGeometry args={[1.4, 32]} />
            <meshBasicMaterial color="#444" />
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[2, 0.4]} />
              <meshBasicMaterial color="white" />
            </mesh>
          </mesh>
        </mesh>
      </mesh>
      
      {/* Big electrolytic capacitor with detailed top and polarity - brighter material */}
      <mesh position={[0, 3.5, -15]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[4, 4, 5, 32]} />
        <meshPhysicalMaterial color="#191919" metalness={0.5} roughness={0.6} />
        
        {/* Cap top */}
        <mesh position={[0, 2.51, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[4, 4, 0.1, 32]} />
          <meshPhysicalMaterial color="#555" metalness={0.6} roughness={0.3} />
        </mesh>
        
        {/* Polarity marking */}
        <mesh position={[-2, 2.52, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.1, 3]} />
          <meshBasicMaterial color="white" />
        </mesh>
        
        {/* Capacitor value label */}
        <mesh position={[0, 0, 4.01]} rotation={[Math.PI/2, 0, 0]}>
          <planeGeometry args={[6, 3]} />
          <meshBasicMaterial color="white" transparent opacity={0.9}>
            <canvasTexture attach="map" image={createCapacitorLabel()} />
          </meshBasicMaterial>
        </mesh>
      </mesh>
      
      {/* USB connector with improved detail - enhanced reflectivity */}
      <mesh position={[20, 2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <boxGeometry args={[15, 8, 3]} />
        <meshPhysicalMaterial 
          color="silver" 
          metalness={0.95} 
          roughness={0.05}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
          envMapIntensity={2.0}
        />
        
        {/* USB opening */}
        <mesh position={[7.51, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.1, 5, 1.5]} />
          <meshPhysicalMaterial color="black" metalness={0.1} roughness={0.8} />
        </mesh>
        
        {/* USB label */}
        <mesh position={[0, 4.01, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[10, 6]} />
          <meshBasicMaterial color="#888" transparent opacity={0.7}>
            <canvasTexture attach="map" image={createUSBLabel()} />
          </meshBasicMaterial>
        </mesh>
      </mesh>
      
      {/* White silkscreen label with detailed text - improved visibility */}
      <mesh position={[0, 1.7, 20]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 5]} />
        <meshBasicMaterial color="white" transparent opacity={0.95}>
          <canvasTexture attach="map" image={createSilkscreenLabel()} />
        </meshBasicMaterial>
      </mesh>
      
      {/* Mounting holes with metal ring - improved shine */}
      <CircleHole position={[25, 0, 25]} />
      <CircleHole position={[-25, 0, 25]} />
      <CircleHole position={[25, 0, -25]} />
      <CircleHole position={[-25, 0, -25]} />
      
      {/* SMD resistors and LEDs with improved material - enhanced contrast */}
      {[...Array(5)].map((_, i) => (
        <SMDComponent 
          key={i} 
          position={[15 - i * 6, 1.7, -20]} 
          color={i === 2 ? "#ff1a1a" : "#f5f5f5"} 
          isLED={i === 2}
          label={i === 2 ? "LED" : `${i * 100 + 100}Ω`}
        />
      ))}
      
      {/* LED effect for the LED component with bloom effect - brighter glow */}
      <mesh position={[3, 1.8, -20]}>
        <pointLight color="#ff3333" intensity={1.0} distance={12} decay={2} />
        <spotLight 
          position={[0, 0.5, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1.2} 
          color="#ff5555" 
          distance={10}
          castShadow={false}
        />
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#ff4444" />
      </mesh>
      
      {/* SOIC-8 component with improved pins - enhanced shine */}
      <mesh position={[-12, 1.8, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <boxGeometry args={[5, 4, 1.2]} />
        <meshPhysicalMaterial color="#111" roughness={0.7} metalness={0.3} />
        
        {/* SOIC pins - left side */}
        {[...Array(4)].map((_, i) => (
          <mesh 
            key={`soic-left-${i}`} 
            position={[-2.5, -1.5 + i, -0.6]} 
            rotation={[0, 0, 0]}
          >
            <boxGeometry args={[1, 0.4, 0.2]} />
            <meshStandardMaterial color="silver" metalness={0.95} roughness={0.05} />
          </mesh>
        ))}
        
        {/* SOIC pins - right side */}
        {[...Array(4)].map((_, i) => (
          <mesh 
            key={`soic-right-${i}`} 
            position={[2.5, -1.5 + i, -0.6]} 
            rotation={[0, 0, 0]}
          >
            <boxGeometry args={[1, 0.4, 0.2]} />
            <meshStandardMaterial color="silver" metalness={0.95} roughness={0.05} />
          </mesh>
        ))}
        
        {/* SOIC label */}
        <mesh position={[0, 0, 0.61]} rotation={[0, 0, 0]}>
          <planeGeometry args={[4, 3]} />
          <meshBasicMaterial color="white" transparent opacity={0.9}>
            <canvasTexture attach="map" image={createSOICLabel()} />
          </meshBasicMaterial>
        </mesh>
      </mesh>
    </group>
  );
}

// Enhanced mounting hole with copper ring - improved shine
function CircleHole({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Hole */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 3, 32]} />
        <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Metal ring around hole with enhanced reflectivity */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.51, 0]}>
        <ringGeometry args={[2, 4, 32]} />
        <meshStandardMaterial 
          color="#dda066" 
          metalness={0.95} 
          roughness={0.05}
          emissive="#663300"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Additional highlight ring to make it more visible */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.52, 0]}>
        <ringGeometry args={[2.1, 3.9, 32]} />
        <meshBasicMaterial 
          color="#eeddaa" 
          transparent 
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

// Enhanced SMD Component with label
function SMDComponent({ 
  position, 
  color, 
  isLED = false,
  label = ""
}: { 
  position: [number, number, number], 
  color: string, 
  isLED?: boolean,
  label?: string
}) {
  return (
    <group position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <boxGeometry args={[2, 1, 0.5]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.4} 
          emissive={isLED ? color : undefined}
          emissiveIntensity={isLED ? 0.8 : 0}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
        />
      </mesh>
      
      {/* Label on top - improved visibility */}
      {label && (
        <mesh position={[0, 0.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.8, 0.8]} />
          <meshBasicMaterial color={isLED ? "white" : "black"} transparent opacity={0.9}>
            <canvasTexture attach="map" image={createComponentLabel(label)} />
          </meshBasicMaterial>
        </mesh>
      )}
    </group>
  );
}

// Create a texture for component labels
function createComponentLabel(text: string, width = 128, height = 64): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Transparent background
  ctx.clearRect(0, 0, width, height);
  
  // Draw text
  ctx.fillStyle = 'white';
  
  // Adjust font size based on text length
  const fontSize = Math.min(20, 180 / text.length);
  ctx.font = `${fontSize}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas;
}

// Create a texture for crystal with enhanced detail
function createCrystalTexture(width = 256, height = 128): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Black background with slight texture
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, width, height);
  
  // Add subtle texture
  ctx.globalAlpha = 0.05;
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    ctx.fillStyle = '#fff';
    ctx.fillRect(x, y, 1, 1);
  }
  ctx.globalAlpha = 1.0;
  
  // Draw main text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 32px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('16.000 MHz', width / 2, height / 2);
  
  // Add manufacturer
  ctx.font = '14px monospace';
  ctx.fillText('CRYSTAL', width / 2, height / 4);
  
  // Add tolerance info
  ctx.font = '12px monospace';
  ctx.fillText('±20 PPM', width / 2, height * 0.75);
  
  return canvas;
}

// Create a texture for capacitor label with enhanced detail
function createCapacitorLabel(width = 256, height = 128): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Transparent background
  ctx.clearRect(0, 0, width, height);
  
  // Draw main text
  ctx.fillStyle = 'black';
  ctx.font = 'bold 28px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('470μF 16V', width / 2, height / 2);
  
  // Add manufacturer and temperature rating
  ctx.font = '14px monospace';
  ctx.fillText('NICHICON', width / 2, height / 4);
  ctx.fillText('-40°C~+105°C', width / 2, height * 0.75);
  
  // Draw polarization markers
  ctx.beginPath();
  ctx.arc(width * 0.15, height * 0.5, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText('+', width * 0.15, height * 0.5);
  
  // Add batch code
  ctx.font = '12px monospace';
  ctx.fillText('Lot: 23A45F', width * 0.8, height * 0.85);
  
  return canvas;
}

// Create a texture for USB label with enhanced detail
function createUSBLabel(width = 256, height = 128): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Transparent background
  ctx.clearRect(0, 0, width, height);
  
  // Draw USB logo and text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 36px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('USB', width / 2, height / 2);
  
  // Add connector type
  ctx.font = '18px Arial';
  ctx.fillText('Type-C', width / 2, height * 0.75);
  
  // Draw USB symbol
  ctx.beginPath();
  ctx.arc(width * 0.25, height * 0.4, 10, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(width * 0.25, height * 0.25);
  ctx.lineTo(width * 0.25, height * 0.4 - 10);
  ctx.stroke();
  
  // Draw horizontal line with endpoints
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.15, height * 0.25);
  ctx.lineTo(width * 0.35, height * 0.25);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(width * 0.15, height * 0.25, 5, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(width * 0.35, height * 0.25, 5, 0, Math.PI * 2);
  ctx.fill();
  
  return canvas;
}

// Create a texture for SOIC label with enhanced detail
function createSOICLabel(width = 256, height = 128): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Transparent background
  ctx.clearRect(0, 0, width, height);
  
  // Draw chip name
  ctx.fillStyle = 'white';
  ctx.font = 'bold 24px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('LM358', width / 2, height * 0.35);
  
  // Draw chip description
  ctx.font = '16px monospace';
  ctx.fillText('DUAL OP-AMP', width / 2, height * 0.55);
  
  // Draw manufacturer and date code
  ctx.font = '12px monospace';
  ctx.fillText('Texas Instruments', width / 2, height * 0.75);
  ctx.fillText('2304A', width / 2, height * 0.9);
  
  // Draw pin 1 marker
  ctx.beginPath();
  ctx.arc(width * 0.15, height * 0.15, 8, 0, Math.PI * 2);
  ctx.fill();
  
  return canvas;
}

// Create a texture for silkscreen label with enhanced detail
function createSilkscreenLabel(width = 512, height = 64): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Transparent background
  ctx.clearRect(0, 0, width, height);
  
  // Main board label
  ctx.fillStyle = 'white';
  ctx.font = 'bold 26px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('PCB-RAR v1.0 © 2024', width / 2, height / 2);
  
  // Add board specs
  ctx.font = '12px Arial';
  ctx.fillText('2 LAYER FR4 1.6mm HASL', width * 0.2, height * 0.8);
  
  // Add website/contact
  ctx.font = '12px Arial';
  ctx.fillText('www.rarviewer.com', width * 0.8, height * 0.8);
  
  return canvas;
}

// Create texture for PCB with enhanced detail
function createPCBTexture(side: 'front' | 'back', width = 1024, height = 1024): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Base color
  const baseColor = side === 'front' ? '#0a6f30' : '#0a6f30';
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, width, height);
  
  // Create subtle texture pattern
  ctx.globalAlpha = 0.07;
  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 2 + 0.5;
    ctx.fillStyle = Math.random() > 0.5 ? '#000' : '#fff';
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1.0;
  
  // Draw grid pattern
  ctx.strokeStyle = side === 'front' ? '#0e9340' : '#0e9340';
  ctx.lineWidth = 0.5;
  const gridSize = 30;
  
  ctx.globalAlpha = 0.3;
  for (let x = 0; x <= width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  
  for (let y = 0; y <= height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1.0;
  
  // Draw traces
  ctx.strokeStyle = '#dda066';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  
  // Different trace patterns for front and back
  if (side === 'front') {
    // Front side traces
    drawRandomTraces(ctx, width, height, 25, 3, 7);
    
    // Add connection pads
    drawPads(ctx, width, height, 20);
    
    // Add silkscreen text and markings
    ctx.fillStyle = 'white';
    ctx.font = '24px monospace';
    ctx.fillText('PCB-REV2.1', width * 0.1, height * 0.95);
    ctx.fillText('MADE IN USA', width * 0.65, height * 0.95);
    
    // Draw component outlines
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    
    // IC outline
    ctx.strokeRect(width * 0.3, height * 0.3, width * 0.4, height * 0.2);
    
    // Pin 1 marker
    ctx.beginPath();
    ctx.arc(width * 0.3, height * 0.3, 10, 0, Math.PI * 2);
    ctx.fill();
    
    // Add manufacturer logo
    ctx.font = 'bold 28px Arial';
    ctx.fillText('PCBTECH', width * 0.4, height * 0.15);
  } else {
    // Back side traces (different pattern)
    drawRandomTraces(ctx, width, height, 20, 5, 9);
    
    // Add connection pads and vias
    drawPads(ctx, width, height, 15);
    
    // Add regulatory markings
    ctx.fillStyle = 'white';
    ctx.font = '20px monospace';
    ctx.fillText('SN: 23492374D', width * 0.1, height * 0.1);
    ctx.fillText('RoHS COMPLIANT', width * 0.7, height * 0.1);
    
    // Add QR code-like pattern
    const qrSize = 100;
    ctx.fillStyle = 'white';
    ctx.fillRect(width * 0.8, height * 0.8, qrSize, qrSize);
    
    // QR code cells
    ctx.fillStyle = 'black';
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (Math.random() > 0.5) {
          ctx.fillRect(
            width * 0.8 + i * (qrSize / 6), 
            height * 0.8 + j * (qrSize / 6), 
            qrSize / 6, 
            qrSize / 6
          );
        }
      }
    }
    
    // Add warning text
    ctx.fillStyle = 'white';
    ctx.font = '18px Arial';
    ctx.fillText('WARNING: NO USER SERVICEABLE PARTS', width * 0.25, height * 0.5);
  }
  
  return canvas;
}

// Helper function to draw random traces
function drawRandomTraces(
  ctx: CanvasRenderingContext2D, 
  width: number, 
  height: number, 
  count: number,
  minSegments: number,
  maxSegments: number
) {
  for (let i = 0; i < count; i++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    const segments = Math.floor(Math.random() * (maxSegments - minSegments)) + minSegments;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    for (let j = 0; j < segments; j++) {
      // Prefer horizontal and vertical movements (PCB trace style)
      const direction = Math.floor(Math.random() * 4);
      const distance = Math.random() * 150 + 30;
      
      if (direction === 0) x += distance;
      else if (direction === 1) x -= distance;
      else if (direction === 2) y += distance;
      else y -= distance;
      
      // Keep within bounds
      x = Math.max(0, Math.min(width, x));
      y = Math.max(0, Math.min(height, y));
      
      ctx.lineTo(x, y);
    }
    
    ctx.stroke();
  }
}

// Helper function to draw connection pads
function drawPads(ctx: CanvasRenderingContext2D, width: number, height: number, count: number) {
  ctx.fillStyle = '#dda066';
  
  for (let i = 0; i < count; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 10 + 5;
    
    // 70% circular pads, 30% square pads
    if (Math.random() > 0.3) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(x - size, y - size, size * 2, size * 2);
    }
  }
}

// Create texture for IC chips with markings
function createICTexture(name: string = 'ATmega328P', width = 256, height = 256): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  
  // Black background
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, width, height);
  
  // Add subtle texture
  ctx.globalAlpha = 0.05;
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    ctx.fillStyle = '#fff';
    ctx.fillRect(x, y, 1, 1);
  }
  ctx.globalAlpha = 1.0;
  
  // IC markings
  ctx.fillStyle = 'white';
  ctx.font = `bold ${height * 0.12}px monospace`;
  ctx.textAlign = 'center';
  ctx.fillText(name, width / 2, height * 0.3);
  
  // Manufacturer
  ctx.font = `${height * 0.08}px monospace`;
  ctx.fillText('MICROCHIP', width / 2, height * 0.5);
  
  // Pin 1 indicator (circle in corner)
  ctx.beginPath();
  ctx.arc(width * 0.15, height * 0.15, width * 0.08, 0, Math.PI * 2);
  ctx.fill();
  
  // Date code
  ctx.font = `${height * 0.08}px monospace`;
  ctx.fillText('2023-07-A', width / 2, height * 0.7);
  
  // Add logo
  ctx.beginPath();
  ctx.moveTo(width * 0.3, height * 0.8);
  ctx.lineTo(width * 0.7, height * 0.8);
  ctx.lineTo(width * 0.5, height * 0.9);
  ctx.closePath();
  ctx.fill();
  
  return canvas;
}

export default function PCB3DViewer({ gerberFiles }: PCB3DViewerProps) {
  const [pcbInfo, setPcbInfo] = useState({
    layers: 2,
    width: 60,
    height: 60,
    thickness: 1.6,
    copperThickness: 0.035,
    surfaceFinish: "HASL"
  });
  
  // Add camera control states for animation transitions
  const [cameraView, setCameraView] = useState<'top' | 'bottom' | 'angle'>('angle');
  const [rotating, setRotating] = useState(true);
  
  return (
    <div className="flex flex-col">
      <div className="mb-3">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="flex flex-col">
              <span className="font-semibold">Layers:</span>
              <span className="text-gray-700">{pcbInfo.layers} Layer PCB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Dimensions:</span>
              <span className="text-gray-700">{pcbInfo.width}mm × {pcbInfo.height}mm</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Thickness:</span>
              <span className="text-gray-700">{pcbInfo.thickness}mm</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Copper:</span>
              <span className="text-gray-700">{pcbInfo.copperThickness}mm</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Surface:</span>
              <span className="text-gray-700">{pcbInfo.surfaceFinish}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Files:</span>
              <span className="text-gray-700">{gerberFiles.length} Gerber files</span>
            </div>
          </div>
        </div>
      </div>

      {/* Camera control buttons */}
      <div className="mb-3 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-l-lg ${
              cameraView === 'top' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setCameraView('top')}
          >
            Top View
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 text-xs font-medium ${
              cameraView === 'angle' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setCameraView('angle')}
          >
            Angle View
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-r-lg ${
              cameraView === 'bottom' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setCameraView('bottom')}
          >
            Bottom View
          </button>
          <button
            type="button"
            className={`ml-2 px-3 py-1.5 text-xs font-medium rounded-lg ${
              rotating 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setRotating(!rotating)}
          >
            {rotating ? 'Stop Rotation' : 'Start Rotation'}
          </button>
        </div>
      </div>
      
      <div className="relative h-[500px] w-full bg-gray-900 rounded-lg overflow-hidden shadow-xl">
        <Canvas shadows dpr={[1, 2]}>
          <color attach="background" args={['#151520']} />
          <fog attach="fog" args={['#151520', 60, 150]} />
          
          {/* Improved lighting setup */}
          <ambientLight intensity={1.0} />
          <directionalLight 
            position={[20, 40, 25]} 
            intensity={4.5} 
            castShadow 
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={100}
            shadow-camera-left={-40}
            shadow-camera-right={40}
            shadow-camera-top={40}
            shadow-camera-bottom={-40}
          />
          <pointLight position={[-20, 20, -20]} intensity={0.8} color="#fff" />
          <pointLight position={[0, 10, 0]} intensity={0.6} color="#ffffff" />
          <spotLight 
            position={[-15, 40, 25]} 
            angle={0.4} 
            penumbra={0.8} 
            intensity={3}
            castShadow
            shadow-mapSize={[1024, 1024]}
            color="#ffffff"
          />
          <hemisphereLight
            intensity={0.5}
            color="#ffffff"
            groundColor="#323232"
          />
          
          <PCBModel />
          
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.5} 
            scale={100} 
            blur={2} 
            far={10} 
            color="#000000" 
          />
          
          {/* Camera positions */}
          {cameraView === 'top' && (
            <PerspectiveCamera 
              makeDefault 
              position={[0, 60, 0]} 
              fov={22}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          )}
          
          {cameraView === 'bottom' && (
            <PerspectiveCamera 
              makeDefault 
              position={[0, -60, 0]} 
              fov={22}
              rotation={[Math.PI / 2, 0, 0]}
            />
          )}
          
          {cameraView === 'angle' && (
            <PerspectiveCamera 
              makeDefault 
              position={[40, 45, 40]} 
              fov={22}
            />
          )}
          
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={rotating}
            autoRotateSpeed={0.5}
            maxDistance={120}
            minDistance={20}
          />
          
          <Environment preset="sunset" />
          
          {/* Add a grid to help with scale perception */}
          <gridHelper 
            args={[120, 24, '#666', '#444']} 
            position={[0, -2, 0]} 
            rotation={[0, Math.PI / 4, 0]}
          />
        </Canvas>
        
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-xs px-3 py-2 rounded-md">
          <p className="font-medium">PCB 3D Model - {pcbInfo.layers} Layer Board</p>
          <p className="opacity-70 text-xs mt-1">👆 Use mouse to interact: Drag to rotate, scroll to zoom</p>
        </div>
        
        <div className="absolute top-3 right-3">
          <div className="bg-black bg-opacity-70 text-white text-xs px-3 py-2 rounded-md">
            <p className="font-bold">PCB-RAR v1.0</p>
            <p className="text-xs opacity-70 mt-1">{pcbInfo.width}mm × {pcbInfo.height}mm</p>
          </div>
        </div>
      </div>
      
      {/* Component legend */}
      <div className="mt-4 bg-white rounded-lg p-3 shadow-sm">
        <h4 className="text-sm font-medium mb-2">Component Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-black mr-2"></div>
            <span>IC (STM32F103)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-600 mr-2"></div>
            <span>LED Indicator</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 mr-2"></div>
            <span>Resistors</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-400 mr-2"></div>
            <span>Capacitors</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-600 mr-2"></div>
            <span>Copper Traces</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-white border border-gray-400 mr-2"></div>
            <span>Silkscreen</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-600 mr-2"></div>
            <span>Crystal</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-500 mr-2"></div>
            <span>USB Connector</span>
          </div>
        </div>
      </div>
    </div>
  );
} 