<template>
  <SecondaryLayout st="媒体报道" :si="[]" pt="媒体报道" :cr="'媒体报道'">
    <ContentLoader base="media">
      <template #fallback>
        <h2 class="sec-h">媒体报道列表</h2>
        <div class="list">
          <p v-for="(n,i) in list" :key="i">
            {{ i + 1 }}. <b>{{ n.source }}</b> — {{ n.title }}<span v-if="n.note">（{{ n.note }}）</span>
          </p>
        </div>
      </template>
    </ContentLoader>
  </SecondaryLayout>
</template>

<script setup>
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'
import { mediaReports as list } from '@/data/content.js'
</script>

<style lang="scss" scoped>
.sec-h { font-size: 20px; font-weight: 600; color: var(--red-d); margin: 0 0 16px; font-family: "Noto Serif SC", serif; }
.list p { font-size: 15px; line-height: 2.2; color: var(--txt); font-family: "Noto Serif SC", serif; margin: 0 0 8px; }
.list b { color: var(--red-d); }
</style>
