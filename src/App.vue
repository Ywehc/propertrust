<template>
  <div id="app">
    <Navigation></Navigation>
    <Home></Home>
    <!-- <img class="home-banner" alt="" src="./assets/home-banner-img.jpg"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
import Home from './pages/Home.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navigation,
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.home-banner {
  max-width: 400px;
}
</style>
