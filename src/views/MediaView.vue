<template>
  <SecondaryLayout st="媒体报道" :si="[]" pt="媒体报道" :cr="'媒体报道'">
    <div class="media-wrap">
      <template v-for="(group, cat) in groupedReports" :key="cat">
        <h2 class="sec-h">{{ cat }}</h2>
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
            <tr v-for="(m, i) in group" :key="i">
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
      </template>
    </div>
  </SecondaryLayout>
</template>

<script setup>
import { computed } from 'vue'
import SecondaryLayout from '@/components/SecondaryLayout.vue'
import { mediaReports as list } from '@/data/content.js'

const groupedReports = computed(() => {
  const groups = {}
  for (const m of list) {
    if (!groups[m.category]) groups[m.category] = []
    groups[m.category].push(m)
  }
  return groups
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
