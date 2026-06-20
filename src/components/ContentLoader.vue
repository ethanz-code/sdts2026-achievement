<template>
  <div class="cl">
    <div v-if="loading" class="cl-load">检测文件中...</div>

    <PdfViewer v-else-if="kind === 'pdf'" :src="url" />
    <VueOfficeDocx v-else-if="kind === 'docx'" :src="url" />

    <div v-else-if="kind === 'txt'" class="cl-txt">
      <pre>{{ text }}</pre>
    </div>

    <div v-else class="cl-empty">
      <p class="cl-empty-num">404</p>
      <p class="cl-empty-reason">
        资源文件不存在：<code>{{ basePath }}.pdf</code>
      </p>
      <p class="cl-empty-solution">
        将文件放入 <code>public/docs/{{ dirName }}/</code> 目录即可自动加载
      </p>
      <p class="cl-empty-formats">支持格式：pdf、docx、txt</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import PdfViewer from '@/components/PdfViewer.vue'
import VueOfficeDocx from '@vue-office/docx'
import '@vue-office/docx/lib/index.css'

const route = useRoute()

const dirName = computed(() => {
  let name = (route.name?.toString() || 'home')
  name = name.replace(/-tab$/, '')
  return name
})

const subName = computed(() => {
  if (route.params.tab) return route.params.tab
  if (route.query.section) return route.query.section
  if (route.query.tab) return route.query.tab
  if (route.query.filter) return route.query.filter
  return 'index'
})

const basePath = computed(() => `/docs/${dirName.value}/${subName.value}`)

const kind = ref('')
const url = ref('')
const text = ref('')
const loading = ref(true)

function isSpaHtml(r) {
  const ct = r.headers.get('content-type') || ''
  return ct.includes('text/html')
}

async function tryFile(path, ext) {
  try {
    let r = await fetch(path, { method: 'HEAD' })
    if (!r.ok || isSpaHtml(r)) {
      r = await fetch(path, { method: 'GET', headers: { Range: 'bytes=0-0' } })
    }
    if (r.ok && !isSpaHtml(r)) {
      if (ext === 'txt') {
        const tr = await fetch(path)
        text.value = await tr.text()
      }
      return true
    }
  } catch (_) {}
  return false
}

async function load() {
  loading.value = true
  kind.value = ''
  url.value = ''
  text.value = ''

  for (const ext of ['pdf', 'docx', 'txt']) {
    const u = `${basePath.value}.${ext}`
    if (await tryFile(u, ext)) {
      kind.value = ext
      url.value = u
      loading.value = false
      return
    }
  }

  loading.value = false
  kind.value = 'none'
}

onMounted(load)
watch([dirName, subName], load)
</script>

<style lang="scss" scoped>
.cl { min-height: 500px; }
.cl-load {
  display: flex; align-items: center; justify-content: center; min-height: 500px;
  font-size: 15px; color: var(--txt2); font-family: "Noto Sans SC", sans-serif;
}
.cl-txt pre {
  white-space: pre-wrap; word-break: break-word;
  font-size: 16px; line-height: 2; color: var(--txt);
  font-family: "Noto Serif SC", serif; padding: 24px;
  background: #fff; border: 1px solid #eee; border-radius: 2px;
  min-height: 500px;
}
.cl-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 500px; text-align: center; padding: 60px 24px;
  background: #fff; border: 1px dashed #ddd; border-radius: 4px;
  font-family: "Noto Sans SC", sans-serif;
}
.cl-empty-num { font-size: 56px; font-weight: 700; color: var(--red-d); margin: 0 0 8px; line-height: 1; font-family: var(--font-serif); }
.cl-empty-reason { font-size: 16px; color: var(--txt); margin: 0 0 12px; }
.cl-empty-reason code { background: #fbeaea; padding: 2px 8px; border-radius: 3px; font-size: 15px; color: var(--red-d); }
.cl-empty-solution { font-size: 14px; color: var(--txt2); margin: 0 0 8px; }
.cl-empty-solution code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; font-size: 13px; }
.cl-empty-formats { font-size: 13px; color: var(--txt3); margin: 0; }
</style>
