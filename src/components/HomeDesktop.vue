<template>
  <div class="container">
      <h1>
        {{ heading }}
      </h1>
      <div class="row">
        <div class="col-4 selling">
          <div class="seller-button">
            <div class="button-content">
              <router-link to="/selling">
                <h2>I am <strong>selling</strong></h2>
                <p>a house, apartment or condo.</p>
              </router-link>
            </div>             
          </div>
        </div>
        <div class="col-4 buying">
          <div class="buyer-button">
            <div class="button-content">
              <router-link to="/buying">
                <h2>I am <strong>buying</strong></h2>
                <p>a house, apartment or condo.</p>
              </router-link>
            </div>
          </div>
        </div>           
        <div class="col-4 how-it-works">
          <div class="how-it-works-button">
            <div class="button-content">
                <h2>How it Works</h2>
                <br>
            </div>
          </div>
        </div> 
      </div>
    <h3 class="description">{{brand}} {{description}}</h3>
    <h3 class="description">{{lawyer}}</h3>
    </div>
</template>

<script>
import copy from '../copy/copy.json'

export default {
    data: function() {
        return {
            heading: copy.home.header,
            brand: copy.brand,
            description: copy.home.description,
            lawyer: copy.home.lawyer
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
.container {
  padding-bottom: 100px;
}
h1 {
  font-size: 30px;
  text-align: center;
  color: $dark;
  margin: 100px auto;
}
h2 {
  padding: 6px 6px 0px 6px;
  font-size: 20px;
}
h3 {
  margin-top: 50px;
}
.button-content {
  background: white;
  margin: 0;
  font-family: 'Varela Round', sans-serif;
  border: 5px solid $dark;
  cursor: pointer;
  border-radius: 10%;
  min-height: 140px;
}
.button-content:hover  {
  background: $light;
}
.buyer-button {
  background-image: linear-gradient(to right, #3a7ca5, #81c3d7 );
  
}
.seller-button {
  background-image: linear-gradient(to right, #16425b, #2f6690);
}
.how-it-works-button {
  background-image: linear-gradient(to right, #81c3d7, white);
}
.buyer-button a, .seller-button a {
  color: $dark;
  text-decoration: none;
}
.buyer-button, .seller-button, .how-it-works-button {
  width: 300px;
  --diameter: 80px;
  padding: var(--diameter);
  border: 2px solid #16425b;
  border-radius: 50%;
  margin: auto;
  text-align: center;
}
.buyer-button p, .seller-button p, .how-it-works-button p{
  padding: 6px;
  font-size: 14px;
}
.how-it-works-button h2 {
  margin-top: 30px;
}
@media only screen and (min-width: 1200px) {
  h1 {
    font-size: 230%;
  }
}

</style>