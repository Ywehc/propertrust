<template>
  <div class="container">
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
              <router-link to="/how-it-works">
                <h2>How it Works</h2>
                <br>
              </router-link>
            </div>
          </div>
        </div> 
      </div>
  </div>
</template>

<script>

export default {

}

</script>

<style style lang="scss" scoped>
.container {
  padding-top: 50px;
  padding-bottom: 50px;
}
h2 {
  padding: 6px 6px 0px 6px;
  font-size: 20px;
  margin-bottom: 0;
}

.button-content {
  background: white;
  font-family: 'Varela Round', sans-serif;
  cursor: pointer;
  width: 175px;
  --diameter: 14px;
  padding: var(--diameter);
  border: 5px solid #16425b;
  border-radius: 50%;
  margin: auto;
  text-align: center;
}
.button-content:hover  {
  background: $dark;
  border: 5px solid $light-blue;
  h2, p {
    color: $light-blue;
  }
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
.buyer-button a, .seller-button a, .how-it-works-button a {
  color: $dark;
  text-decoration: none;
}
.buyer-button, .seller-button, .how-it-works-button {
  width: 230px;
  --diameter: 20px;
  padding: var(--diameter);
  border: 2px solid #16425b;
  border-radius: 50%;
  margin: auto;
  text-align: center;
}
.buyer-button p, .seller-button p, .how-it-works-button p{
  padding: 0px 6px;
  font-size: 14px;
}
.how-it-works-button h2 {
  margin-top: 30px;
  margin-bottom: 14px;
}
.buyer-button h2, .seller-button h2 {
  margin-top: 10px;
}

</style>