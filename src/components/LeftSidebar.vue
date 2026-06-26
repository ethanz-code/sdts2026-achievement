<template>
  <aside class="sb">
    <h3 class="sb-tit">{{ title }}</h3>
    <ul v-if="items.length" class="sb-ls">
      <li
        v-for="(item, i) in items"
        :key="item.key"
        :class="{ on: isActive(item) }"
        @click="onClick(item)"
        @mouseenter="emit('hover-item', item)"
        @mouseleave="emit('leave-item')"
      >
        <img
          v-if="item.icon"
          class="i"
          :src="item.icon"
          :alt="item.label"
        />
        <span v-else class="dot"></span>
        <span class="n" v-if="showNum">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="l">{{ item.label }}</span>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  title:     { default: '' },
  items:     { type: Array, required: true },
  modelValue:{ type: String, default: '' },
  showNum:   { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue', 'hover-item', 'leave-item'])

const route = useRoute()
const router = useRouter()

const isActive = (item) => {
  if (item.path) {
    const [itemBase, itemQS] = item.path.split('?')
    if (route.path !== itemBase) return false
    if (!itemQS) return true
    const currentQS = route.fullPath.includes('?') ? route.fullPath.slice(route.fullPath.indexOf('?') + 1) : ''
    return currentQS === itemQS || currentQS.startsWith(itemQS + '&')
  }
  return props.modelValue === item.key
}

const onClick = (item) => {
  if (item.path) {
    router.push(item.path)
  }
  emit('update:modelValue', item.key)
}
</script>

<style lang="scss" scoped>
.sb{background:#fff;border-radius:6px;box-shadow:var(--shadow-sm);overflow:hidden;border:1px solid #ede5dd}

.sb-tit{
  font-size:18px;font-weight:700;color:#fff;padding:16px 20px;
  background:linear-gradient(135deg,var(--red) 0%,#9b1a1a 100%);
  letter-spacing:4px;
  font-family:var(--font-serif);position:relative;
}
.sb-tit::after{content:'';position:absolute;bottom:0;left:10%;right:10%;height:2px;background:var(--gold);border-radius:2px}

.sb-ls{padding:6px 0;background:#fff}
.sb-ls li{
  display:flex;align-items:center;gap:10px;
  padding:13px 20px 13px 18px;
  font-size:14px;cursor:pointer;color:var(--txt2);
  font-family:var(--font-sans);font-weight:500;
  transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;
}
.sb-ls li::after{
  content:'';position:absolute;bottom:0;left:18px;right:18px;
  height:1px;background:linear-gradient(90deg,#f0e8e0 0%,transparent 100%)
}
.sb-ls li:last-child::after{display:none}
.sb-ls li .dot{
  width:5px;height:5px;border-radius:50%;
  background:#d5c5b8;flex-shrink:0;
  transition:all .35s cubic-bezier(.4,0,.2,1)
}
.sb-ls li .i{
  width:22px;height:22px;flex-shrink:0;object-fit:contain;
  transition:all .35s cubic-bezier(.4,0,.2,1)
}

.sb-ls li:hover{
  color:var(--red);
  background:linear-gradient(90deg,#fdf8f0 0%,transparent 60%);
  padding-left:24px
}
.sb-ls li:hover .dot{
  background:var(--gold);
  transform:scale(1.4);
  box-shadow:0 0 0 3px rgba(200,164,90,.15)
}
.sb-ls li:hover .i{
  transform:scale(1.15)
}
.sb-ls li.on{
  color:var(--red-d);font-weight:700;
  background:linear-gradient(90deg,#fcf5e0 0%,transparent 70%);
}
.sb-ls li.on .dot{
  background:var(--red);
  transform:scale(1.2);
  box-shadow:none
}
.sb-ls li.on .i{
  transform:scale(1.1)
}
.sb-ls .n{font-family:var(--font-serif);font-size:11px;color:var(--txt3);min-width:20px;flex-shrink:0}
.sb-ls li.on .n{color:var(--red)}
.sb-ls .l{line-height:1.5;flex:1;white-space:nowrap}

@media(max-width:1024px){.sb{width:240px}}
@media(max-width:767px){
  .sb{width:100%}
  .sb-ls{
    display:grid;grid-template-columns:1fr;gap:3px;padding:6px;
  }
  .sb-ls li{padding:10px 12px;font-size:13px;border-radius:4px;gap:6px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
  .sb-ls li::after{display:none}
  .sb-ls li .dot{width:4px;height:4px}
  .sb-ls li .i{width:18px;height:18px}
  .sb-ls li.on{background:var(--gold-ll)}
  @for $i from 1 through 7{.sb-ls li:nth-child(#{$i}){animation-delay:0s}}
}
@media(max-width:480px){
  .sb-ls{grid-template-columns:1fr;gap:3px}
  .sb-ls li{padding:9px 12px;font-size:12px}
}
</style>
