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
const key = ref(route.query.section || null)
watch(() => route.query.section, (v) => { key.value = v || null })
const lightboxOpen = ref(false)

const si = leftItems.map(item => ({
  ...item,
  path: `/?section=${item.key}`
}))

const resultAwardFiles = ['1.jpg','2.jpg','4.png','5.png','7.jpg','8.png','9.png','10.jpg','11.jpg','12.png','13.png','14.png','15.png','16-1.jpg','16-2.jpg','17-1.jpg','17-2.jpg','18.png','20.jpg','21.png','22.png','23.png','24.jpg','25-1.png','25-2.png','25-3.png','26-1.png','26-2.png','27.png','28.png']
const studentAwardFiles = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png','118.jpg','119.jpg','120.jpg','121.jpg','122.jpg','123.jpg','124.jpg','125.jpg','126.jpg','127.jpg','128.jpg']

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
.cols{display:grid;grid-template-columns:200px 42fr 58fr;gap:32px;margin:32px 0 48px}
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
.dbar .sec-h{margin-top:0;margin-bottom:32px;font-size:22px}
.dbar{padding-bottom:40px}
.award-cols{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:16px}
.award-col{min-width:0;min-height:280px}
.award-sub{font-size:16px;font-weight:600;color:var(--txt);margin-bottom:12px;font-family:var(--font-serif);letter-spacing:0.5px}

@media(max-width:1024px){
  .cols{grid-template-columns:200px 1fr;gap:24px}
  .col-mid{display:none}
  .col-rt{grid-column:auto}
}
@media(max-width:767px){
  .cols{grid-template-columns:1fr;gap:24px}
  .hm{padding:0 0 32px}
  .award-cols{grid-template-columns:1fr;gap:24px}
}
</style>
