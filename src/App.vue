<template>
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
</template>

<script setup>
import TopBanner from "@/components/TopBanner.vue";
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
  font-family: "Noto Sans SC", sans-serif;
  line-height: 2.2;
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
</style>
