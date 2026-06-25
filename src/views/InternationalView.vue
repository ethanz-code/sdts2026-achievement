<template>
  <SecondaryLayout st="国际认可" :si="[]" pt="国际认可" :cr="'国际认可'">
    <ContentLoader base="international">
      <template #fallback>
        <h2 class="sec-h">国际认证与合作</h2>
        <div class="list">
          <p v-for="(c,i) in list" :key="i">
            {{ i + 1 }}. {{ c.n }}<span v-if="c.l">（{{ c.l }}，{{ c.y }}，{{ c.o }}）</span>
          </p>
        </div>
      </template>
    </ContentLoader>
  </SecondaryLayout>
</template>

<script setup>
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import ContentLoader from '@/components/ContentLoader.vue'

const list = [
  {n:'旅游管理专业世界旅游组织专业认证（UNWTO TedQual）',l:'世界级',y:'2021',o:'世界旅游组织'},
  {n:'世界数字教育大会《中国智慧教育发展报告》入选',l:'世界级',y:'2026',o:'联合国教科文组织'},
  {n:'中外合作办学项目（瑞士方向）',l:'国际',y:'2018',o:'瑞士洛桑酒店管理学院'},
  {n:'中外合作办学项目（韩国方向）',l:'国际',y:'2019',o:'韩国庆熙大学'},
  {n:'中蒙旅游研究院',l:'国际',y:'2022',o:'蒙古财经大学'},
  {n:'中印尼旅游国际化人才培训基地',l:'国际',y:'2024',o:'印度尼西亚相关院校'},
  {n:'中马文旅人才培养基地',l:'国际',y:'2025',o:'马来西亚相关院校'}
]
</script>

<style lang="scss" scoped>
.sec-h { font-size: 20px; font-weight: 700; color: var(--red-d); margin: 0 0 16px; font-family: var(--font-serif); letter-spacing:1px; }
.list p { font-size: 15px; line-height: 2.2; color: var(--txt); font-family: var(--font-sans); margin: 0 0 6px; }
</style>
