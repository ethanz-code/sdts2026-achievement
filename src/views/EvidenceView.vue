<template>
  <SecondaryLayout st="其他佐证" :si="[]" pt="其他佐证">
    <ContentLoader base="evidence">
      <template #fallback>
        <h2 class="sec-h">佐证材料目录</h2>
        <div class="list">
          <p v-for="(t,i) in toc" :key="i">
            <b>{{ i + 1 }}. {{ t }}</b>
          </p>
          <h3 style="margin-top:24px">成果曾获奖励</h3>
          <p v-for="(a,i) in awards" :key="i" style="font-size:14px">
            {{ i + 1 }}. {{ a.title }}（{{ a.level }}，{{ a.year }}，{{ a.dept }}）
          </p>
        </div>
      </template>
    </ContentLoader>
  </SecondaryLayout>
</template>

<script setup>
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'
import { evidences, resultAwards as awards } from '@/data/content.js'

const toc = evidences.toc.items
</script>

<style lang="scss" scoped>
.sec-h { font-size: 20px; font-weight: 600; color: var(--red-d); margin: 0 0 16px; font-family: "Noto Serif SC", serif; }
.list { font-family: "Noto Serif SC", serif; }
.list p { font-size: 15px; line-height: 2.2; color: var(--txt); margin: 0 0 6px; }
.list b { color: var(--red-d); font-weight: 600; }
.list h3 { font-size: 18px; color: var(--red-d); margin: 24px 0 12px; font-family: "Noto Serif SC", serif; }
</style>
