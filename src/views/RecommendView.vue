<template>
  <SecondaryLayout st="推荐书" :si="si" v-model="key" pt="推荐书" cr="推荐书">
    <ContentLoader base="recommend" />
  </SecondaryLayout>
</template>

<script setup>
import { ref } from 'vue'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'

const si = []
const key = ref('')
</script>

<style lang="scss" scoped>
</style>
