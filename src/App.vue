<template>
  <div class="top-bar" :class="{ 'top-bar-show': showTopBar }">
    <div class="container top-bar-in">
      <span class="top-bar-icon">📢</span>
      <span class="top-bar-txt">欢迎访问山东旅游职业学院国家教学成果奖申报展示网站，推荐使用谷歌浏览器、微软Edge浏览器或360极速模式</span>
      <button class="top-bar-close" @click="showTopBar = false">✕</button>
    </div>
  </div>
  <TopBanner />
  <main class="mn anim-in">
    <div class="container">
      <router-view v-slot="{ Component }"
        ><transition name="fade" mode="out-in"
          ><component :is="Component" /></transition
      ></router-view>
    </div>
  </main>
  <footer class="ft">
    <div class="container">
      <p class="ft-links">
        友情链接：<a href="https://www.moe.gov.cn" target="_blank">教育部</a
        >　<a href="https://edu.shandong.gov.cn" target="_blank">山东省教育厅</a
        >　<a href="https://whhly.shandong.gov.cn" target="_blank"
          >山东省文化和旅游厅</a
        >　<a href="https://www.sdts.net.cn" target="_blank">山东旅游职业学院</a
        >　<a href="https://www.zglyjy.cn" target="_blank">中国旅游教育网</a>
      </p>
      <p class="ft-info">Copyright© 2013～2026 山东旅游职业学院版权所有</p>
    </div>
  </footer>

  <button class="btop" :class="{ 'btop-on': showBtop }" @click="toTop" aria-label="返回顶部">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import TopBanner from "@/components/TopBanner.vue";

const showTopBar = ref(false);
const showBtop = ref(false);

function onScroll() {
  showBtop.value = window.scrollY > 400;
}
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
onMounted(() => {
  setTimeout(() => { showTopBar.value = true; }, 2200);
  window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style lang="scss" scoped>
.mn {
  background: var(--bg);
  padding: 0;
  min-height: 500px;
}
.ft {
  background: var(--red-d);
  color: rgba(255, 255, 255, 0.85);
  padding: 28px 0;
  font-size: 13px;
  text-align: center;
  font-family: var(--font-sans);
  line-height: 2.2;
  position: relative;
}
.ft::before{
  content:'';position:absolute;top:0;left:0;right:0;height:4px;
  background:linear-gradient(90deg,transparent 5%,var(--gold) 20%,var(--gold-d) 50%,var(--gold) 80%,transparent 95%)
}
.ft a {
  color: #fff;
  margin: 0 4px;
  transition: color 0.2s;
  &:hover {
    color: var(--gold);
  }
}
.ft .sep {
  color: rgba(255, 255, 255, 0.4);
  margin: 0 8px;
}
.ft-links {
  color: var(--gold);
  font-weight: 500;
}
.ft-info {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}
@media(max-width:767px){
  .ft{padding:20px 16px;font-size:12px;line-height:2}
  .ft-links{font-size:12px}
  .ft-info{font-size:11px}
}

/* 顶部通知条 - 初始隐藏，Hero结束后显示 */
.top-bar{background:linear-gradient(90deg,var(--red-d) 0%,#a01010 50%,var(--red-d) 100%);color:rgba(255,255,255,.9);font-size:13px;overflow:hidden;transition:all .5s cubic-bezier(0.25,1,0.5,1);position:relative;z-index:200;height:0;opacity:0}
.top-bar::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 10%,var(--gold) 50%,transparent 90%);opacity:.5}
.top-bar-show{height:40px;opacity:1}
.top-bar-in{display:flex;align-items:center;gap:8px;height:100%}
.top-bar-icon{font-size:15px;flex-shrink:0;opacity:.8;display:inline-block;animation:barPulse 2s ease-in-out infinite}
@keyframes barPulse{0%,100%{opacity:.8}50%{opacity:1;transform:scale(1.1)}}
.top-bar-txt{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:.5px}
.top-bar-close{background:none;border:0;color:rgba(255,255,255,.6);font-size:16px;cursor:pointer;padding:0 6px;transition:color .2s;flex-shrink:0;line-height:1}
.top-bar-close:hover{color:#fff}

/* 返回顶部 */
.btop{position:fixed;bottom:40px;right:32px;z-index:999;width:44px;height:44px;border-radius:50%;border:2px solid var(--gold);background:#fff;color:var(--red);cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transform:translateY(16px);transition:all .35s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 12px rgba(139,0,0,.12)}
.btop:hover{background:var(--red);color:#fff;border-color:var(--red);transform:translateY(-2px);box-shadow:0 4px 16px rgba(139,0,0,.2)}
.btop-on{opacity:1;visibility:visible;transform:translateY(0)}
@media(max-width:767px){.btop{bottom:24px;right:16px;width:38px;height:38px}}
</style>
