<template>
  <div class="container">
    <h2>Our buying platform is currently a work in progress. You can always direct your seller to our 
        <router-link to="/selling" class="selling-link">selling</router-link> page.
    </h2>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
    h2 {
        font-family: 'Passion One', cursive;
        color: $dark;
        margin-top: 20vh;
    }
    .container {
        min-height: 60vh;
        padding: 0px 40px;
    }
    .selling-link {
      color: $light-blue;
    }
</style>