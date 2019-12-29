<template>
  <div class="container">
    <h2>Complete the Property and Contract details below to generate a sales agreement for 
      <span v-if="propertyInputted"> {{ this.$store.state.property.streetNumber}} {{ this.$store.state.property.streetName }}</span>
      <span v-else>your property</span>.
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
  color: $dark-blue;
  font-family: 'Passion One', cursive;
  padding: 16px 30px;
}
.container h2 {
  font-size: 2.2em;
  padding: 20px;
}
@media only screen and (max-width: 490px) {
  .container h2 {
    font-size: 1.5em;  
  }
}

</style>