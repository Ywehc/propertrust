<template>
  <div class="container">
    <p>Seller Summary</p>
  </div>
</template>

<script>

// consider making each step its own component - constructor?
import SellerSummary from './SellerSummary.vue';

export default {
  name: 'SellerSummary',
  props: {
    msg: String,
  },
  components: {
    'SellerSummary': SellerSummary
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

.container {
    height: 10vh;
    border: 10px solid $light;
}

</style>