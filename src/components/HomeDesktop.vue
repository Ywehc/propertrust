<template>
  <div class="container">
      <div class="banner-blue-houses">
        <h1>{{ heading }}</h1>
      </div> 
      <buttons-desktop></buttons-desktop>
      <h3 class="description">{{brand}} {{description}}</h3>
      <h3 class="description">{{lawyer}}</h3>    
      
    </div>
</template>

<script>
import copy from '../copy/copy.json'
import ButtonsDesktop from './ButtonsDesktop.vue'

export default {
    data: function() {
        return {
            heading: copy.home.header,
            brand: copy.brand,
            description: copy.home.description,
            lawyer: copy.home.lawyer
        }
    },
    components: {
      ButtonsDesktop
    }
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 30px;
  text-align: center;
  color: white;
  width: 80%;
  margin: auto;
  padding-top: 120px;
}
h3 {
  margin: 50px auto;
  text-align: center;
  font-family: 'Varela Round', sans-serif;
}
.banner-blue-houses {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/blue-houses.jpg');
  background-size: cover;
  background-position-y: 20%;
  min-height: 25vh;
  margin-bottom: 30px;
}

@media only screen and (min-width: 1200px) {
  h1 {
    font-size: 230%;
  }
}

</style>