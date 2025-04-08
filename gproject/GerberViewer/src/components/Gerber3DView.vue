<template>
  <div class="gerber-3d-container" ref="containerRef">
    <div class="canvas-container"></div>
    <div class="controls">
      <a-button-group>
        <a-button @click="resetView">Reset</a-button>
        <a-button @click="viewTop">Top</a-button>
        <a-button @click="viewBottom">Bottom</a-button>
        <a-button @click="zoomIn">+</a-button>
        <a-button @click="zoomOut">-</a-button>
      </a-button-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { InputLayer } from 'pcb-stackup';
import type { RenderOptions } from '@/utils/gerber';

const props = defineProps<{
  layers: InputLayer[];
  render: RenderOptions;
}>();

const containerRef = ref<HTMLElement>();
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let board: THREE.Group;

function init() {
  if (!containerRef.value) return;
  const container = containerRef.value.querySelector('.canvas-container');
  if (!container) return;

  // Get container dimensions
  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1a1a);

  // Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(0, -100, 100);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true;

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 1);
  mainLight.position.set(50, 50, 100);
  scene.add(mainLight);

  const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
  backLight.position.set(-50, -50, -100);
  scene.add(backLight);

  // Create board
  createBoard();

  // Add grid helper
  const gridHelper = new THREE.GridHelper(200, 20);
  gridHelper.rotation.x = Math.PI / 2;
  scene.add(gridHelper);

  // Animation
  animate();

  // Handle resize
  window.addEventListener('resize', onWindowResize);
}

function createBoard() {
  // Create board group
  board = new THREE.Group();
  scene.add(board);

  // Base board dimensions
  const width = 100;
  const height = 70;
  const thickness = 1.6;

  // Base board
  const boardGeometry = new THREE.BoxGeometry(width, height, thickness);
  const boardMaterial = new THREE.MeshPhongMaterial({
    color: props.render.sm || 'green',
    shininess: 30,
    specular: 0x333333
  });
  const boardMesh = new THREE.Mesh(boardGeometry, boardMaterial);
  board.add(boardMesh);

  // Add copper layers
  const copperLayers = props.layers.filter(l => l.type === 'copper');
  copperLayers.forEach(layer => {
    const isTop = layer.side === 'top';
    const copperGeometry = new THREE.PlaneGeometry(width - 2, height - 2);
    const copperMaterial = new THREE.MeshPhongMaterial({
      color: 0xc87533,
      shininess: 90,
      specular: 0x999999,
      transparent: true,
      opacity: 0.9
    });
    const copperMesh = new THREE.Mesh(copperGeometry, copperMaterial);
    copperMesh.position.z = isTop ? thickness/2 + 0.05 : -thickness/2 - 0.05;
    copperMesh.rotation.x = Math.PI / 2;
    board.add(copperMesh);
  });

  // Add components
  addComponents();

  // Center board
  board.position.set(-width/2, -height/2, 0);
}

function addComponents() {
  const components = [
    { x: -30, y: -20, w: 10, h: 10, d: 2, color: 0x333333 }, // Large IC
    { x: 20, y: 15, w: 6, h: 3, d: 1, color: 0x666666 },     // Small IC
    { x: -20, y: 25, w: 2, h: 4, d: 1, color: 0x444444 },    // Capacitor
    { x: 30, y: -25, w: 8, h: 8, d: 3, color: 0x555555 }     // Connector
  ];

  components.forEach(comp => {
    const geometry = new THREE.BoxGeometry(comp.w, comp.h, comp.d);
    const material = new THREE.MeshPhongMaterial({
      color: comp.color,
      shininess: 60,
      specular: 0x666666
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(comp.x, comp.y, 2);
    board.add(mesh);
  });
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!containerRef.value || !camera || !renderer) return;
  const container = containerRef.value.querySelector('.canvas-container');
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// View controls
function resetView() {
  if (!camera || !controls) return;
  camera.position.set(0, -100, 100);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);
  controls.reset();
}

function viewTop() {
  if (!camera || !controls) return;
  camera.position.set(0, 0, 150);
  camera.up.set(0, 1, 0);
  camera.lookAt(0, 0, 0);
  controls.update();
}

function viewBottom() {
  if (!camera || !controls) return;
  camera.position.set(0, 0, -150);
  camera.up.set(0, 1, 0);
  camera.lookAt(0, 0, 0);
  controls.update();
}

function zoomIn() {
  if (camera) {
    camera.position.multiplyScalar(0.8);
  }
}

function zoomOut() {
  if (camera) {
    camera.position.multiplyScalar(1.2);
  }
}

onMounted(() => {
  // Wait for container to be ready
  setTimeout(init, 100);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize);
  if (renderer) {
    renderer.dispose();
  }
});

// Watch for changes
watch(() => props.layers, () => {
  if (board) {
    createBoard();
  }
}, { deep: true });

watch(() => props.render, () => {
  if (board) {
    createBoard();
  }
}, { deep: true });
</script>

<style scoped>
.gerber-3d-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  overflow: hidden;
}

.canvas-container {
  width: 100%;
  height: 100%;
}

.controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 4px;
}

:deep(.ant-btn) {
  margin: 0 2px;
}
</style> 