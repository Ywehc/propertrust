<template>
  <div class="home">
    <div class="home-container">
      <div class="container">
        <div v-bind:id="home-header">
          {{copy.home.header}}
        </div>
        <div class="row buying-selling">
          <div class="col-6 buying">
            <div class="buyer-button">
              <router-link to="/B1-purchase-type"></router-link>
              <h2>I am <strong>buying</strong></h2>
              <p>a house, apartment or condo.</p>
            </div>
          </div>           
          <div class="col-6 selling">
            <div class="seller-button">
              <h2>I am <strong>selling</strong></h2>
              <p>a house, apartment or condo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import json from '../copy/data.json'
import copy from '../copy/copy.json'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    
  }
}
console.log(copy.home.header);
</script>

<style lang="scss" scoped>

h2 {
  background: white;
  margin: 0;
  padding: 6px 6px 0px 6px;
  font-family: 'Varela Round', sans-serif;
  font-size: 20px;
  border-top: 5px solid $dark;
  border-left: 5px solid $dark;
  border-right: 5px solid $dark;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
}
.home-container {
  padding: 50px;
}
.buyer-button {
  background-image: linear-gradient(to right, #16425b, #2f6690);
}
.buyer-button, .seller-button {
  max-width: 300px;
  --diameter: 80px;
  padding: var(--diameter);
  border: 2px solid #16425b;
  border-radius: 50%;
  margin: auto;
  text-align: center;
}
.buyer-button p, .seller-button p {
  background: white;
  margin: 0;
  padding: 6px;
  font-family: 'Varela Round', sans-serif;
  font-size: 14px;
  border-bottom: 5px solid $dark;
  border-left: 5px solid $dark;
  border-right: 5px solid $dark;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
}
.seller-button {
  background-image: linear-gradient(to right, #3a7ca5, #81c3d7 );
}
@media only screen and (max-width: 992px) {
  .buyer-button, .seller-button {
    max-width: 300px;
    --diameter: 75px;
    padding: var(--diameter);
  }
}
@media only screen and (max-width: 768px) {
  .buyer-button, .seller-button {
    max-width: 250px;
    --diameter: 50px;
    padding: var(--diameter);
  }
  h2, p {
    font-size: 95%;
  }
}
@media only screen and (max-width: 576px) {
  .buyer-button, .seller-button {
    max-width: 220px;
    padding: 35px;
  }
  h2 {
    padding: 5px;
  }
}
@media only screen and (max-width: 490px) {
  h2 {
    background: transparent;
  }
  .buyer-button, .seller-button {
    max-width: 220px;
    padding: 35px;
  }
  .buyer-button p, .seller-button p {
    background: transparent;
  }
  .home-container {
    padding: 15px;
  }
}

</style>


