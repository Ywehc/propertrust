<template>
  <div id="app">
    <Navigation></Navigation>
    <img class="home-banner" alt="" src="./assets/home-banner-img.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.home-banner {
  max-width: 400px;
}
</style>
