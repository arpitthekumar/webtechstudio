<template>
  <div :ref="(ref) => containerRef = (ref as HTMLElement)" :class="$style.container">
    <canvas :ref="(ref) => canvasRef = (ref as HTMLCanvasElement)" :class="{ [$style.dragging]: dragging }" />
  </div>
</template>

<script lang="ts" setup>
import type { InputLayer } from 'pcb-stackup';
import type { IPosition, IScale } from '@/utils/graphic';

import { defineProps, reactive, ref, watch } from 'vue';

import { useWheelEvents } from '@/composables/useWheelEvents';
import { useMouseEvents } from '@/composables/useMouseEvents';
import { useClientSize } from '@/composables/useClientSize';

import { loadSvgImage } from '@/utils/svg';
import { centerOf, scaleInside, withIn } from '@/utils/graphic';
import { renderStack, type RenderOptions } from '@/utils/gerber';

const props = defineProps<{
  layers: InputLayer[];
  render: RenderOptions;
}>();

const image = ref<HTMLImageElement>();
const bottomImage = ref<HTMLImageElement>();

watch(props, async () => {
  const stack = await renderStack(props.layers, props.render);
  if (props.render.showBothSides) {
    image.value = await loadSvgImage(stack.top.svg);
    bottomImage.value = await loadSvgImage(stack.bottom.svg);
  } else {
    image.value = await loadSvgImage(stack[props.render.side].svg);
    bottomImage.value = null;
  }
});

const containerRef = ref<HTMLElement>();
const canvasRef = ref<HTMLCanvasElement>();

const container = useClientSize(containerRef);

const translate = reactive<IPosition & IScale>({
  x: 0, y: 0,
  scale: 0,
});

const dragging = ref(false);

watch([image, bottomImage, container, translate], () => {
  const canvas = canvasRef.value;
  if (!canvas || !container.value) return;

  // Set canvas dimensions
  canvas.width = container.value.width;
  canvas.height = container.value.height;

  // Clear canvas with white background
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!image.value) {
    console.log('No image to render');
    return;
  }

  if (!image.value.width || !image.value.height) {
    console.log('Image has no dimensions');
    return;
  }

  const rect = scaleInside(canvas, image.value);
  const canvasCenter = centerOf(canvas);
  const imageCenter = centerOf(rect);

  translate.scale = Math.min(5, Math.max(-2, translate.scale));
  const scale = Math.pow(2, translate.scale);

  translate.x = withIn(translate.x, canvasCenter.x + imageCenter.x * scale - 50);
  translate.y = withIn(translate.y, canvasCenter.y + imageCenter.y * scale - 50);

  try {
    ctx.save();
    ctx.translate(canvasCenter.x, canvasCenter.y);
    ctx.translate(translate.x, translate.y);
    ctx.scale(scale, scale);
    ctx.translate(-imageCenter.x, -imageCenter.y);

    if (props.render.showBothSides && bottomImage.value) {
      // Draw top layer on the left
      ctx.save();
      ctx.translate(-rect.width/2 - 10, 0);
      ctx.drawImage(image.value, 0, 0, rect.width, rect.height);
      ctx.restore();

      // Draw bottom layer on the right
      ctx.save();
      ctx.translate(rect.width/2 + 10, 0);
      ctx.drawImage(bottomImage.value, 0, 0, rect.width, rect.height);
      ctx.restore();

      // Add labels
      ctx.save();
      ctx.scale(1/scale, 1/scale);
      ctx.font = '16px Arial';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.fillText('Top Layer', -rect.width/2 - 10, -rect.height/2 - 20);
      ctx.fillText('Bottom Layer', rect.width/2 + 10, -rect.height/2 - 20);
      ctx.restore();
    } else {
      // Draw single layer
      ctx.drawImage(image.value, 0, 0, rect.width, rect.height);
    }

    ctx.restore();
    console.log('Images rendered successfully');
  } catch (error) {
    console.error('Error rendering images:', error);
  }
});

watch(image, () => {
  translate.scale = 0;
  translate.x = 0;
  translate.y = 0;
});

useWheelEvents(canvasRef, translate);
useMouseEvents(canvasRef, translate, dragging);
</script>

<style lang="scss" module>
.container {
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
  overflow: hidden;
}

.dragging {
  cursor: move;
}
</style>
