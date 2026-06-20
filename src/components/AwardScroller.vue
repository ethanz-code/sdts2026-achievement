<template>
  <div class="scr">
    <div class="scr-hd"><h3>{{ title }}</h3><router-link v-if="link" :to="link" class="cnt">{{ images.length }} 张 &gt;&gt;</router-link><span v-else class="cnt">{{ images.length }} 张</span></div>
    <div class="scr-tr" ref="track" @mouseenter="pause" @mouseleave="resume">
      <div v-if="images.length===0" class="scr-empty">图片待补充</div>
      <div v-else class="scr-in" ref="inner">
        <img v-for="(img,i) in dup" :key="i" :src="img" class="scr-img" @click="open(i%images.length)" />
      </div>
    </div>

    <Teleport to="body">
      <div v-if="show" class="lb" @click.self="show=false">
        <button class="lb-c" @click="show=false">✕</button>
        <button class="lb-p" @click="prev">&lsaquo;</button>
        <img :src="images[cur]" class="lb-img" />
        <button class="lb-n" @click="next">&rsaquo;</button>
        <div class="lb-idx">{{ cur+1 }} / {{ images.length }}</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({title:String,images:{type:Array,default:()=>[]},link:{default:''}})
const dup = computed(() => props.images.length>1?[...props.images,...props.images]:props.images)
const inner = ref(null)
let id = null, p = false

function step() {
  if (p||!inner.value||props.images.length<2){id=requestAnimationFrame(step);return}
  const w = inner.value.scrollWidth/2
  let ox = parseFloat(inner.value.style.transform?.match(/-?\d+\.?\d*/)?.[0]||0)
  ox -= 0.6; if(ox<=-w) ox=0
  inner.value.style.transform=`translateX(${ox}px)`
  id=requestAnimationFrame(step)
}
onMounted(()=>{if(props.images.length>1) id=requestAnimationFrame(step)})
onBeforeUnmount(()=>cancelAnimationFrame(id))
function pause(){p=true} function resume(){p=false}

const show=ref(false), cur=ref(0)
function open(i){cur.value=i;show.value=true}
function prev(){cur.value=(cur.value-1+props.images.length)%props.images.length}
function next(){cur.value=(cur.value+1)%props.images.length}
if(typeof window!=='undefined'){window.addEventListener('keydown',e=>{if(!show.value)return;if(e.key==='Escape')show.value=false;if(e.key==='ArrowLeft')prev();if(e.key==='ArrowRight')next()})}
</script>

<style lang="scss" scoped>
.scr{background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden}
.scr-hd{height:38px;line-height:38px;padding:0 16px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;h3{font-size:14px;font-weight:700;color:var(--red)}.cnt{font-size:12px;color:var(--txt3);text-decoration:none;&:hover{color:var(--red)}}}
.scr-tr{height:200px;overflow:hidden}
.scr-empty{display:flex;align-items:center;justify-content:center;height:100%;color:var(--txt3);font-size:13px}
.scr-in{display:flex;gap:8px;padding:6px 10px;will-change:transform}
.scr-img{height:188px;width:auto;border-radius:2px;border:1px solid var(--bd);cursor:pointer;flex-shrink:0;transition:.15s;&:hover{border-color:var(--red);box-shadow:0 2px 6px rgba(183,28,28,.15);transform:translateY(-1px)}}

.lb{position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:9999;display:flex;align-items:center;justify-content:center}
.lb-c{position:absolute;top:20px;right:30px;background:none;border:0;color:#fff;font-size:32px;cursor:pointer;opacity:.7;&:hover{opacity:1}}
.lb-p,.lb-n{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.12);border:0;color:#fff;font-size:36px;width:52px;height:88px;cursor:pointer;transition:.15s}
.lb-p:hover,.lb-n:hover{background:rgba(255,255,255,.25)}
.lb-p{left:10px;border-radius:0 var(--radius) var(--radius) 0}
.lb-n{right:10px;border-radius:var(--radius) 0 0 var(--radius)}
.lb-img{max-width:88vw;max-height:82vh;object-fit:contain}
.lb-idx{position:absolute;bottom:24px;color:#fff;font-size:14px;opacity:.8}

@media(max-width:767px){.scr-tr{height:150px}.scr-img{height:138px}.scr-empty{font-size:12px}}
</style>
