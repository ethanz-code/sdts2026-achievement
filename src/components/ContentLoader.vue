<template>
  <div class="cl">
    <div v-if="loading" class="cl-load">检测文件中...</div>

    <PdfViewer v-else-if="kind === 'pdf'" :src="url" />
    <VueOfficeDocx v-else-if="kind === 'docx'" :src="url" />

    <div v-else-if="kind === 'md'" class="cl-md" v-html="html"></div>

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
      <p class="cl-empty-formats">支持格式：pdf、docx、md、txt</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import PdfViewer from '@/components/PdfViewer.vue'
import VueOfficeDocx from '@vue-office/docx'
import '@vue-office/docx/lib/index.css'

const props = defineProps({
  base: String,
  sub: String
})

const route = useRoute()

const dirName = computed(() => {
  if (props.base) return props.base
  let name = (route.name?.toString() || 'home')
  name = name.replace(/-tab$/, '')
  return name
})

const subName = computed(() => {
  if (props.sub) return props.sub
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
const html = ref('')
const loading = ref(true)

let loadId = 0

function bust() {
  return `_t=${Date.now()}${Math.random().toString(36).slice(2, 6)}`
}

async function tryFile(path, ext) {
  try {
    const cacheBust = bust()
    let r = await fetch(`${path}?${cacheBust}`, { method: 'HEAD' })
    if (!r.ok || r.headers.get('content-type')?.includes('text/html')) {
      r = await fetch(`${path}?${cacheBust}`, { method: 'GET', headers: { Range: 'bytes=0-0' } })
    }
    if (r.ok && !r.headers.get('content-type')?.includes('text/html')) {
      if (ext === 'md' || ext === 'txt') {
        const tr = await fetch(`${path}?${bust()}`)
        const raw = await tr.text()
        if (ext === 'md') {
          html.value = marked.parse(raw)
        } else {
          text.value = raw
        }
      }
      return true
    }
  } catch (_) {}
  return false
}

async function load() {
  const id = ++loadId
  loading.value = true
  kind.value = ''
  url.value = ''
  text.value = ''
  html.value = ''

  for (const ext of ['pdf', 'docx', 'md', 'txt']) {
    const u = `${basePath.value}.${ext}`
    if (await tryFile(u, ext)) {
      if (id !== loadId) return
      kind.value = ext
      url.value = u
      loading.value = false
      return
    }
  }

  if (id !== loadId) return
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
.cl-md {
  padding: 28px 32px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 2px;
  min-height: 500px;
  font-size: 17px;
  line-height: 2;
  color: var(--txt);
  font-family: var(--font-serif);
}
.cl-md :deep(h2) {
  font-size: 20px;
  font-weight: 700;
  color: var(--red-d);
  margin: 28px 0 14px;
  font-family: var(--font-serif);
}
.cl-md :deep(h3) {
  font-size: 18px;
  font-weight: 600;
  color: var(--red-d);
  margin: 22px 0 12px;
  font-family: var(--font-serif);
}
.cl-md :deep(p) {
  margin-bottom: 14px;
  text-indent: 2em;
}
.cl-md :deep(strong) {
  color: var(--red-d);
  font-weight: 600;
}
.cl-md :deep(ul), .cl-md :deep(ol) {
  margin: 10px 0 14px 2em;
}
.cl-md :deep(li) {
  margin-bottom: 6px;
  line-height: 2;
}
.cl-txt pre {
  white-space: pre-wrap; word-break: break-word;
  font-size: 17px; line-height: 2; color: var(--txt);
  font-family: var(--font-serif); padding: 28px 32px;
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
