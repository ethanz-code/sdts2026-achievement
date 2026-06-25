<template>
  <div class="hero">
    <div class="hero-bg" :style="{ backgroundImage: `url(${image})` }">
      <div class="hero-mask" />
    </div>
    <button v-if="showArrows" class="hero-arr hero-prev" @click="$emit('prev')" aria-label="上一张">‹</button>
    <button v-if="showArrows" class="hero-arr hero-next" @click="$emit('next')" aria-label="下一张">›</button>
    <div class="hero-ct container">
      <div class="hero-cap">
        <h2 v-if="title">{{ title }}</h2>
        <p v-if="caption">{{ caption }}</p>
      </div>
      <div class="hero-dots" v-if="dots > 1">
        <span v-for="i in dots" :key="i" :class="{ on: active === i - 1 }" @click="$emit('dot', i - 1)" />
      </div>
      <div class="hero-actions" v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, default: '/images/campus-panorama.webp' },
  title: { type: String, default: '' },
  caption: { type: String, default: '' },
  showArrows: { type: Boolean, default: true },
  dots: { type: Number, default: 0 },
  active: { type: Number, default: 0 }
})
defineEmits(['prev', 'next', 'dot'])
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 460px;
  overflow: hidden;
  background: #1a0507;

  .hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.02);
    transition: transform 8s ease-out;
  }
  &:hover .hero-bg { transform: scale(1.06); }

  .hero-mask {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%),
      linear-gradient(90deg, rgba(139, 0, 0, 0.35) 0%, rgba(0,0,0,0) 60%);
  }

  .hero-arr {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 70px;
    background: rgba(0, 0, 0, 0.25);
    color: rgba(255, 255, 255, 0.85);
    border: 0;
    font-size: 38px;
    line-height: 70px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s;
    z-index: 2;
    font-family: var(--font-serif);
    &:hover { background: rgba(139, 0, 0, 0.6); color: #fff; }
  }
  .hero-prev { left: 16px; }
  .hero-next { right: 16px; }

  .hero-ct {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 36px;
  }
  .hero-cap {
    color: #fff;
    text-shadow: 0 2px 8px rgba(0,0,0,0.55);
    max-width: 680px;
    animation: fadeUp 0.7s 0.1s ease both;
    h2 { font-size: 30px; font-weight: 700; margin-bottom: 10px; letter-spacing: 2px; }
    p { font-size: 15px; line-height: 1.8; color: rgba(255, 255, 255, 0.92); }
  }
  .hero-dots {
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 2;
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: all 0.2s;
      &.on { background: #fff; transform: scale(1.2); }
    }
  }
  .hero-actions {
    position: absolute;
    bottom: 40px;
    right: 16px;
    display: flex;
    gap: 10px;
  }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .hero { height: 380px; }
  .hero-arr { width: 40px; height: 56px; line-height: 56px; font-size: 30px; }
}
@media (max-width: 767px) {
  .hero { height: 260px; }
  .hero-cap h2 { font-size: 18px; }
  .hero-cap p { font-size: 12px; }
  .hero-arr { width: 32px; height: 44px; line-height: 44px; font-size: 24px; }
  .hero-prev { left: 4px; }
  .hero-next { right: 4px; }
}
</style>
