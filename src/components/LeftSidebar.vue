<template>
  <aside class="sb">
    <h3 class="sb-tit">{{ title }}</h3>
    <ul v-if="items.length" class="sb-ls">
      <li
        v-for="(item, i) in items"
        :key="item.key"
        :class="{ on: isActive(item) }"
        @click="onClick(item)"
      >
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
const emit = defineEmits(['update:modelValue'])

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
.sb{padding:0;background:var(--red-ll);border-radius:2px}
.sb-tit{
  font-size:16px;font-weight:700;color:#fff;padding:12px 20px;
  background:linear-gradient(180deg,var(--red) 0%,var(--red-d) 100%);
  letter-spacing:2px;box-shadow:0 2px 6px rgba(183,28,28,.25);
  font-family:var(--font-serif);position:relative;border-radius:2px;
}
.sb-tit::after{
  content:'';position:absolute;right:-14px;top:0;bottom:0;width:14px;
  background:linear-gradient(180deg,var(--red-d) 0%,var(--red) 100%);
  clip-path:polygon(0 0,100% 50%,0 100%);
}
.sb-ls{
  padding:8px 0;
  background:var(--red-ll);
  border-radius:0 0 2px 2px;
}
.sb-ls li{
  display:flex;align-items:center;gap:8px;
  padding:11px 18px 11px 14px;
  font-size:14px;cursor:pointer;color:var(--txt2);
  font-family:"PingFang SC","Microsoft YaHei",sans-serif;
  transition:all .2s;position:relative;
  border-left:3px solid #e8d8d8;
}
.sb-ls li:hover{
  color:var(--red);
  background:rgba(255,255,255,.6);
  border-left-color:#c9a0a0;
}
.sb-ls li.on{
  color:var(--red-d);font-weight:700;
  background:#fff;
  border-left:4px solid var(--red);
}
.sb-ls .n{font-family:Georgia,serif;font-size:11px;color:var(--txt3);min-width:20px;flex-shrink:0}
.sb-ls .l{line-height:1.5;flex:1}

@media(max-width:1024px){.sb{width:240px}}
@media(max-width:767px){
  .sb{width:100%}
  .sb-tit::after{width:10px;right:-10px}
  .sb-tit{padding-right:22px;border-radius:2px}
  .sb-ls{
    display:grid;grid-template-columns:1fr 1fr;gap:4px 8px;padding:6px;
    border-radius:2px;
  }
  .sb-ls li{padding:9px 10px 9px 8px;font-size:13px;border-radius:3px;gap:4px;border-left-width:2px}
  .sb-ls li.on{border-left-width:3px}
}
@media(max-width:480px){
  .sb-ls{grid-template-columns:1fr;gap:2px}
  .sb-ls li{padding:8px 12px 8px 8px;font-size:12px}
}
</style>
