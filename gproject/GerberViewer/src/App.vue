<template>
  <div class="app-container">
    <!-- Top Section with Upload or Canvas -->
    <div class="top-section">
      <!-- Upload Area -->
      <div v-if="!layers.length" class="upload-area">
        <div class="upload-box">
          <h3>Choose Gerber/file or drag & drop here</h3>
          <p>File format should be</p>
          <p class="file-format">only accepted .zip or .rar file</p>
          <a-upload
            :custom-request="loadGerber"
            :show-upload-list="false"
            accept=".zip,.gbr,.GTL,.GBL,.GTO,.GBO,.GTS,.GBS,.GTP,.GBP,.DRL,.TXT,.GKO"
            class="upload-trigger">
            <a-button type="primary" :loading="loading">
              <template #icon><upload-outlined /></template>
              {{ loading ? 'Uploading...' : 'Open Gerber File' }}
            </a-button>
          </a-upload>
        </div>
      </div>

      <!-- PCB Preview (shows after upload) -->
      <div v-else class="preview-container">
        <div class="canvas-wrapper">
          <div v-if="isRendering" class="loading-overlay">
            <a-spin tip="Rendering PCB..." />
          </div>
          <gerber-view 
            :layers="layers" 
            :render="render"
            class="gerber-canvas" 
          />
        </div>
      </div>
    </div>

    <!-- Layer Controls (below canvas) -->
    <div v-if="layers.length" class="layer-controls-container">
      <div class="layer-controls-wrapper">
          <a-button 
            type="primary" 
            :class="['both-sides-button', { 'active': render.showBothSides }]"
            @click="toggleBothSides"
          >
            <template #icon><swap-outlined /></template>
            {{ render.showBothSides ? 'Single Side' : 'Both Sides' }}
          </a-button>
        <a-button 
          class="layer-settings" 
          @click="showLayerSettings = true"
        >
          <template #icon><setting-outlined /></template>
          Layer Settings
        </a-button>
      </div>
    </div>

    <!-- PCB Details Section (Always visible) -->
    <div class="content-container">
      <div class="pcb-details">
        <div class="detail-section">
          <div class="section-row">
            <label>Dimensions</label>
            <div class="dimensions-input">
              <a-input-number 
                v-model:value="pcbDimensions.width" 
                :min="0" 
                :disabled="!layers.length"
                :precision="dimensionUnit === 'in' ? 3 : 2"
                placeholder="Length"
              /> x
              <a-input-number 
                v-model:value="pcbDimensions.height" 
                :min="0" 
                :disabled="!layers.length"
                :precision="dimensionUnit === 'in' ? 3 : 2"
                placeholder="Width"
              />
              <a-select 
                v-model:value="dimensionUnit" 
                style="width: 70px"
                :disabled="!layers.length"
              >
                <a-select-option value="mm">mm</a-select-option>
                <a-select-option value="in">in</a-select-option>
              </a-select>
          </div>
          </div>

          <div class="section-row">
            <label>Mask Color</label>
            <div class="color-display">
              <a-select 
                v-model:value="render.colors.sm"
                style="width: 120px"
                @change="updateLayerSettings"
              >
                <a-select-option value="#2d4a2d">Green</a-select-option>
                <a-select-option value="#1a3a5a">Blue</a-select-option>
                <a-select-option value="#5a1a1a">Red</a-select-option>
                <a-select-option value="#1a1a1a">Black</a-select-option>
              </a-select>
              <span class="color-preview" :style="{ backgroundColor: render.colors.sm }"></span>
            </div>
          </div>

          <div class="section-row">
            <label>File Name</label>
            <span class="info-value">{{ gerber?.name || '-' }}</span>
        </div>
        
          <div class="section-row">
            <label>Total Layers</label>
            <span class="info-value">{{ totalLayers || '-' }}</span>
          </div>

          <div class="section-row">
            <label>Copper Layers</label>
            <span class="info-value">{{ copperLayers || '-' }}</span>
          </div>

          <div class="section-row">
            <label>Mask Layers</label>
            <span class="info-value">{{ maskLayers || '-' }}</span>
          </div>

          <div class="section-row">
            <label>Number of Pads</label>
            <span class="info-value">{{ padCount || '-' }}</span>
          </div>
        </div>
        
        <div class="output-section">
          <h3>Output:</h3>
          <div class="section-row">
            <label>Format</label>
            <div class="format-options">
              <a-radio-group v-model:value="outputFormat" :disabled="!layers.length">
                <a-radio-button value="svg">SVG</a-radio-button>
                <a-radio-button value="png">PNG</a-radio-button>
              </a-radio-group>
          </div>
          </div>

          <div class="section-row">
            <label>Layering</label>
            <a-checkbox v-model:checked="outputLayered" :disabled="!layers.length">
              Output Layered files
            </a-checkbox>
          </div>

          <div class="section-row">
            <label>Relief</label>
            <a-checkbox v-model:checked="exportRelief" :disabled="!layers.length">
              Export relief texture
            </a-checkbox>
          </div>

          <a-button 
            type="primary" 
            class="output-button"
            :disabled="!layers.length || rendering"
            @click="outputFile"
          >
            Output File
          </a-button>

          <!-- Loading Indicator -->
          <div v-if="rendering" class="loading-indicator">
            Generating output, please wait...
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="error-message">
            Error: {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- Layer Settings Modal -->
    <a-modal
      v-model:visible="showLayerSettings"
      title="Layer Settings"
      width="800px"
      class="layer-settings-modal"
      :footer="null"
    >
      <div class="layer-settings-content">
        <div class="layers-list">
          <div v-for="(layer, index) in layers" :key="layer.filename" class="layer-item">
            <div class="layer-name">{{ layer.filename }}</div>
            <div class="layer-controls">
              <a-select 
                v-model:value="layer.type" 
                style="width: 120px"
                @change="updateLayerSettings"
              >
                <a-select-option value="drill">Drill</a-select-option>
                <a-select-option value="copper">Copper</a-select-option>
                <a-select-option value="silkscreen">Silkscreen</a-select-option>
                <a-select-option value="soldermask">Soldermask</a-select-option>
                <a-select-option value="ignore">Ignore</a-select-option>
              </a-select>
              
              <div class="side-buttons" v-if="layer.type === 'copper' || layer.type === 'soldermask' || layer.type === 'silkscreen'">
                <a-button 
                  :type="layer.side === 'top' ? 'primary' : 'default'"
                  size="small"
                  @click="setLayerSide(layer, 'top')"
                >
                  Top
                </a-button>
                <a-button 
                  :type="layer.side === 'bottom' ? 'primary' : 'default'"
                  size="small"
                  @click="setLayerSide(layer, 'bottom')"
                >
                  Bottom
                </a-button>
                <a-button 
                  :type="layer.side === 'inner' ? 'primary' : 'default'"
                  size="small"
                  @click="setLayerSide(layer, 'inner')"
                >
                  Inner
                </a-button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a-button @click="restoreDefaults">Restore Default</a-button>
          <a-button type="primary" @click="applyLayerSettings">Apply</a-button>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import type { InputLayer } from 'pcb-stackup';
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { InfoCircleOutlined, UploadOutlined, EyeOutlined, SwapOutlined, SettingOutlined } from '@ant-design/icons-vue';
import JSZip from 'jszip';
import stackup from 'pcb-stackup';

import XPanelContainer from '@/components/XPanelContainer.vue';
import XPanel from '@/components/XPanel.vue';
import GerberView from '@/components/GerberView.vue';
import Gerber3DView from '@/components/Gerber3DView.vue';

import LayersPanel from '@/panels/LayersPanel.vue';
import RenderPanel from '@/panels/RenderPanel.vue';
import OutputPanel from '@/panels/OutputPanel.vue';

import { loadLayers, renderStack, type RenderOptions } from '@/utils/gerber';
import { toPNG, toSVG } from '@/utils/svg';
import { outputZip } from '@/utils/zip';
import { processFile } from '@/utils/fileProcessor';
import type { OutputLayer } from '@/utils/fileProcessor';
import type { ExtendedLayer, PCBColor } from '@/types/layer';
import { COLORS, FINISHES, PASTE } from '@/utils/gerber';

// Add color options
const pcbColors: PCBColor[] = [
  {
    name: 'Green',
    value: 'green',
    colors: {
      fr4: '#2d4a2d',
      cu: '#c0a070',
      cf: '#2d4a2d',
      sm: '#2d4a2d',
      ss: '#ffffff',
      sp: '#2d4a2d',
      out: '#2d4a2d'
    }
  },
  {
    name: 'Blue',
    value: 'blue',
    colors: {
      fr4: '#1a3a5a',
      cu: '#c0a070',
      cf: '#1a3a5a',
      sm: '#1a3a5a',
      ss: '#ffffff',
      sp: '#1a3a5a',
      out: '#1a3a5a'
    }
  },
  {
    name: 'Red',
    value: 'red',
    colors: {
      fr4: '#5a1a1a',
      cu: '#c0a070',
      cf: '#5a1a1a',
      sm: '#5a1a1a',
      ss: '#ffffff',
      sp: '#5a1a1a',
      out: '#5a1a1a'
    }
  },
  {
    name: 'Black',
    value: 'black',
    colors: {
      fr4: '#1a1a1a',
      cu: '#c0a070',
      cf: '#1a1a1a',
      sm: '#1a1a1a',
      ss: '#ffffff',
      sp: '#1a1a1a',
      out: '#1a1a1a'
    }
  }
];

const selectedColor = ref(pcbColors[0]);

// Define render options interface
interface ExtendedRenderOptions {
  side: 'top' | 'bottom';
  sm: string;
  cf: string;
  sp: boolean;
  view3d: boolean;
  showBothSides: boolean;
  dimensions?: { width: number; height: number };
  layers?: Array<{
    filename: string;
    visible: boolean;
    opacity: number;
    color: string;
  }>;
  colors: {
    fr4: string;
    cu: string;
    cf: string;
    sm: string;
    ss: string;
    sp: string;
    out: string;
  };
}

const loading = ref(false);
const isRendering = ref(false);
const gerber = ref<File>();
const layers = ref<ExtendedLayer[]>([]);
const dimensionUnit = ref('mm');
const pcbDimensions = ref({ width: 0, height: 0 });
const originalDimensions = ref({ width: 0, height: 0 });
const render = ref<ExtendedRenderOptions>({
  side: 'top',
  sm: 'green',
  cf: 'none',
  sp: false,
  view3d: false,
  showBothSides: false,
  colors: pcbColors[0].colors
});

// Computed properties for displayed dimensions
const displayedDimensions = computed(() => {
  if (dimensionUnit.value === 'in') {
    return {
      width: Number((originalDimensions.value.width / 25.4).toFixed(3)),
      height: Number((originalDimensions.value.height / 25.4).toFixed(3))
    };
  }
  return {
    width: Number(originalDimensions.value.width.toFixed(2)),
    height: Number(originalDimensions.value.height.toFixed(2))
  };
});

// Watch for dimension unit changes
watch(dimensionUnit, (newUnit) => {
  if (newUnit === 'in') {
    pcbDimensions.value = {
      width: Number((originalDimensions.value.width / 25.4).toFixed(3)),
      height: Number((originalDimensions.value.height / 25.4).toFixed(3))
    };
  } else {
    pcbDimensions.value = {
      width: Number(originalDimensions.value.width.toFixed(2)),
      height: Number(originalDimensions.value.height.toFixed(2))
    };
  }
});

// Watch for pcbDimensions changes to update original values
watch(pcbDimensions, (newDimensions) => {
  if (dimensionUnit.value === 'in') {
    originalDimensions.value = {
      width: Number((newDimensions.width * 25.4).toFixed(2)),
      height: Number((newDimensions.height * 25.4).toFixed(2))
    };
  } else {
    originalDimensions.value = {
      width: newDimensions.width,
      height: newDimensions.height
    };
  }
}, { deep: true });

// Replace the static padCount computed property with:
const padCount = ref(0);
const totalLayers = ref(0);
const copperLayers = ref(0);
const maskLayers = ref(0);

// Watch for render option changes
watch(render, async (newValue) => {
  if (layers.value.length > 0) {
    try {
      isRendering.value = true;
      
      // Update the render options with current color settings
      const [sm, ss] = COLORS[newValue.sm as keyof typeof COLORS] || COLORS['green'];
      const cf = FINISHES[newValue.cf as keyof typeof FINISHES] || FINISHES['tin'];
      
      const updatedRender = {
        ...newValue,
        colors: {
          fr4: sm,
          cu: cf,
          cf: cf,
          sm: sm,
          ss: ss,
          sp: newValue.sp ? PASTE : 'transparent',
          out: sm
        }
      };

      // Force re-render of the PCB view
      const stack = await renderStack(layers.value, updatedRender);
      
      // Update layers with SVG content
      layers.value = layers.value.map(layer => {
        const side = layer.side === 'top' ? stack.top : stack.bottom;
        if (side && (layer.type === 'copper' || layer.type === 'soldermask')) {
          return {
            ...layer,
            svg: side.svg
          };
        }
        return layer;
      });

      // Update PCB dimensions from the stackup
      if (stack.top) {
        const width = stack.top.width ? parseFloat(stack.top.width.toString()) || 150 : 150;
        const height = stack.top.height ? parseFloat(stack.top.height.toString()) || 100 : 100;
        render.value.dimensions = { width, height };
      }
    } catch (error) {
      console.error('Error updating render:', error);
    } finally {
      isRendering.value = false;
    }
  }
}, { deep: true });

const showLayerSettings = ref(false);

// Add visible and opacity properties to layers when loading
function processLayer(layer: InputLayer): ExtendedLayer {
  const filename = layer.filename || 'unnamed';
  let defaultType: ExtendedLayer['type'] = 'ignore';
  let defaultSide: 'top' | 'bottom' | 'inner' = 'top';
  
  if (filename.includes('.DRL')) defaultType = 'drill';
  else if (filename.includes('.GTL') || filename.includes('.GBL')) defaultType = 'copper';
  else if (filename.includes('.GTO') || filename.includes('.GBO')) defaultType = 'silkscreen';
  else if (filename.includes('.GTS') || filename.includes('.GBS')) defaultType = 'soldermask';
  else if (filename.includes('.GTP') || filename.includes('.GBP')) defaultType = 'paste';
  else if (filename.includes('.GKO')) defaultType = 'outline';
  
  if (filename.includes('GBL') || filename.includes('GBS') || filename.includes('GBO')) {
    defaultSide = 'bottom';
  }
  
  return {
    ...layer,
    filename,
    visible: true,
    opacity: 100,
    color: defaultType === 'soldermask' ? 'green' : 'copper',
    side: defaultSide,
    type: defaultType
  };
}

async function loadGerber({ file }: { file: File }): Promise<void> {
  try {
    loading.value = true;
    gerber.value = file;
    
    // Process the file using our new processor
    const processed = await processFile(file);
    layers.value = processed.layers.map(processLayer);
    
    // Update layer counts
    totalLayers.value = processed.totalLayers;
    copperLayers.value = processed.copperLayers;
    maskLayers.value = processed.maskLayers;
    padCount.value = processed.padCount;
    
    // Initial render
    const stack = await renderStack(layers.value, render.value);
    
    // Update layers with SVG content
    layers.value = layers.value.map(layer => {
      const side = layer.side === 'top' ? stack.top : stack.bottom;
      if (side && (layer.type === 'copper' || layer.type === 'soldermask')) {
        return {
          ...layer,
          svg: side.svg
        };
      }
      return layer;
    });

    // Set PCB dimensions
    if (stack.top) {
      const width = stack.top.width ? parseFloat(stack.top.width.toString()) || 150 : 150;
      const height = stack.top.height ? parseFloat(stack.top.height.toString()) || 100 : 100;
      originalDimensions.value = { width, height };
      pcbDimensions.value = { 
        width: dimensionUnit.value === 'in' ? Number((width / 25.4).toFixed(3)) : width,
        height: dimensionUnit.value === 'in' ? Number((height / 25.4).toFixed(3)) : height
      };
    }
  } catch (error) {
    console.error('Error loading file:', error);
  } finally {
    loading.value = false;
  }
}

function calculatePCBDimensions(): void {
  const layerCount = layers.value.length;
  
  // Simple heuristic: more layers = larger board
  if (layerCount > 10) {
    pcbDimensions.value = { width: 150, height: 100 };
  } else if (layerCount > 5) {
    pcbDimensions.value = { width: 120, height: 80 };
  } else {
    pcbDimensions.value = { width: 100, height: 70 };
  }
}

function toggle3DView(): void {
  render.value.view3d = !render.value.view3d;
  // Force a redraw after mode switch
  nextTick(() => {
    handleCanvasResize();
  });
}

function toggleBothSides(): void {
  render.value.showBothSides = !render.value.showBothSides;
}

// Register components
const components = {
  'gerber-view': GerberView,
  'gerber-3d-view': Gerber3DView,
  'x-panel-container': XPanelContainer,
  'x-panel': XPanel,
  'layers-panel': LayersPanel,
  'render-panel': RenderPanel,
  'output-panel': OutputPanel
};

const outputFormat = ref<'svg' | 'png'>('svg');
const outputLayered = ref(false);
const exportRelief = ref(false);

// Add resize handling
const handleCanvasResize = () => {
  // Force canvas redraw when container size changes
  if (render.value) {
    const temp = { ...render.value };
    render.value = temp;
  }
};

// Setup resize observer
onMounted(() => {
  window.addEventListener('resize', handleCanvasResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleCanvasResize);
});

function updateLayerVisibility(layer: ExtendedLayer) {
  // Update the layer visibility
  const updatedLayers = layers.value.map(l => ({
    ...l,
    visible: l === layer ? layer.visible : l.visible
  }));
  
  // Update the render options
  render.value = {
    ...render.value,
    layers: updatedLayers.map(layer => ({
      filename: layer.filename || '',
      visible: layer.visible,
      opacity: layer.opacity / 100,
      color: layer.color
    }))
  };
  
  // Force a re-render
  nextTick(async () => {
    try {
      const stack = await renderStack(updatedLayers, render.value);
      layers.value = updatedLayers.map(layer => {
        const side = layer.side === 'top' ? stack.top : stack.bottom;
        if (side && (layer.type === 'copper' || layer.type === 'soldermask')) {
          return {
            ...layer,
            svg: side.svg
          };
        }
        return layer;
      });
    } catch (error) {
      console.error('Error updating layer visibility:', error);
    }
  });
}

function updateLayerSettings() {
  // Update the render options with current layer settings
  render.value = {
    ...render.value,
    layers: layers.value.map(layer => ({
      filename: layer.filename || '',
      visible: layer.visible,
      opacity: layer.opacity / 100,
      color: layer.color,
      type: layer.type,
      side: layer.side
    }))
  };
  
  // Force a re-render
  nextTick(async () => {
    try {
      const stack = await renderStack(layers.value, render.value);
      layers.value = layers.value.map(layer => {
        const side = layer.side === 'top' ? stack.top : stack.bottom;
        if (side && (layer.type === 'copper' || layer.type === 'soldermask')) {
          return {
            ...layer,
            svg: side.svg
          };
        }
        return layer;
      });
      
      // Force canvas update
      handleCanvasResize();
    } catch (error) {
      console.error('Error updating layer settings:', error);
    }
  });
}

async function applyLayerSettings() {
  try {
    // Update the render options with current layer settings
    render.value = {
      ...render.value,
      layers: layers.value.map(layer => ({
        filename: layer.filename || '',
        visible: layer.visible,
        opacity: layer.opacity / 100,
        color: layer.color,
        type: layer.type,
        side: layer.side
      }))
    };
    
    // Render the stack with updated settings
    const stack = await renderStack(layers.value, render.value);
    
    // Update layers with SVG content
    layers.value = layers.value.map(layer => {
      const side = layer.side === 'top' ? stack.top : stack.bottom;
      if (side && (layer.type === 'copper' || layer.type === 'soldermask')) {
        return {
          ...layer,
          svg: side.svg
        };
      }
      return layer;
    });

    // Force canvas update
    handleCanvasResize();

    // Close the modal after everything is updated
    showLayerSettings.value = false;
  } catch (error) {
    console.error('Error applying layer settings:', error);
  }
}

// Watch for layer setting changes
watch(() => layers.value, async (newLayers) => {
  if (newLayers.length > 0) {
    try {
      const stack = await renderStack(newLayers, render.value);
      layers.value = newLayers.map(layer => {
        const side = layer.side === 'top' ? stack.top : stack.bottom;
        if (side && (layer.type === 'copper' || layer.type === 'soldermask')) {
          return {
            ...layer,
            svg: side.svg
          };
        }
        return layer;
      });
    } catch (error) {
      console.error('Error updating layers:', error);
    }
  }
}, { deep: true });

type GerberLayerType = 'copper' | 'soldermask' | 'silkscreen' | 'drill' | string;

function getLayerTypeColor(type: GerberLayerType | null | undefined): string {
  if (!type) return 'default';
  
  switch (type) {
    case 'copper':
      return 'orange';
    case 'soldermask':
      return 'green';
    case 'silkscreen':
      return 'blue';
    case 'drill':
      return 'red';
    default:
      return 'default';
  }
}

function setLayerSide(layer: ExtendedLayer, side: 'top' | 'bottom' | 'inner') {
  layer.side = side;
  updateLayerSettings();
}

function restoreDefaults() {
  layers.value = layers.value.map(layer => {
    // Determine default type based on filename
    let defaultType = 'ignore';
    const filename = layer.filename || '';
    if (filename.includes('.DRL')) defaultType = 'drill';
    else if (filename.includes('.GTL') || filename.includes('.GBL')) defaultType = 'copper';
    else if (filename.includes('.GTO') || filename.includes('.GBO')) defaultType = 'silkscreen';
    else if (filename.includes('.GTS') || filename.includes('.GBS')) defaultType = 'soldermask';
    
    // Determine default side
    let defaultSide: 'top' | 'bottom' | 'inner' = 'top';
    if (filename.includes('GBL') || filename.includes('GBS') || filename.includes('GBO')) {
      defaultSide = 'bottom';
    }
    
    return {
      ...layer,
      type: defaultType,
      side: defaultSide,
      visible: true,
      opacity: 100,
      color: defaultType === 'soldermask' ? 'green' : 'copper'
    } as ExtendedLayer;
  });
  
  updateLayerSettings();
}

const rendering = ref(false);
const errorMessage = ref<string | null>(null);

async function outputFile() {
  rendering.value = true;
  errorMessage.value = null;

  try {
    const stack = await renderStack(layers.value, render.value);
    const files: Record<string, Uint8Array> = {};
    const ext = outputFormat.value;
    const write = ext === 'png' ? toPNG : toSVG;

    // Generate content for top and bottom layers
    if (stack.top?.svg) {
      files[`top_layer.${ext}`] = await write(stack.top.svg);
    }
    if (stack.bottom?.svg) {
      files[`bottom_layer.${ext}`] = await write(stack.bottom.svg);
    }

    // If layering is enabled, add additional layers
    if (outputLayered.value && stack.layers) {
      for (const layer of stack.layers) {
        if (layer.svg) {
          files[`${layer.filename}.${ext}`] = await write(layer.svg);
        }
      }
    }

    // If relief is enabled, generate relief textures
    if (exportRelief.value) {
      const reliefStack = await stackup(layers.value, {
        color: {
          fr4: 'transparent',
          cu: '#ffffff',
          cf: 'transparent',
          sm: 'transparent',
          ss: 'transparent',
          sp: 'transparent',
          out: 'transparent',
        },
      });

      if (reliefStack.top?.svg) {
        files[`top-relief.png`] = await toPNG(reliefStack.top.svg, '#000000');
      }
      if (reliefStack.bottom?.svg) {
        files[`bottom-relief.png`] = await toPNG(reliefStack.bottom.svg, '#000000');
      }
    }

    // Create ZIP file
    await outputZip(files, 'layers.zip');
  } catch (error: unknown) {
    errorMessage.value = (error as Error).message || 'An unknown error occurred.';
    console.error('Error during output generation:', error);
  } finally {
    rendering.value = false;
  }
}

// Add layer visibility functions
function showAllLayers() {
  layers.value.forEach(layer => {
    layer.visible = true;
  });
  updateLayerSettings();
}

function hideAllLayers() {
  layers.value.forEach(layer => {
    layer.visible = false;
  });
  updateLayerSettings();
}

</script>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f0f2f5;
  overflow: hidden;
}

