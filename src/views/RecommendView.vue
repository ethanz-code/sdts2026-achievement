<template>
  <SecondaryLayout st="申报书" :si="si" v-model="key" pt="申报书" cr="申报书">
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
