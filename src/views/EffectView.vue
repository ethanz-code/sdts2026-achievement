<template>
   <SecondaryLayout st="培养成效" :si="si" v-model="key" pt="培养成效" :cr="curLabel">
    <ContentLoader base="effect">
      <template #fallback>
        <h2 class="sec-h">学生竞赛获奖</h2>
        <div class="list">
          <p v-for="(a,i) in list" :key="i">{{ i + 1 }}. {{ a.title }}</p>
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
import { studentAwards as list } from '@/data/content.js'

const route = useRoute()
const si = [
  {key:'overview',label:'总体情况',path:'/effect?tab=overview'},
  {key:'awards',label:'学生竞赛获奖',path:'/effect?tab=awards'},
  {key:'employment',label:'就业与反馈',path:'/effect?tab=employment'}
]
const key = ref(route.query.tab || '')
const curLabel = computed(() => si.find(s => s.key === key.value)?.label || '')
watch(() => route.query.tab, (v) => { key.value = v || '' })
</script>

<style lang="scss" scoped>
.sec-h { font-size: 20px; font-weight: 600; color: var(--red-d); margin: 0 0 16px; font-family: "Noto Serif SC", serif; }
.list p { font-size: 16px; line-height: 2.2; color: var(--txt); font-family: "Noto Serif SC", serif; margin: 0; }
</style>
