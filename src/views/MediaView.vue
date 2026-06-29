<template>
  <SecondaryLayout st="媒体报道" :si="si" v-model="key" pt="媒体报道" :cr="curLabel || '媒体报道'">
    <div class="media-wrap">
      <h2 class="sec-h">{{ currentCategory }}</h2>
      <table class="media-tbl">
        <thead>
          <tr>
            <th class="w-src">来源</th>
            <th class="w-title">标题</th>
            <th class="w-date">日期</th>
            <th class="w-note">备注</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(m, i) in currentReports" :key="i">
            <td class="td-src">
              <span class="src-lvl">{{ m.level }}</span>
              {{ m.source }}
            </td>
            <td class="td-title">
              <a :href="m.url" target="_blank" rel="noopener">{{ m.title }}</a>
            </td>
            <td class="td-date">{{ m.date }}</td>
            <td class="td-note">{{ m.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SecondaryLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import { mediaReports as list } from '@/data/content.js'

const route = useRoute()

const sectionMap = {
  redWalk: '红色行走课堂',
  baize: '白泽大模型',
  skillComp: '技能大赛',
  unwto: 'UNWTO认证与专业群',
  partyBuild: '党建与产教融合'
}

const defaultSection = 'redWalk'

const key = ref(route.query.section || defaultSection)

const si = Object.entries(sectionMap).map(([k, label]) => ({
  key: k,
  label,
  path: `/media?section=${k}`
}))

const curLabel = computed(() => si.find(s => s.key === key.value)?.label || '')

const currentCategory = computed(() => sectionMap[key.value] || sectionMap[defaultSection])

const currentReports = computed(() => {
  const cat = currentCategory.value
  return list.filter(m => m.category === cat)
})

watch(() => route.query.section, (v) => {
  key.value = v || defaultSection
})
</script>

<style lang="scss" scoped>
.media-wrap { padding: 0; }
.sec-h {
  font-size: 18px; font-weight: 700; color: var(--red-d);
  margin: 28px 0 12px; font-family: var(--font-serif);
  padding-bottom: 8px; border-bottom: 1px solid #e8d8d8;
  &:first-child { margin-top: 0; }
}
.media-tbl {
  width: 100%; border-collapse: collapse;
  font-family: var(--font-sans);
  font-size: 14px; margin-bottom: 8px;
}
.media-tbl th {
  text-align: left; font-weight: 600; color: var(--txt2);
  padding: 8px 12px; background: var(--cream);
  font-size: 13px; border-bottom: 2px solid var(--gold-border);
}
.media-tbl td {
  padding: 10px 12px; border-bottom: 1px solid #f0e8e8;
  color: var(--txt); line-height: 1.6;
}
.media-tbl tr:hover td { background: #fdfafa; }
.w-src { width: 20%; }
.w-title { width: 48%; }
.w-date { width: 14%; }
.w-note { width: 18%; }
.td-src { font-size: 13px; color: var(--txt2); }
.src-lvl {
  font-size: 12px; color: var(--txt3);
  margin-right: 4px;
}
.td-title a {
  color: var(--txt); text-decoration: none;
  &:hover { color: var(--red); text-decoration: underline; }
}
.td-date {
  font-size: 13px; color: var(--txt3); white-space: nowrap;
}
.td-note {
  font-size: 12px; color: var(--red); white-space: nowrap;
}

@media(max-width:767px){
  .media-tbl { font-size: 13px; }
  .media-tbl th, .media-tbl td { padding: 8px 6px; }
  .w-src { width: 24%; }
  .w-title { width: 40%; }
  .w-date { width: 18%; }
  .w-note { width: 18%; }
  .td-date { font-size: 12px; }
  .src-lvl { display: none; }
}
</style>
