<template>
  <div class="container">
    <p><strong>Seller Names:</strong> {{ this.$store.state.seller.legalName }}</p>
    <p>
      <strong>Property:</strong> 
      {{ this.$store.state.property.streetNumber}}
      {{ this.$store.state.property.streetName }},
      {{ this.$store.state.property.city }},
      {{ this.$store.state.property.province }},
      {{ this.$store.state.property.postal}}
    </p>
  </div>
</template>

<script>

export default {

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