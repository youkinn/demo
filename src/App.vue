<style scoped>
</style>
<template>
  <section>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </section>
</template>
<script>
import '../static/css/common.css';
import store from './vuex/store';
export default {
  store
};
</script>