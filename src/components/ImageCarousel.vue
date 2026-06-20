<template>
  <div class="ic-outer" :class="direction" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <div class="ic-track" :class="{ paused: hovered || forcePaused }" :style="trackStyle">
      <div
        v-for="(img, i) in doubled"
        :key="i"
        class="ic-slide"
        @click="open(img)"
      >
        <img v-if="img.src" :src="img.src" class="ic-img" :alt="img.label" />
        <div v-else class="ic-placeholder">
          <span class="ic-label">{{ img.label || `[Image ${img.id}]` }}</span>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="active !== null" class="lightbox" @click.self="close">
        <button class="lightbox-close" @click="close" aria-label="关闭">&times;</button>
        <div class="lightbox-inner">
          <img v-if="active.src" :src="active.src" class="lightbox-img" :alt="active.label" />
          <div v-else class="lightbox-placeholder">
            <span class="lightbox-label">{{ active.label || `[Image ${active.id}]` }}</span>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  direction: { type: String, default: 'horizontal' },
  speed: { type: Number, default: 0.5 },
  forcePaused: { type: Boolean, default: false }
})

const emit = defineEmits(['lightbox-open', 'lightbox-close'])

const doubled = computed(() => [...props.images, ...props.images])
const hovered = ref(false)
const active = ref(null)

const count = computed(() => props.images.length)
const isH = computed(() => props.direction === 'horizontal')

const trackStyle = computed(() => {
  const total = count.value
  const dur = Math.max(8, total * 2) / props.speed
  return {
    animationDuration: `${dur}s`,
    flexDirection: isH.value ? 'row' : 'column'
  }
})

function open(img) {
  active.value = img
  document.body.style.overflow = 'hidden'
  emit('lightbox-open')
}
function close() {
  active.value = null
  document.body.style.overflow = ''
  emit('lightbox-close')
}
</script>

<style lang="scss" scoped>
.ic-outer {
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &.horizontal {
    min-height: 240px;
    .ic-slide { width: 320px; height: 220px; }
    @keyframes scrollLoopH { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    .ic-track { animation-name: scrollLoopH; }
  }
  &.vertical {
    .ic-slide { width: 100%; height: 200px; }
    @keyframes scrollLoopV { 0%{transform:translateY(0)} 100%{transform:translateY(-50%)} }
    .ic-track { animation-name: scrollLoopV; }
    height: 500px;
  }
}

.ic-track {
  display: flex;
  gap: 12px;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  width: max-content;

  &.paused { animation-play-state: paused; }
}

.ic-slide {
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
}

.ic-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ic-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 6px;
}

.ic-label {
  font-size: 16px;
  color: #aaa;
  font-family: var(--font-sans);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.25s ease;
}
.lightbox-close {
  position: absolute;
  top: 20px;
  right: 28px;
  background: none;
  border: none;
  color: #fff;
  font-size: 42px;
  cursor: pointer;
  line-height: 1;
  z-index: 1;
  &:hover { opacity: 0.7; }
}
.lightbox-inner {
  max-width: 90vw;
  max-height: 90vh;
}
.lightbox-img {
  max-width: 88vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 4px;
}
.lightbox-placeholder {
  width: 80vw;
  max-width: 1000px;
  height: 60vh;
  max-height: 700px;
  background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #666;
  border-radius: 4px;
}
.lightbox-label {
  font-size: 32px;
  color: #888;
  font-family: var(--font-sans);
}

@keyframes fadeIn { from{opacity:0} to{opacity:1} }

@media(max-width:767px){
  .ic-outer.horizontal { min-height: 190px; .ic-slide { width: 240px; height: 170px; } }
  .ic-outer.vertical .ic-slide { height: 160px; }
  .ic-outer.vertical { height: 420px; }
  .lightbox-placeholder { width: 95vw; height: 50vh; }
}
@media(max-width:480px){
  .ic-outer.horizontal { min-height: 150px; .ic-slide { width: 180px; height: 130px; } }
  .ic-outer.vertical .ic-slide { height: 130px; }
  .ic-outer.vertical { height: 360px; }
}
</style>
