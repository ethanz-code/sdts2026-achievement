<template>
  <SecondaryLayout st="其他佐证" :si="si" v-model="key" pt="其他佐证" :cr="curLabel">
    <ContentLoader base="evidence" />
  </SecondaryLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'
import { evidencePDFs } from '@/data/content.js'

const route = useRoute()

const si = evidencePDFs.map(item => ({
  key: item.key,
  label: item.label,
  path: `/evidence?filter=${item.key}`
}))

const key = ref(route.query.filter || '')
const curLabel = computed(() => si.find(s => s.key === key.value)?.label || '')
watch(() => route.query.filter, (v) => { key.value = v || '' })
</script>

<style lang="scss" scoped>
</style>
