<template>
  <div class="pv">
    <iframe class="pv-frame" :src="src" :title="title" />
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  title: { type: String, default: 'PDF 预览' }
})
</script>

<style lang="scss" scoped>
.pv { width: 100%; min-height: 600px; }
.pv-frame { width: 100%; height: calc(100vh - 220px); min-height: 800px; border: 0; border-radius: 2px; }
@media(max-width:767px){
  .pv-frame { height: calc(100vh - 160px); min-height: 520px; }
}
@media(max-width:480px){
  .pv-frame { height: calc(100vh - 140px); min-height: 480px; }
}
</style>
