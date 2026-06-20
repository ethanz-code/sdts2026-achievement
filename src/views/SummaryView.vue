<template>
   <SecondaryLayout st="总结报告" :si="si" v-model="key" pt="总结报告" :cr="curLabel">
    <ContentLoader />
  </SecondaryLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'

const route = useRoute()
const si = [
  {key:'intro',label:'成果简介',path:'/summary?section=intro'},
  {key:'problem',label:'教学问题及方法',path:'/summary?section=problem'},
  {key:'innovation',label:'成果创新点',path:'/summary?section=innovation'},
  {key:'effect',label:'推广应用效果',path:'/summary?section=effect'},
  {key:'awards',label:'曾获奖励情况',path:'/summary?section=awards'}
]
const key = ref(route.query.section || '')
const curLabel = computed(() => si.find(s => s.key === key.value)?.label || '')
watch(() => route.query.section, (v) => { key.value = v || '' })
</script>

<style lang="scss" scoped>
</style>
