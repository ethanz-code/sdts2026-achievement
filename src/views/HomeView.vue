<template>
  <main class="hm">
    <div class="container">
      <section class="cols rv">
        <div class="sb-wrap">
          <LeftSidebar
            title="成果导览"
            :items="si"
            v-model="key"
            @hover-item="onTheoryHover"
            @leave-item="onTheoryLeave"
          />
          <Transition name="pop-fade">
            <div
              v-if="showTheoryPopup"
              class="theory-popup"
              @mouseenter="onTheoryEnter"
              @mouseleave="onTheoryLeave"
            >
              <div v-for="cat in theoryCategories" :key="cat.key" class="pop-cat">
                <div class="pop-cat-hd">{{ cat.label }}（{{ cat.items.length }}）</div>
                <div
                  v-for="item in cat.items"
                  :key="item.id"
                  class="pop-item"
                  :class="{ on: activeTheoryCategory === cat.key && activeTheoryItem?.id === item.id }"
                  @click="selectTheoryItem(cat.key, item)"
                >{{ item.title }}</div>
              </div>
            </div>
          </Transition>
        </div>
        <div class="col-mid">
          <div class="vid-wrap">
            <h3 class="vid-sub">"红色山东 行走课堂"活动视频</h3>
            <VideoPlayer compact />
          </div>
        </div>
        <div class="col-rt">
          <template v-if="activeTheoryItem">
            <div class="theory-detail">
              <div class="td-hd">
                <h3 class="td-tit">{{ getLabel(activeTheoryCategory) }}</h3>
                <span class="td-tag">{{ activeTheoryCategory === 'projects' ? '教改课题' : activeTheoryCategory === 'papers' ? '学术论文' : '出版教材' }}</span>
              </div>
              <div class="td-bd">
                <h4 class="td-item-tit">{{ activeTheoryItem.title }}</h4>
                <div class="td-meta" v-if="activeTheoryCategory === 'projects'">
                  <div class="td-meta-it"><span class="td-meta-l">来　源：</span>{{ activeTheoryItem.source }}</div>
                  <div class="td-meta-it"><span class="td-meta-l">年　份：</span>{{ activeTheoryItem.year }}</div>
                  <div class="td-meta-it"><span class="td-meta-l">状　态：</span>{{ activeTheoryItem.status }}</div>
                </div>
                <div class="td-meta" v-else-if="activeTheoryCategory === 'papers'">
                  <div class="td-meta-it"><span class="td-meta-l">作　者：</span>{{ activeTheoryItem.authors }}</div>
                  <div class="td-meta-it"><span class="td-meta-l">期　刊：</span>{{ activeTheoryItem.journal }}</div>
                  <div class="td-meta-it"><span class="td-meta-l">年　份：</span>{{ activeTheoryItem.year }}</div>
                </div>
                <div class="td-meta" v-else>
                  <div class="td-meta-it"><span class="td-meta-l">出版社：</span>{{ activeTheoryItem.publisher }}</div>
                  <div class="td-meta-it"><span class="td-meta-l">年　份：</span>{{ activeTheoryItem.year }}</div>
                  <div class="td-meta-it"><span class="td-meta-l">级　别：</span>{{ activeTheoryItem.level }}</div>
                </div>
                <div class="td-desc" v-if="activeTheoryItem.detail">
                  <p>{{ activeTheoryItem.detail }}</p>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="key && key !== 'theory'">
            <ContentLoader />
          </template>
          <div v-else class="ov-wrap">
            <h3 class="ov-tit">{{ overview.title }}</h3>
            <div class="ov-bd">
              <p class="ov-p">{{ overview.paragraphs[0] }}</p>
              <router-link to="/summary?section=intro" class="ov-more">查看更多</router-link>
            </div>
          </div>
        </div>
      </section>

      <section class="dbar rv">
        <h2 class="sec-h">成果获奖</h2>
        <div class="award-cols">
          <div class="award-col">
            <h3 class="award-sub">成果所获奖项</h3>
            <ImageCarousel :images="resultAwardImages" :speed="0.2" :forcePaused="lightboxOpen" @lightbox-open="lightboxOpen = true" @lightbox-close="lightboxOpen = false" />
          </div>
          <div class="award-col">
            <h3 class="award-sub">学生获奖</h3>
            <ImageCarousel :images="studentAwardImages" :speed="0.2" :forcePaused="lightboxOpen" @lightbox-open="lightboxOpen = true" @lightbox-close="lightboxOpen = false" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LeftSidebar from '@/components/LeftSidebar.vue'
