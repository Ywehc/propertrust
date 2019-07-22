<template>
  <div class="home-container">
      <h1>Testing Home</h1>
    <!-- <h1>{{ msg }}</h1> -->
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

  .home-container {
    background: $light;
    padding-bottom: 80vh;
  }
</style>