.top-section {
  height: 300px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 20px;
  overflow: hidden;
}

.upload-area {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .upload-box {
    width: 100%;
    max-width: 600px;
    height: 100%;
    background: #fff;
    border: 2px dashed #d9d9d9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    h3 {
      font-size: 18px;
      color: #262626;
      margin-bottom: 8px;
    }
    
    p {
      margin: 4px 0;
      color: #8c8c8c;
      
      &.file-format {
        color: #bfbfbf;
      }
    }
  }
}

.preview-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.canvas-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gerber-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.preview-controls {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

.content-container {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  min-height: 0;
}

.pcb-details {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  .detail-section {
    margin-bottom: 32px;
  }

  .section-row {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    
    label {
      width: 140px;
      color: #262626;
      font-weight: 500;
    }

    .info-value {
      padding: 4px 12px;
      background: #f5f5f5;
      border-radius: 4px;
      color: #595959;
      min-width: 60px;
      text-align: center;
    }
  }

  .dimensions-input {
    display: flex;
    align-items: center;
    gap: 8px;
    
    .ant-input-number {
      width: 100px;
    }

    .ant-select {
      min-width: 70px;
    }
  }

  .output-section {
    border-top: 1px solid #f0f0f0;
    padding-top: 24px;

    h3 {
      margin-bottom: 16px;
      color: #262626;
    }
  }

  .output-button {
    margin-top: 24px;
    width: 100%;
    height: 40px;
  }
}

.view3d-button, .both-sides-button {
  &.active {
    background: #1890ff;
    border-color: #1890ff;
    color: white;
  }
}

.layer-settings {
  background: white;
  border: 1px solid #d9d9d9;
}

.layer-settings-modal {
  .ant-modal-content {
    background: white;
  }
  
  .ant-modal-body {
    padding: 20px;
  }
  
  .layers-list {
    max-height: 500px;
    overflow-y: auto;
    
    .layer-item {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #f0f0f0;
      
      &:last-child {
        border-bottom: none;
      }
      
      .layer-name {
        flex: 1;
        font-family: monospace;
        color: #333;
      }
      
      .layer-controls {
        display: flex;
        align-items: center;
        gap: 16px;
        
        .side-buttons {
          display: flex;
          gap: 8px;
        }
      }
    }
  }
  
  .modal-footer {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
}

.layer-controls-container {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 12px 20px;
}

.layer-controls-wrapper {
  display: flex;
  justify-content: center;
  gap: 12px;
  max-width: 800px;
  margin: 0 auto;
}

.loading-indicator {
  color: #1890ff;
  font-weight: bold;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.color-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  
  label {
    width: 80px;
    color: #262626;
    font-weight: 500;
  }
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>
