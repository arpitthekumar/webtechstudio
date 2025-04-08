<template>
  <panel-unit title="Layers">
    <a-button :disabled="props.layers.length == 0" @click="showLayers">Open Layer Settings</a-button>
  </panel-unit>
  <a-modal
    v-model:visible="layersShown"
    title="Layer Settings"
    centered
    width="1000px">
    <a-row type="flex" :gutter="[8, 8]">
      <template v-for="layer in layers" :key="layer.filename!">
        <a-col :xs="24" :md="14" :lg="16">
          <span :class="$style.layerName">{{ layer.filename }}</span>
        </a-col>
        <a-col :xs="24" :md="10" :lg="8">
          <a-space>
            <a-select
              v-model:value="layer.type"
              :options="gerberTypes"
              :style="{ width: '6em' }"
              @change="guessLayerSide(layer)" />
            <a-radio-group v-if="hasSide(layer.type)" v-model:value="layer.side">
              <a-radio-button value="top">Top</a-radio-button>
              <a-radio-button value="bottom">Bottom</a-radio-button>
              <a-radio-button v-if="layer.type == 'copper'" value="inner">Inner</a-radio-button>
            </a-radio-group>
          </a-space>
        </a-col>
      </template>
    </a-row>
    <template #footer>
      <a-button type="default" @click="restoreLayers">Restore Default</a-button>
      <a-button type="default" @click="closeLayers">Close</a-button>
      <a-button type="primary" @click="saveLayers">OK</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts" setup>
import type { InputLayer } from 'pcb-stackup';
import type { SelectProps } from 'ant-design-vue';
import type { GerberType } from 'whats-that-gerber';

import { defineEmits, defineProps, ref } from 'vue';
import { cloneDeep } from 'lodash';

import PanelUnit from '@/components/XPanelUnit.vue';

import { mapLayerType } from '@/utils/gerber';

const props = defineProps<{
  layers: InputLayer[];
}>();

const emit = defineEmits<{
  (e: 'update:layers', layers: InputLayer[]): void;
}>();

const layers = ref<InputLayer[]>([]);
const layersShown = ref(false);

function showLayers(): void {
  layers.value = cloneDeep(props.layers);
  layersShown.value = true;
}

function saveLayers(): void {
  emit('update:layers', layers.value);
  layersShown.value = false;
}

function closeLayers(): void {
  layersShown.value = false;
}

function restoreLayers(): void {
  layers.value = layers.value.map((layer) => ({ ...layer, ...mapLayerType(layer.filename!) }));
}

const gerberTypes: SelectProps['options'] = [
  { value: 'copper', label: 'Copper' },
  { value: 'soldermask', label: 'Solder Mask' },
  { value: 'silkscreen', label: 'Silkscreen' },
  { value: 'solderpaste', label: 'Solder Paste' },
  { value: 'drill', label: 'Drill' },
  { value: 'outline', label: 'Outline' },
  { value: null, label: 'Ignore' },
];

function hasSide(type: GerberType | undefined): boolean {
  return !!type && ['copper', 'soldermask', 'silkscreen', 'solderpaste'].includes(type);
}

function guessLayerSide(layer: InputLayer): void {
  if (layer.type == 'outline') {
    layer.side = 'all';
  } else if (!layer.side) {
    const { side } = mapLayerType(layer.filename!);
    layer.side = side || 'top';
  }
}
</script>

<style lang="scss" module>
.layerName {
  font-family: monospace;
}
</style>
