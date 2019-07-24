<template>
  <div class="home-container">
      <div class="container">
        <div class="row buying-selling">
          <div class="col-6 buying">
            <div class="buyer-button">
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
</template>

<script>
import '../style/style-global.scss';

export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$light: #d9dcd6;
$dark: #16425b;
$light-blue: #81c3d7;
$mid-blue: #3a7ca5;
$dark-blue: #2f6690;

h2 {
  background: white;
  margin: 0;
  padding: 10px;
}
.home-container {
  background: $light;
  padding: 50px;
}
.buyer-button, .seller-button {
  max-width: 400px;
  --diameter: 100px;
  padding: var(--diameter);
  border: 2px solid #16425b;
  border-radius: 50%;
  margin: auto;
  text-align: center;
}
.buyer-button p, .seller-button p {
  background: white;
  margin: 0;
  padding: 10px;
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