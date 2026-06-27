<template>
  <header class="hdr">
    <div class="bnr">
      <div class="bnr-bg-1"></div>
      <div class="bnr-bg-3"></div>
      <div class="bnr-overlay"></div>
      <div class="bnr-bottom-glow"></div>
      <div class="bnr-flare"></div>
      <div class="container bnr-inner">
        <div class="bnr-body">
          <div class="bnr-brand">
            <img
              class="bnr-logo"
              src="/images/school-logo.webp"
              alt="山东旅游职业学院"
            />
          </div>
          <div class="bnr-txt">
            <h1>国家教学成果奖申报</h1>
            <h2>
              红智双融·场景贯通·知行转化：<br />旅游类专业大思政实践育人模式创新与实践
            </h2>
          </div>
        </div>
      </div>
      <div class="bnr-gold-line"></div>
    </div>

    <nav class="nav">
      <div class="container nav-inner">
        <button class="nav-btn" :class="{ on: navOn }" @click="navOn = !navOn">
          <span /><span /><span />
        </button>
        <div class="nav-ls" :class="{ on: navOn }">
          <button class="nav-close" @click="navOn = false">
            <span class="nav-close-bar nav-close-bar1"></span>
            <span class="nav-close-bar nav-close-bar2"></span>
          </button>
          <div class="nav-ls-scroll">
          <div v-for="m in menus" :key="m.k" class="nav-it-wrap">
            <router-link
              :to="m.q ? { path: m.p, query: m.q } : m.p"
              class="nav-it"
              :class="{ act: isActive(m) }"
              @click="navOn = false"
              >{{ m.l }}</router-link
            >
            <div v-if="m.children && m.children.length" class="nav-sub">
              <router-link
                v-for="c in m.children"
                :key="c.k"
                :to="c.q ? { path: c.p, query: c.q } : c.p"
                class="nav-sub-it"
                :class="{ act: isSubActive(c.p, c.q) }"
                @click="navOn = false"
                >{{ c.l }}</router-link
              >
            </div>
          </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { topNavItems } from "@/data/content.js";

const route = useRoute();
const navOn = ref(false);

watch(navOn, (on) => {
  document.body.style.overflow = on ? "hidden" : "";
});

const hasIndex = new Set([
  "summary",
  "effect",
  "media",
  "international",
  "evidence",
]);

const menus = topNavItems.map((m) => {
  const children = m.children?.map((c) => {
    const [path, qs] = c.path.split("?");
    const query = qs ? Object.fromEntries(new URLSearchParams(qs)) : undefined;
    return { k: c.key, l: c.label, p: path, q: query };
  });
  const jumpToChild = children?.length && !hasIndex.has(m.key);
  return {
    k: m.key,
    l: m.label,
    p: jumpToChild ? children[0].p : m.path,
    q: jumpToChild ? children[0].q : undefined,
    children,
  };
});

const isActive = (m) => {
  if (route.path === m.p) return true;
  if (m.children) return m.children.some((c) => route.path === c.p);
  return false;
};

const isSubActive = (p, q) => {
  if (route.path !== p) return false;
  if (!q) return true;
  return Object.entries(q).every(([k, v]) => route.query[k] === v);
};
</script>

