<template>
  <div class="container">
      <div class="banner-blue-houses">
        <h2>{{ heading }}</h2>
      </div> 
      <buttons-desktop></buttons-desktop>
      <p class="description">{{brand}} {{description}}</p>
      <p class="description">{{lawyer}}</p>    
      
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

h2 {
  font-size: 24px;
  text-align: center;
  color: white;
  margin: auto;
  padding: 50px;
}
p {
  font-family: 'Varela Round', sans-serif;
  font-size: 18px;
  margin: 20px;
}
.banner-blue-houses {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/blue-houses.jpg');
  background-size: cover;
  background-position-y: 10%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 5px;
}

@media only screen and (min-width: 1200px) {
  h2 {
    font-size: 230%;
  }
}

</style>