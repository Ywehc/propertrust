<template>
  <div>
    <home-desktop v-if="windowWidth > 768"></home-desktop>
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