import ContentLoader from '@/components/ContentLoader.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import { overview, leftSidebarItems as leftItems, theoryCategories } from '@/data/content.js'

const route = useRoute()
const router = useRouter()
const key = ref(route.query.section || '')
watch(() => route.query.section, (v) => { key.value = v || '' })
const lightboxOpen = ref(false)

const showTheoryPopup = ref(false)
const activeTheoryCategory = ref('')
const activeTheoryItem = ref(null)
let theoryTimer = null

watch(key, (v) => {
  if (v !== 'theory') {
    activeTheoryItem.value = null
    activeTheoryCategory.value = ''
  }
})

const adjustPopupPosition = () => {
  if (window.innerWidth > 767) return
  const wrap = document.querySelector('.sb-wrap')
  const popup = document.querySelector('.theory-popup')
  if (!wrap || !popup) return
  const items = document.querySelectorAll('.sb-ls li')
  let theoryEl = null
  for (const item of items) {
    if (item.textContent.includes('理论成果')) {
      theoryEl = item
      break
    }
  }
  if (!theoryEl) return
  const wrapRect = wrap.getBoundingClientRect()
  const itemRect = theoryEl.getBoundingClientRect()
  popup.style.top = (itemRect.bottom - wrapRect.top + 4) + 'px'
}

watch(showTheoryPopup, (val) => {
  if (val) {
    window.addEventListener('resize', adjustPopupPosition)
  } else {
    window.removeEventListener('resize', adjustPopupPosition)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', adjustPopupPosition)
})

const onTheoryEnter = () => {
  clearTimeout(theoryTimer)
  showTheoryPopup.value = true
  nextTick(adjustPopupPosition)
}
const onTheoryLeave = () => {
  theoryTimer = setTimeout(() => {
    showTheoryPopup.value = false
  }, 200)
}
const onTheoryHover = (item) => {
  if (item.key === 'theory') onTheoryEnter()
}
const selectTheoryItem = (catKey, item) => {
  activeTheoryCategory.value = catKey
  activeTheoryItem.value = item
  key.value = 'theory'
  router.replace({ query: { section: 'theory' } })
}
const getLabel = (catKey) => {
  const cat = theoryCategories.find(c => c.key === catKey)
  return cat ? cat.label : ''
}

const si = leftItems.map(item => ({
  ...item,
  path: `/?section=${item.key}`
}))

const resultAwardFiles = ['1.webp','2.webp','4.webp','5.webp','7.webp','8.webp','9.webp','10.webp','11.webp','12.webp','13.webp','14.webp','15.webp','16-1.webp','16-2.webp','17-1.webp','17-2.webp','18.webp','20.webp','21.webp','22.webp','23.webp','24.webp','25-1.webp','25-2.webp','25-3.webp','26-1.webp','26-2.webp','27.webp','28.webp','29.webp','30.webp','31.webp','32.webp']
const studentAwardFiles = ['1.webp','2.webp','3.webp','4.webp','5.webp','6.webp','7.webp','8.webp','9.webp','10.webp','11.webp','12.webp','13.webp','14.webp','15.webp','16.webp','118.webp','119.webp','120.webp','121.webp','122.webp','123.webp','124.webp','125.webp','126.webp','127.webp','128.webp']

const resultAwardImages = resultAwardFiles.map((f, i) => ({
  id: i + 1,
  label: `成果获奖 ${i + 1}`,
  src: `/images/awards-result/${f}`
}))
const studentAwardImages = studentAwardFiles.map((f, i) => ({
  id: i + 1,
  label: `学生获奖 ${i + 1}`,
  src: `/images/awards-student/${f}`,
  rotate: i === 16 ? '-90deg' : undefined
}))

/* 滚动触发动画 + sidebar高度同步 */
const secs = ref([])
let sbObserver = null

function syncColMidHeight() {
  const sb = document.querySelector('.sb')
  const mid = document.querySelector('.col-mid')
  if (sb && mid) {
    if (window.innerWidth > 767) {
      mid.style.height = sb.offsetHeight + 'px'
    } else {
      mid.style.height = ''
    }
  }
}

onMounted(() => {
  const els = document.querySelectorAll('.rv')
  if (!els.length) return
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('rv-in') })
  }, { threshold: .15 })
  els.forEach(el => obs.observe(el))
  secs.value = [obs]

  nextTick(() => {
    syncColMidHeight()
    setTimeout(syncColMidHeight, 200)
    const sb = document.querySelector('.sb')
    if (sb && 'ResizeObserver' in window) {
      sbObserver = new ResizeObserver(() => syncColMidHeight())
      sbObserver.observe(sb)
    }
  })
  window.addEventListener('resize', syncColMidHeight)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncColMidHeight)
  if (sbObserver) sbObserver.disconnect()
})
</script>

