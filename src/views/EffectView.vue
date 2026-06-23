<template>
   <SecondaryLayout st="培养成效" :si="si" v-model="key" pt="培养成效" :cr="curLabel">
    <ContentLoader base="effect" />
  </SecondaryLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'

const route = useRoute()
const si = [
  {key:'teacherCompetition',label:'教师竞赛',path:'/effect?tab=teacherCompetition'},
  {key:'studentCompetition',label:'学生技能竞赛',path:'/effect?tab=studentCompetition'}
]
const key = ref(route.query.tab || '')
const curLabel = computed(() => si.find(s => s.key === key.value)?.label || '')
watch(() => route.query.tab, (v) => { key.value = v || '' })
</script>
