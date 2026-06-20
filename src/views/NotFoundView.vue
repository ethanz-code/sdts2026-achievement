<template>
  <div class="nf">
    <h1>404</h1>
    <p class="nf-sub">页面不存在</p>
    <p class="nf-hint">请检查地址是否正确，或返回首页</p>
    <router-link to="/" class="nf-btn">返回首页</router-link>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.nf {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 60vh; padding: 60px 24px; text-align: center;
}
.nf h1 {
  font-size: 72px; font-weight: 700; color: var(--red); margin: 0 0 8px;
  font-family: var(--font-serif); line-height: 1;
}
.nf-sub { font-size: 20px; color: var(--txt); margin: 0 0 8px; }
.nf-hint { font-size: 14px; color: var(--txt3); margin: 0 0 24px; }
.nf-btn {
  display: inline-block; padding: 10px 32px; font-size: 15px; color: #fff;
  background: var(--red); border-radius: 4px; text-decoration: none;
  transition: background .2s;
}
.nf-btn:hover { background: var(--red-d); color: #fff; }
</style>
