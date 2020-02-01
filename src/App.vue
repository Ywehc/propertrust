<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view class="main"></router-view>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navigation, Footer
  },
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1 0 auto;
  min-height: 750px;
  margin-top: 50px;
}
.footer {
  flex-shrink: 0;
}
@media screen and (max-width: 768px) {
  .main {
    min-height: 440px;
    margin-top: 20px;
  }
}
</style>
