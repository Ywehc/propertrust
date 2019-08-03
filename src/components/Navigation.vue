<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand" v-for="copy in myJson" v-bind:key="copy.id"> {{ copy[0].brandname }}</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link to="/" class="nav-item nav-link">Home
            <span class="sr-only">
              (current)
            </span>
          </router-link>
          <router-link to="/pricing" class="nav-item nav-link">Pricing</router-link>
          <router-link to="/account" class="nav-item nav-link">Account</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import json from '../copy/data.json'

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
@import url('https://fonts.googleapis.com/css?family=Passion+One&display=swap');

.navbar-brand {
  color: $dark-blue;
  font-family: 'Passion One', cursive;
  font-size: 30px;
  border: 10px solid $light-blue;
  border-radius: 5%;
  padding: 10px;
}

</style>
