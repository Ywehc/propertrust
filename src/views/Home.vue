<template>
  <div class="home">
    <div class="home-container">
      <div class="container">
        <div class="row buying-selling">
          <div class="col-6 buying">
            <div class="buyer-button">
              <div class="button-content">
                <router-link to="/B1-purchase-type">
                  <h2>I am <strong>buying</strong></h2>
                  <p>a house, apartment or condo.</p>
                </router-link>
              </div>
            </div>
          </div>           
          <div class="col-6 selling">
            <div class="seller-button">
              <div class="button-content">
                <router-link to="/selling">
                  <h2>I am <strong>selling</strong></h2>
                  <p>a house, apartment or condo.</p>
                </router-link>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');

h2 {
  padding: 6px 6px 0px 6px;
  font-size: 20px;
}
.button-content {
  background: white;
  margin: 0;
  font-family: 'Varela Round', sans-serif;
  border: 5px solid $dark;
  cursor: pointer;
  border-radius: 10%;
}
.button-content:hover  {
  background: $light;
}
.buyer-button {
  background-image: linear-gradient(to right, #16425b, #2f6690);
}
.buyer-button a, .seller-button a {
  color: $dark;
  text-decoration: none;
}
.buyer-button, .seller-button {
  max-width: 360px;
  --diameter: 100px;
  padding: var(--diameter);
  border: 2px solid #16425b;
  border-radius: 50%;
  margin: auto;
  text-align: center;
}
.buyer-button p, .seller-button p {
  padding: 6px;
  font-size: 14px;
}
.home-container {
  padding: 50px;
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


