<template>
   <SecondaryLayout st="推广应用" :si="si" v-model="key" pt="推广应用" :cr="curLabel">
    <ContentLoader base="promotion">
      <template #fallback>
        <h2 class="sec-h">成果推广应用单位</h2>
        <div class="list">
          <div v-for="(p,i) in list" :key="i" class="item">
            <h3>{{ i + 1 }}. {{ p.name }}（{{ p.type }}）</h3>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </template>
    </ContentLoader>
  </SecondaryLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'
import { promotions as list } from '@/data/content.js'

const route = useRoute()
const si = [
  {key:'all',label:'全部单位',path:'/promotion?tab=all'}
]
const key = ref(route.query.tab || '')
const curLabel = computed(() => si.find(s => s.key === key.value)?.label || '')
watch(() => route.query.tab, (v) => { key.value = v || '' })
</script>

<style lang="scss" scoped>
.sec-h { font-size: 20px; font-weight: 600; color: var(--red-d); margin: 0 0 16px; font-family: "Noto Serif SC", serif; }
.list { font-family: "Noto Serif SC", serif; }
.item { padding: 16px 0; border-bottom: 1px solid #eee; }
.item h3 { font-size: 16px; color: var(--red-d); margin: 0 0 8px; font-weight: 600; }
.item p { font-size: 15px; line-height: 2; color: var(--txt); margin: 0; text-indent: 2em; }
</style>
