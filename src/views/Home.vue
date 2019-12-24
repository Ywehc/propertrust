<template>
  <div class="home-container" >
    <home-desktop v-if="windowWidth > 490"></home-desktop>
    <home-mobile v-else></home-mobile>  
  </div>
</template>

<script>

// import copy from '../copy/copy.json'
import HomeDesktop from '../components/HomeDesktop.vue'
import HomeMobile from '../components/HomeMobile.vue'

export default {
  name: 'home',
  components: {
    HomeDesktop,
    HomeMobile
  },
  data: function() {
    return {
      windowWidth: screen.width
    };
  }
}

</script>


