<template>
  <SecondaryLayout st="国际认可" :si="si" v-model="key" pt="国际认可" :cr="curLabel || '国际认可'">
    <ContentLoader base="international" :sub="subFile" />
  </SecondaryLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'

const route = useRoute()

const sections = [
  { key: 'standard', label: '一、牵头研制国际标准', file: 'standard' },
  { key: 'exchange', label: '二、拓展国际交流与合作', file: 'exchange' },
  { key: 'base', label: '三、国际化人才培养基地', file: 'base' },
  { key: 'beltRoad', label: '四、服务一带一路', file: 'beltRoad' }
]

const key = ref(route.query.section || 'standard')
const subFile = ref(route.query.section || 'standard')

const si = sections.map(s => ({
  key: s.key,
  label: s.label,
  path: `/international?section=${s.key}`
}))

const curLabel = computed(() => si.find(s => s.key === key.value)?.label || '')

watch(() => route.query.section, (v) => {
  const section = v || 'standard'
  key.value = section
  subFile.value = section
})
</script>