<style lang="scss" scoped>
.hm{padding:0}

/* 滚动触发动画 */
.rv{opacity:0;transform:translateY(24px);transition:all .6s ease}
.rv-in{opacity:1;transform:translateY(0)}

.cols{display:grid;grid-template-columns:240px 50fr 50fr;gap:32px;margin:36px 0 40px;align-items:start}
.col-mid{min-width:0;overflow:hidden;max-height:600px}
.col-rt{min-width:0;align-self:stretch;display:flex;flex-direction:column}

/* 视频区 */
.vid-wrap{background:#fff;border-radius:6px;padding:10px;box-shadow:var(--shadow-sm);border:1px solid #ede5dd;height:100%;display:flex;flex-direction:column}
.vid-sub{font-size:15px;font-weight:700;color:var(--red-d);margin:0;font-family:var(--font-serif);letter-spacing:2px;padding:10px 16px;background:linear-gradient(135deg,var(--red-ll) 0%,#fff 100%);border-radius:4px 4px 0 0;position:relative;border-bottom:2px solid var(--gold)}
.vid-wrap :deep(.vdo){border-radius:0 0 4px 4px;overflow:hidden;flex:1;display:flex}
.vid-wrap :deep(.vdo-fr){flex:1;height:100%}

/* 成果简介卡片 */
.ov-wrap{background:#fff;border-radius:6px;box-shadow:var(--shadow-sm);overflow:hidden;border:1px solid #ede5dd;transition:box-shadow .4s;height:100%;display:flex;flex-direction:column}
.ov-wrap:hover{box-shadow:var(--shadow-md)}
.ov-tit{
  font-size:18px;font-weight:700;color:var(--red-d);padding:16px 24px;
  font-family:var(--font-serif);letter-spacing:2px;
  background:linear-gradient(135deg,#fdf8f0 0%,#fff 100%);
  border-bottom:2px solid var(--gold);
  position:relative
}
.ov-tit::before{content:'';display:inline-block;width:4px;height:18px;background:var(--red);border-radius:2px;margin-right:10px;vertical-align:middle}
.ov-bd{padding:24px 24px;background:linear-gradient(180deg,#fcfaf6 0%,#fff 60%);flex:1}
.ov-p{text-indent:2em;font-size:16px;line-height:2;color:var(--txt);font-family:var(--font-sans);margin-bottom:16px}
.ov-more{display:inline-block;margin-top:4px;font-size:14px;color:var(--red);font-weight:600;text-decoration:none;font-family:var(--font-sans);position:relative;transition:color .3s}
.ov-more::after{content:'→';display:inline-block;margin-left:4px;transition:transform .3s cubic-bezier(.4,0,.2,1)}
.ov-more:hover{color:var(--red-d)}
.ov-more:hover::after{transform:translateX(4px)}
.ov-more::before{content:'';position:absolute;bottom:-2px;left:0;right:0;height:2px;background:var(--gold);border-radius:1px;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.4,0,.2,1)}
.ov-more:hover::before{transform:scaleX(1)}

/* 理论成果弹出面板 */
.sb-wrap{position:relative}
.theory-popup{
  position:absolute;left:calc(100% + 4px);top:0;width:340px;
  background:#fff;border:1px solid #ede5dd;border-radius:8px;
  box-shadow:0 8px 24px rgba(0,0,0,.08),0 2px 8px rgba(0,0,0,.04);
  z-index:100;padding:12px 0;max-height:480px;overflow-y:auto
}
.pop-cat{margin:0 8px}
.pop-cat+.pop-cat{margin-top:4px;border-top:1px solid #f0e8e0;padding-top:4px}
.pop-cat-hd{
  font-size:13px;font-weight:700;color:var(--red-d);padding:8px 12px 6px;
  font-family:var(--font-serif);letter-spacing:1px;
  border-left:3px solid var(--gold);margin:0 0 2px;border-radius:0 2px 2px 0
}
.pop-item{
  padding:7px 12px 7px 16px;font-size:13px;color:var(--txt2);cursor:pointer;
  border-radius:4px;transition:all .2s;line-height:1.5;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap
}
.pop-item:hover{background:#fdf8f0;color:var(--red)}
.pop-item.on{color:var(--red);font-weight:600;background:#fcf5e0}

.pop-fade-enter-active,.pop-fade-leave-active{transition:opacity .2s ease,transform .2s ease}
.pop-fade-enter-from,.pop-fade-leave-to{opacity:0;transform:translateX(-8px)}

/* 理论成果详情卡片 */
.theory-detail{background:#fff;border-radius:6px;box-shadow:var(--shadow-sm);overflow:hidden;border:1px solid #ede5dd;height:100%;display:flex;flex-direction:column}
.td-hd{
  display:flex;align-items:center;gap:12px;
  padding:14px 24px;background:linear-gradient(135deg,#fdf8f0 0%,#fff 100%);
  border-bottom:2px solid var(--gold)
}
.td-tit{font-size:18px;font-weight:700;color:var(--red-d);font-family:var(--font-serif);letter-spacing:2px;margin:0;flex:1}
.td-tag{font-size:12px;padding:3px 12px;border-radius:10px;background:var(--red-ll);color:var(--red-d);font-weight:600;white-space:nowrap;flex-shrink:0}
.td-bd{padding:20px 24px;flex:1}
.td-item-tit{font-size:17px;font-weight:700;color:#333;margin:0 0 16px;line-height:1.6;font-family:var(--font-serif)}
.td-meta{
  display:flex;flex-wrap:wrap;gap:12px;margin-bottom:16px;
  padding:14px 18px;background:#fcfaf6;border-radius:6px;border:1px solid #f5f0eb
}
.td-meta-it{font-size:14px;color:var(--txt2);line-height:1.8;flex:1;min-width:160px}
.td-meta-l{color:var(--txt3);font-weight:600;display:inline-block;min-width:60px}
.td-desc{padding:12px 0 4px;border-top:1px solid #f0e8e0}
.td-desc p{font-size:15px;line-height:1.9;color:var(--txt);text-indent:2em;margin:0}

/* 成果获奖区 */
.dbar{padding-bottom:32px}
.dbar .sec-h{margin-top:0;margin-bottom:0}
.dbar .sec-h::after{background:linear-gradient(90deg,var(--gold-border),transparent)}
.rv-in .award-col{animation:fadeIn .5s ease both}
.rv-in .award-col:first-child{animation-delay:.1s}
.rv-in .award-col:last-child{animation-delay:.2s}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.award-cols{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:20px}
.award-col{min-width:0;min-height:280px;background:#fff;border:1px solid #ede5dd;border-radius:6px;padding:16px;box-shadow:var(--shadow-sm);transition:all .4s cubic-bezier(.4,0,.2,1)}
.award-col:hover{box-shadow:var(--shadow-md);transform:translateY(-2px)}
.award-sub{font-size:15px;font-weight:700;color:var(--red-d);margin:0 0 12px;font-family:var(--font-serif);letter-spacing:1px;padding:8px 12px;background:linear-gradient(135deg,var(--red-ll) 0%,#fff 100%);border-left:3px solid var(--gold);border-radius:0 4px 4px 0}

@media(max-width:1024px){
  .cols{grid-template-columns:240px 1fr;gap:24px}
  .col-mid{display:none}
  .col-rt{grid-column:auto}
}
@media(max-width:767px){
  .cols{grid-template-columns:1fr;gap:24px;margin:24px 0 28px}
  .col-mid{height:auto;overflow:visible}
  .hm{padding:0 0 32px}
  .ov-tit{padding:12px 16px;font-size:16px}
  .ov-bd{padding:16px}
  .award-cols{grid-template-columns:1fr;gap:16px}
  .award-col{min-height:200px}
  .vid-wrap{padding:8px}
  .vid-sub{font-size:14px;padding:8px 12px}
  .theory-popup{left:0;width:100%;max-height:60vh}
}
</style>