<style lang="scss" scoped>
.bnr {
  position: relative;
  height: 220px;
  overflow: hidden;
}
.bnr-bg-1 {
  position: absolute;
  left: 0; top: 0; bottom: 0; width: 90%;
  background: url("/images/banner-blend-left.webp") center/cover;
  -webkit-mask-image: linear-gradient(to right, #000 55%, transparent 100%);
  mask-image: linear-gradient(to right, #000 55%, transparent 100%);
}
.bnr-bg-3 {
  position: absolute;
  right: -20%; top: 0; bottom: 0; width: 45%;
  background: url("/images/banner-blend-right.webp") left center/cover;
  -webkit-mask-image: linear-gradient(to left, #000 40%, transparent 100%);
  mask-image: linear-gradient(to left, #000 40%, transparent 100%);
}
/* 暗红色相叠加（左侧留出明亮区给 logo，右侧覆盖文字区） */
/* 暗红色相叠加（左侧留出明亮区给 logo，右侧覆盖文字区） */
.bnr-overlay {
  position: absolute; inset: 0; z-index: 2;
  background:
    linear-gradient(90deg,
      rgba(80,10,10,0) 0%,
      rgba(80,10,10,.05) 18%,
      rgba(80,10,10,.35) 38%,
      rgba(80,10,10,.55) 60%,
      rgba(80,10,10,.55) 100%
    ),
    radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,.28) 100%);
}
/* 金色光束 */
.bnr-flare {
  position: absolute;
  left: 0; right: 0;
  top: 50%;
  height: 60px;
  z-index: 3;
  pointer-events: none;
  background: linear-gradient(90deg, transparent 0%, rgba(255,215,140,.0) 15%, rgba(255,220,150,.45) 50%, rgba(255,215,140,.0) 85%, transparent 100%);
  filter: blur(8px);
  transform: translateY(-50%);
}
/* 底部暖光渐变 */
.bnr-bottom-glow {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 60%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 0%, rgba(180,20,20,.08) 50%, rgba(120,10,10,.25) 100%);
}
.bnr-inner {
  position: relative; z-index: 4; height: 100%;
}
.bnr-body {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.bnr-brand {
  position: absolute;
  left: 32px;
  top: 30%;
  transform: translateY(-50%);
  flex-shrink: 0;
}
.bnr-logo {
  width: clamp(90px, 12vw, 180px); height: auto; object-fit: contain;
}
.bnr-txt {
  text-align: center;
  max-width: 80%;
  h1 {
    font-size: clamp(13px, 2vw, 28px); font-weight: 700; line-height: 1.4; letter-spacing: 6px;
    text-shadow: 0 2px 8px rgba(0,0,0,.4);
    font-family: var(--font-serif); color: #fff;
  }
  h2 {
    font-size: clamp(18px, 3vw, 42px); color: #f7e5b0; font-weight: 400; line-height: 1.5;
    letter-spacing: 3px; text-shadow: 0 2px 6px rgba(0,0,0,.6);
    font-family: "Ma Shan Zheng", "STXingkai", "KaiTi", "楷体", cursive;
    margin-top: 4px;
  }
}
.bnr-gold-line{
  position:absolute; bottom:0; left:0; right:0; z-index:5; height:4px;
  background:linear-gradient(90deg,transparent 5%,var(--gold) 20%,var(--gold-d) 50%,var(--gold) 80%,transparent 95%)
}

.nav {
  background: var(--red);
  position: sticky; top: 0; z-index: 100;
}
.nav-btn {
  display: none;
  background: none;
  border: 0;
  padding: 14px 16px;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #fff;
    transition: 0.2s;
  }
  &.on span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  &.on span:nth-child(2) {
    opacity: 0;
  }
  &.on span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
}
.nav-ls {
  display: flex;
  width: 100%;
}
.nav-close {
  display: none;
}
.nav-ls-scroll {
  display: flex;
  flex: 1;
}
.nav-it-wrap {
  flex: 1;
  position: relative;
  &:hover .nav-sub {
    max-height: 800px;
    overflow-y: auto;
    visibility: visible;
    opacity: 1;
  }
}
.nav-it {
  display: block;
  height: 48px;
  line-height: 48px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  font-family: var(--font-sans);
  position: relative;
  overflow: hidden;
  &::after{
    content:'';position:absolute;bottom:0;left:50%;right:50%;
    height:3px;background:var(--gold);
    transition:all .35s cubic-bezier(.4,0,.2,1);
    border-radius:2px 2px 0 0
  }
  &:hover {
    background: rgba(255,255,255,.06);
    color: var(--gold);
    text-decoration: none;
  }
  &:hover::after{left:15%;right:15%}
  &.act {
    color: var(--gold);
    font-weight: 700;
    background: rgba(255,255,255,.04);
  }
  &.act::after{left:8%;right:8%}
}
.nav-sub {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100%;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
  max-height: 0;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    opacity 0.25s ease,
    visibility 0.4s;
  z-index: 200;
  border-radius: 0 0 4px 4px;
}
.nav-sub-it {
  display: block;
  padding: 0 16px;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: var(--txt);
  font-family: var(--font-sans);
  text-align: left;
  white-space: nowrap;
  transition: all 0.18s;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  &:last-child {
    border-bottom: none;
  }
  &:hover,
  &.act {
    background: var(--cream);
    color: var(--red-d);
    font-weight: 600;
    text-decoration: none;
  }
  &::before{
    content:'';position:absolute;left:0;top:6px;bottom:6px;width:3px;
    background:var(--gold);border-radius:0 2px 2px 0;
    transform:scaleY(0);transition:transform .2s
  }
  &:hover::before,
  &.act::before{transform:scaleY(1)}
}

@keyframes menuItemIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .nav { z-index: 300; }
  .bnr-brand {
    left: 20px;
  }
  .bnr-txt {
    max-width: 85%;
  }

  .nav-btn {
    display: flex;
  }
  .nav-ls {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 200;
    background: var(--red);
    overflow: hidden;
    &.on { display: flex; flex-direction: column; }
  }
  .nav-close {
    display: flex; align-items: center; justify-content: center;
    width: 44px; height: 44px;
    background: none; border: 0; cursor: pointer;
    padding: 10px; margin: 4px 0 0 4px;
  }
  .nav-close-bar {
    display: block;
    width: 20px; height: 2px; background: #fff;
    position: absolute;
    transition: 0.2s;
  }
  .nav-close-bar1 { transform: rotate(45deg); }
  .nav-close-bar2 { transform: rotate(-45deg); }
  .nav-ls-scroll {
    display: block;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .nav-it-wrap {
    flex: none;
    border-right: 0 !important;
    border-left: 0 !important;
    border-bottom: 1px solid var(--red-d);
  }
  .nav-it {
    flex: none;
    height: 42px;
    line-height: 42px;
    text-align: left;
    padding: 0 20px;
    font-size: 14px;
  }
  .nav-sub {
    position: static;
    max-height: none;
    visibility: visible;
    opacity: 1;
    box-shadow: none;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.12);
  }
  .nav-sub-it {
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-left: 36px;
    font-size: 13px;
    &:hover {
      background: var(--gold-ll);
      color: var(--red-d);
    }
  }

  .nav-ls.on .nav-close {
    animation: menuItemIn .25s ease both;
  }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap {
    animation: menuItemIn .3s ease both;
  }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap:nth-child(1) { animation-delay: .04s; }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap:nth-child(2) { animation-delay: .08s; }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap:nth-child(3) { animation-delay: .12s; }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap:nth-child(4) { animation-delay: .16s; }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap:nth-child(5) { animation-delay: .20s; }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap:nth-child(6) { animation-delay: .24s; }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap:nth-child(7) { animation-delay: .28s; }
  .nav-ls.on .nav-ls-scroll .nav-it-wrap:nth-child(8) { animation-delay: .32s; }
}

@media (max-width: 767px) {
  .bnr {
    height: auto !important;
    padding: 28px 14px;
    text-align: center;
  }
  .bnr-overlay {
    background:
      linear-gradient(90deg, rgba(80,10,10,.55) 0%, rgba(40,5,5,.35) 50%, rgba(80,10,10,.55) 100%),
      radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,.28) 100%);
  }
  .bnr-body {
    flex-direction: column;
    gap: 12px;
  }
  .bnr-brand {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
  }
  .bnr-txt {
    max-width: 100%;
  }
}
@media (max-width: 480px) {
  .bnr {
    padding: 20px 10px;
  }
  .bnr-txt {
    h1 { letter-spacing: 4px; }
  }
}
</style>
