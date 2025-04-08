<template>
  <div ref="containerRef" class="pcb-3d-container">
    <div v-if="!loaded" class="loading-overlay">
      <a-spin tip="Loading 3D View..." />
    </div>
    <div v-if="loaded" class="controls">
      <a-button-group>
        <a-tooltip title="Reset View">
          <a-button @click="resetCamera">
            <template #icon><reload-outlined /></template>
          </a-button>
        </a-tooltip>
        <a-tooltip title="Top View">
          <a-button @click="setTopView">
            <template #icon><arrow-up-outlined /></template>
          </a-button>
        </a-tooltip>
        <a-tooltip title="Bottom View">
          <a-button @click="setBottomView">
            <template #icon><arrow-down-outlined /></template>
          </a-button>
        </a-tooltip>
      </a-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ReloadOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import type { InputLayer } from 'pcb-stackup';
import type { RenderOptions } from '@/utils/gerber';

const props = defineProps<{
  layers: InputLayer[];
  render: RenderOptions;
}>();

const containerRef = ref<HTMLElement>();
const loaded = ref(false);

// Three.js variables
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let pcbGroup: THREE.Group;

// Initialize Three.js scene
function initScene() {
  if (!containerRef.value) return;

  // Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1a1a);

  // Create camera
  camera = new THREE.PerspectiveCamera(
    45,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, -100, 80);
  camera.lookAt(0, 0, 0);

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  containerRef.value.appendChild(renderer.domElement);

  // Add orbit controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(50, 50, 50);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // Create PCB group
  pcbGroup = new THREE.Group();
  scene.add(pcbGroup);

  // Start animation loop
  animate();
  loaded.value = true;
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls?.update();
  renderer?.render(scene, camera);
}

// Create PCB mesh
function createPCB() {
  if (!pcbGroup) return;

  // Clear existing PCB
  while (pcbGroup.children.length) {
    pcbGroup.remove(pcbGroup.children[0]);
  }

  const thickness = props.render.thickness || 1.6;
  const width = 100;
  const height = 70;

  // Create board geometry
  const boardGeometry = new THREE.BoxGeometry(width, height, thickness);
  const boardMaterial = new THREE.MeshPhongMaterial({
    color: props.render.sm,
    shininess: 30,
    specular: 0x333333
  });

  const board = new THREE.Mesh(boardGeometry, boardMaterial);
  board.castShadow = true;
  board.receiveShadow = true;
  pcbGroup.add(board);

  // Add copper layers
  const copperMaterial = new THREE.MeshStandardMaterial({
    color: props.render.cf === 'gold' ? 0xccaa00 : 0xcccccc,
    metalness: 0.8,
    roughness: 0.3
  });

  // Top copper layer
  const topCopper = new THREE.Mesh(
    new THREE.PlaneGeometry(width - 2, height - 2),
    copperMaterial
  );
  topCopper.position.z = thickness / 2 + 0.01;
  pcbGroup.add(topCopper);

  // Bottom copper layer
  const bottomCopper = new THREE.Mesh(
    new THREE.PlaneGeometry(width - 2, height - 2),
    copperMaterial
  );
  bottomCopper.position.z = -thickness / 2 - 0.01;
  bottomCopper.rotation.x = Math.PI;
  pcbGroup.add(bottomCopper);
}

// Camera control functions
function resetCamera() {
  if (!camera || !controls) return;
  camera.position.set(0, -100, 80);
  camera.lookAt(0, 0, 0);
  controls.update();
}

function setTopView() {
  if (!camera || !controls) return;
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);
  controls.update();
}

function setBottomView() {
  if (!camera || !controls) return;
  camera.position.set(0, 0, -100);
  camera.lookAt(0, 0, 0);
  controls.update();
}

// Handle window resize
function handleResize() {
  if (!containerRef.value || !camera || !renderer) return;
  
  camera.aspect = containerRef.value.clientWidth / containerRef.value.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight);
}

// Watch for render option changes
watch(() => props.render, () => {
  createPCB();
}, { deep: true });

// Lifecycle hooks
onMounted(() => {
  initScene();
  createPCB();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  renderer?.dispose();
  scene?.clear();
});
</script>

<style lang="scss" scoped>
.pcb-3d-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: #1a1a1a;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  
  :deep(.ant-btn) {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style> 