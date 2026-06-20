<template>
  <div class="ribbon-hd" :class="{ small }">
    <div class="rb-main">
      <span class="rb-icon" v-if="icon || $slots.icon">
        <slot name="icon">{{ icon }}</slot>
      </span>
      <span class="rb-title">{{ title }}</span>
      <slot name="extra" />
    </div>
    <span class="rb-tail" />
    <a v-if="more" class="rb-more" @click.prevent="$emit('more')" href="#">{{ more }}<i>+</i></a>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' },
  more: { type: String, default: '' },
  small: { type: Boolean, default: false }
})
defineEmits(['more'])
</script>

<style lang="scss" scoped>
.ribbon-hd {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  position: relative;

  .rb-main {
    background: linear-gradient(180deg, var(--red) 0%, var(--red-d) 100%);
    color: #fff;
    padding: 9px 18px 9px 16px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    box-shadow: 0 2px 6px rgba(183, 28, 28, 0.25);
  }
  .rb-main::after {
    content: ''; position: absolute; right: -14px; top: 0; bottom: 0; width: 14px;
    background: linear-gradient(180deg, var(--red-d) 0%, var(--red) 100%);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
  }
  .rb-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    color: #fff;
    :deep(svg) { width: 16px; height: 16px; fill: #fff; }
  }
  .rb-title {
    line-height: 1.2;
    text-shadow: 0 1px 1px rgba(0,0,0,0.15);
  }
  .rb-more {
    margin-left: auto;
    color: var(--gold);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    i { margin-left: 2px; font-style: normal; }
    &:hover { color: var(--red); }
  }

  &.small {
    .rb-main {
      font-size: 14px;
      padding: 6px 14px 6px 12px;
    }
  }
}

@media (max-width: 767px) {
  .ribbon-hd {
    .rb-main { font-size: 14px; padding: 7px 14px 7px 12px; }
  }
}
</style>
