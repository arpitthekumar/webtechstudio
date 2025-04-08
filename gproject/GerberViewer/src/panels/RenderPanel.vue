<template>
  <panel-unit title="Rendering">
    <a-form-item label="Display">
      <a-row type="flex" :gutter="[8]">
        <a-col>
          <a-radio-group v-model:value="localRender.side">
            <a-radio-button value="top">Top</a-radio-button>
            <a-radio-button value="bottom">Bottom</a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item label="Solder Mask">
      <a-row type="flex" :gutter="[8, 8]">
        <a-col>
          <a-select v-model:value="localRender.sm" :style="{ width: '10em' }" @change="handleColorChange">
            <a-select-option v-for="(color, name) in COLORS" :key="name" :value="name">
              {{ name.charAt(0).toUpperCase() + name.slice(1) }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col>
          <div class="color-preview" :style="{ backgroundColor: COLORS[localRender.sm][0] }"></div>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item label="Copper Finish">
      <a-row type="flex" :gutter="[8]">
        <a-col>
          <a-radio-group v-model:value="localRender.cf" @change="handleColorChange">
            <a-radio-button value="tin">Tin</a-radio-button>
            <a-radio-button value="gold">Gold</a-radio-button>
          </a-radio-group>
        </a-col>
        <a-col>
          <div class="color-preview" :style="{ backgroundColor: FINISHES[localRender.cf] }"></div>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item label="Pads">
      <a-row type="flex" :gutter="[8]">
        <a-col>
          <a-checkbox v-model:checked="localRender.sp" @change="handleColorChange">
            Draw Solder Paste
          </a-checkbox>
        </a-col>
      </a-row>
    </a-form-item>
  </panel-unit>
</template>

<script lang="ts" setup>
import type { RenderOptions } from '@/utils/gerber';
import { defineProps, reactive, watch, defineEmits } from 'vue';
import { COLORS, FINISHES } from '@/utils/gerber';

import PanelUnit from '@/components/XPanelUnit.vue';

const props = defineProps<{
  render: RenderOptions;
}>();

const emit = defineEmits(['update:render']);

// Create a local reactive copy of render options
const localRender = reactive({ ...props.render });

// Handle color changes
function handleColorChange() {
  emit('update:render', { ...localRender });
}

// Watch for changes in local render options
watch(localRender, (newValue) => {
  emit('update:render', { ...newValue });
}, { deep: true });

// Update local render when props change
watch(() => props.render, (newValue) => {
  Object.assign(localRender, newValue);
}, { deep: true });
</script>

<style lang="scss" scoped>
.color-preview {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
}
</style>
