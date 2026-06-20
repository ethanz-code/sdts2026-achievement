<template>
  <div class="vdo" :class="{ compact }">
    <div class="vdo-fr" @click="handlePlay">
      <img :src="poster" alt="" />
      <div class="vdo-ol">
        <div class="play"><span class="tri"/></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
defineProps({
  poster: { default: '/images/students-group.webp' },
  title: { default: '成果纪录片' },
  compact: { type: Boolean, default: false }
})
const handlePlay = () => ElMessage.info('视频待上传')
</script>

<style lang="scss" scoped>
.vdo{display:flex;flex-direction:column}
.vdo-fr{position:relative;background:#000;overflow:hidden;cursor:pointer;height:480px;display:flex;align-items:center;justify-content:center;img{max-width:100%;max-height:100%;object-fit:contain;transition:.4s}&:hover img{opacity:.7}}
.vdo-ol{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.play{width:64px;height:64px;border:2px solid #fff;background:rgba(0,0,0,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;transition:.2s;.tri{width:0;height:0;border-left:20px solid #fff;border-top:12px solid transparent;border-bottom:12px solid transparent;margin-left:4px}&:hover{background:var(--red);border-color:var(--red)}}

.compact{
  .vdo-fr{height:auto;aspect-ratio:16/9;img{max-width:100%;max-height:100%;object-fit:cover}}
  .play{width:48px;height:48px;.tri{border-left-width:14px;border-top-width:8px;border-bottom-width:8px}}
}

@media(max-width:767px){.vdo-fr{height:360px}.play{width:48px;height:48px;.tri{border-left-width:14px;border-top-width:8px;border-bottom-width:8px}}}
@media(max-width:480px){.vdo-fr{height:240px}}
</style>
