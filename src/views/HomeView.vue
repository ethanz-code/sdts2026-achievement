<template>
  <main class="hm">
    <div class="container">
      <section class="cols">
        <LeftSidebar title="成果导览" :items="si" v-model="key"/>
        <div class="col-mid">
          <h3 class="vid-sub">成果视频</h3>
          <VideoPlayer compact />
        </div>
        <div class="col-rt">
          <template v-if="key">
            <ContentLoader />
          </template>
          <div v-else class="ov-wrap">
            <h3 class="ov-tit">{{ overview.title }}</h3>
            <div class="ov-bd">
              <p class="ov-p">{{ overview.paragraphs[0] }}</p>
              <router-link to="/summary?section=intro" class="ov-more">查看更多 →</router-link>
            </div>
          </div>
        </div>
      </section>

      <section class="dbar">
        <h2 class="sec-h">成果获奖</h2>
        <div class="award-cols">
          <div class="award-col">
            <h3 class="award-sub">成果所获奖项</h3>
            <ImageCarousel :images="resultAwardImages" :forcePaused="lightboxOpen" @lightbox-open="lightboxOpen = true" @lightbox-close="lightboxOpen = false" />
          </div>
          <div class="award-col">
            <h3 class="award-sub">学生获奖</h3>
            <ImageCarousel :images="studentAwardImages" :forcePaused="lightboxOpen" @lightbox-open="lightboxOpen = true" @lightbox-close="lightboxOpen = false" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LeftSidebar from '@/components/LeftSidebar.vue'
import ContentLoader from '@/components/ContentLoader.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import { overview, leftSidebarItems as leftItems } from '@/data/content.js'

const route = useRoute()
const key = ref(route.query.section || '')
watch(() => route.query.section, (v) => { key.value = v || '' })
const lightboxOpen = ref(false)

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
  src: `/images/awards-student/${f}`
}))
</script>

<style lang="scss" scoped>
.hm{padding:0}
.cols{display:grid;grid-template-columns:240px 42fr 58fr;gap:32px;margin:32px 0 48px;align-items:start}
.col-mid{min-width:0;display:flex;flex-direction:column;gap:12px}
.col-rt{min-width:0}
.vid-sub{font-size:15px;font-weight:600;color:var(--txt);margin:0;font-family:var(--font-serif);letter-spacing:0.5px}
.ov-wrap{border-radius:2px;background:var(--bg)}
.ov-tit{
  font-size:16px;font-weight:700;color:#fff;padding:12px 28px;
  background:linear-gradient(180deg,var(--red) 0%,var(--red-d) 100%);
  letter-spacing:2px;box-shadow:0 2px 6px rgba(183,28,28,.25);font-family:var(--font-serif);
  position:relative;border-radius:2px 2px 0 0;
}
.ov-tit::after{
  content:'';position:absolute;right:-14px;top:0;bottom:0;width:14px;
  background:linear-gradient(180deg,var(--red-d) 0%,var(--red) 100%);
  clip-path:polygon(0 0,100% 50%,0 100%);
}
.ov-bd{padding:24px 28px;background:var(--red-ll);overflow:hidden;border-radius:0 0 2px 2px}
.ov-p{text-indent:2em;font-size:16px;line-height:2.1;color:var(--txt);font-family:var(--font-serif);margin-bottom:16px}
.ov-more{display:block;text-align:right;margin-top:16px;font-size:14px;color:var(--red);font-weight:500;text-decoration:none;font-family:"Noto Sans SC",sans-serif}
.ov-more:hover{color:var(--red-d);text-decoration:underline}
.dbar .sec-h{margin-top:0;margin-bottom:16px;font-size:22px}
.dbar{padding-bottom:24px}
.award-cols{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:8px}
.award-col{min-width:0;min-height:280px}
.award-sub{font-size:16px;font-weight:600;color:var(--txt);margin-bottom:12px;font-family:var(--font-serif);letter-spacing:0.5px}

@media(max-width:1024px){
  .cols{grid-template-columns:240px 1fr;gap:24px}
  .col-mid{display:none}
  .col-rt{grid-column:auto}
}
@media(max-width:767px){
  .cols{grid-template-columns:1fr;gap:24px}
  .hm{padding:0 0 32px}
  .award-cols{grid-template-columns:1fr;gap:12px}
  .award-col{min-height:200px}
}
</style>
