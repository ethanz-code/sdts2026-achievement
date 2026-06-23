<template>
   <SecondaryLayout st="推广应用" :si="si" v-model="key" pt="推广应用" :cr="curLabel">
    <ContentLoader base="promotion" />
  </SecondaryLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'

const route = useRoute()
const si = [
  {key:'schoolApp',label:'院校应用',path:'/promotion?tab=schoolApp'},
  {key:'companyApp',label:'部分合作企业应用推广情况',path:'/promotion?tab=companyApp'},
  {key:'otherApp',label:'其他应用单位',path:'/promotion?tab=otherApp'}
]
const key = ref(route.query.tab || '')
const curLabel = computed(() => si.find(s => s.key === key.value)?.label || '')
watch(() => route.query.tab, (v) => { key.value = v || '' })
</script>
