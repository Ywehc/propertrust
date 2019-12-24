<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand"> 
        {{ message }}<img class="header-img" src="../assets/logo-img.png">
      </router-link>
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

import copy from '../copy/copy.json'

export default {
  name: 'Navigation',
  props: {
    msg: String,
  },
  data: function() {
    return {
    message: copy.brand
    };
  }
}

</script>

<style style lang="scss" scoped>

.header-img {
  max-width: 40px;
}
.navbar-brand {
  color: $dark-blue;
  font-family: 'Passion One', cursive;
  font-size: 30px;
  border: 6px solid $light-blue;
  border-radius: 5%;
  padding: 10px;
}
.collapse a {
  color: $light-blue;
}
.collapse a:hover {
  color: $dark;
  font-weight: bold;
}

@media only screen and (max-width: 490px) {
  
}

</style>
