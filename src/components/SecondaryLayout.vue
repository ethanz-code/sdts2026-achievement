<template>
  <div class="pg">
    <LeftSidebar :title="st" :items="si || []" :model-value="mv" :show-num="sn" @update:model-value="$emit('update:modelValue',$event)"/>
    <div class="pg-mn">
      <nav class="crumb"><el-icon class="crumb-icon"><Location/></el-icon><router-link to="/">首页</router-link><span class="sep">›</span><router-link v-if="pt" :to="route.path">{{ pt }}</router-link><template v-if="pt && cr"><span class="sep">›</span><span class="cur">{{ cr }}</span></template></nav>
      <article class="pg-ct"><slot/></article>
    </div>
  </div>
</template>

<script setup>
import LeftSidebar from '@/components/LeftSidebar.vue'
import { Location } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
const route = useRoute()
defineProps({st:String,si:Array,mv:String,sn:{type:Boolean,default:false},pt:{default:''},cr:String})
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.pg{display:grid;grid-template-columns:200px 1fr;gap:48px;padding:32px 0 48px}
.pg-mn{min-width:0}
.crumb{font-size:13px;color:var(--txt3);margin-bottom:16px;font-family:"Noto Sans SC",sans-serif;display:flex;align-items:center;gap:6px;background:var(--red-ll);padding:10px 16px;border-radius:4px}
.crumb-icon{color:var(--red);font-size:16px;flex-shrink:0}
.crumb a{color:var(--txt3);&:hover{color:var(--red)}}
.crumb .sep{margin:0 4px;color:#ccc}
.crumb .cur{color:var(--red-d);font-weight:600}
.pg-ct{padding:0}
@media(max-width:1024px){.pg{gap:32px}}
@media(max-width:767px){
  .pg{grid-template-columns:1fr;gap:24px;padding:20px 0 32px}
}
</style>
