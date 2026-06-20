<template>
  <aside class="sb">
    <h3 class="sb-tit">{{ title }}</h3>
    <ul class="sb-ls">
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
  modelValue:{ type: String, required: true },
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
.sb{padding:0;background:#fff;border-radius:2px}
.sb-tit{
  font-size:16px;font-weight:700;color:#fff;padding:12px 20px;
  background:linear-gradient(180deg,var(--red) 0%,var(--red-d) 100%);
  letter-spacing:2px;box-shadow:0 2px 6px rgba(183,28,28,.25);
  font-family:var(--font-serif);position:relative;border-radius:2px 2px 0 0;
}
.sb-tit::after{
  content:'';position:absolute;right:-14px;top:0;bottom:0;width:14px;
  background:linear-gradient(180deg,var(--red-d) 0%,var(--red) 100%);
  clip-path:polygon(0 0,100% 50%,0 100%);
}
.sb-ls{padding:6px 0;overflow:hidden;border-radius:0 0 2px 2px}
.sb-ls li{
  display:flex;align-items:baseline;gap:10px;padding:10px 18px;
  font-size:14px;cursor:pointer;color:var(--txt2);
  font-family:"PingFang SC","Microsoft YaHei",sans-serif;
  transition:background-color .15s, color .15s;position:relative;
}
.sb-ls li:hover{color:var(--red);background:var(--red-ll)}
.sb-ls li.on{color:var(--red-d);font-weight:600;background:var(--red-ll)}
.sb-ls .n{font-family:Georgia,serif;font-size:12px;color:var(--txt3);min-width:22px}
.sb-ls .l{line-height:1.6}

@media(max-width:1024px){.sb{width:200px}}
@media(max-width:767px){
  .sb{width:100%}
  .sb-tit::after{width:10px;right:-10px}
  .sb-tit{padding-right:22px;border-radius:2px}
  .sb-ls{display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;border-radius:2px}
  .sb-ls li{padding:8px 14px}
}
@media(max-width:480px){
  .sb-ls{grid-template-columns:1fr;gap:2px}
  .sb-ls li{padding:7px 12px;font-size:13px}
}
</style>
