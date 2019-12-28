<template>
<div class="nav-shell">
  <router-link to="/" class="nav-brand">
    {{ brand }}
    <img src="../assets/logo-img.png">
  </router-link>
  <div class="nav-desktop" v-if="windowWidth > 490">
    <ul>
      <router-link to="/" tag="li">Home</router-link>
      <router-link to="/how-it-works" tag="li">How it Works</router-link>
    </ul>   
  </div>
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
    brand: copy.brand,
    windowWidth: screen.width
    };
  }
}

</script>

<style style lang="scss" scoped>
.nav-brand {
  text-decoration: none;
}
.nav-brand {
  color: $dark-blue;
  font-size: 30px;
  border: 6px solid $light-blue;
  border-radius: 5%;
  padding: 10px;
  width: 210px;
  img {
    width: 40px;
  }
}
.nav-shell {
  padding: 10px;
  display: flex;
  font-family: 'Passion One', cursive;
}
.nav-desktop {
  position: absolute;
  right: 20px;
  color: $dark;
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    margin: 5px;
  }
  li:hover {
    color: $light-blue;
  }
}

@media only screen and (max-width: 490px) {
  .nav-brand {
    border: none;
    margin: auto;
    margin-top: 30px;
    font-size: 42px;
    display: flex;
    justify-content: center;
    img {
      width: 50px;
      margin: 5px;
    }
  }
}

</style>
