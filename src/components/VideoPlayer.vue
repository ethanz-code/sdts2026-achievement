<template>
  <div class="vdo" :class="{ compact }">
    <video ref="videoEl" class="vdo-video" :class="{ hide: !src }" type="video/mp4" controls playsinline></video>
    <div class="vdo-fr" :class="{ hide: !!src }">
      <img :src="poster" alt="" />
      <div class="vdo-ol">
        <div class="play"><span class="tri"/></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
const props = defineProps({
  poster: { default: '/images/students-group.webp' },
  title: { default: '成果纪录片' },
  compact: { type: Boolean, default: false },
  src: { type: String, default: '' }
})
const videoEl = ref(null)

function setVideoSource(url) {
  if (!videoEl.value) return
  videoEl.value.src = url
  if (url) videoEl.value.load()
}

onMounted(() => {
  if (props.src) setVideoSource(props.src)
})

watch(() => props.src, (v) => {
  setVideoSource(v)
})
</script>

<style lang="scss" scoped>
.vdo{display:flex;flex-direction:column;flex:1}
.vdo-video{width:100%;display:block;background:#000;border-radius:4px;aspect-ratio:16/9;object-fit:contain}
.vdo-video.hide{display:none}
.vdo-fr{position:relative;background:#000;overflow:hidden;flex:1;display:flex;align-items:center;justify-content:center;img{max-width:100%;max-height:100%;object-fit:contain;transition:.4s}&:hover img{opacity:.7}}
.vdo-fr.hide{display:none}
.vdo-ol{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.play{width:64px;height:64px;border:2px solid #fff;background:rgba(0,0,0,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;transition:.2s;.tri{width:0;height:0;border-left:20px solid #fff;border-top:12px solid transparent;border-bottom:12px solid transparent;margin-left:4px}&:hover{background:var(--red);border-color:var(--red)}}

.compact{
  .vdo-video{flex:1;width:100%;object-fit:contain;background:#000;min-height:0;aspect-ratio:unset}
  .vdo-fr{height:auto;aspect-ratio:16/9;img{max-width:100%;max-height:100%;object-fit:cover}}
  .play{width:48px;height:48px;.tri{border-left-width:14px;border-top-width:8px;border-bottom-width:8px}}
}

@media(max-width:767px){.vdo-fr{height:360px}.play{width:48px;height:48px;.tri{border-left-width:14px;border-top-width:8px;border-bottom-width:8px}}}
@media(max-width:480px){.vdo-fr{height:240px}}
</style>
