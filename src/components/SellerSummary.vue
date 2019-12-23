<template>
  <div class="container">
    <h2>To sell 
      <span v-if="propertyInputted"> {{ this.$store.state.property.streetNumber}} {{ this.$store.state.property.streetName }}</span>
      <span v-else>Your property</span>, 
      here's the information a Sales Agreement will need
    </h2>
  </div>
</template>

<script>

export default {
  computed: {
    propertyInputted () {
      if ( this.$store.state.property.streetNumber !== '' && this.$store.state.property.streetName !== '') {
        return true;
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Passion+One&display=swap');

.container {
    height: 10vh;
    border: 10px solid $light;
}

</style>