<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#" v-for="copy in myJson" v-bind:key="copy.id"> {{ copy[0].brandname }}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Account</a>
          <a class="nav-item nav-link" href="#">Pricing</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import json from '../copy/data.json'
import '../style/style-global.scss'

export default {
  name: 'Navigation',
  props: {
    msg: String,
  },
  data(){
    return{
      myJson: json
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
$light: #d9dcd6;
$dark: #16425b;
$light-blue: #81c3d7;
$mid-blue: #3a7ca5;
$dark-blue: #2f6690;

.navbar-brand {
  color: $dark-blue;
  font-weight: bold;
  font-size: 30px;
  border: 10px solid $light-blue;
  border-radius: 5%;
  padding: 10px;
}

</style>
