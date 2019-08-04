<template>
  <div class="container">
    <p>This will be a seller progress bar</p>
  </div>
</template>

<script>

// consider making each step its own component - constructor?
import SellerProgress from './SellerProgress.vue';

export default {
  name: 'SellerProgress',
  props: {
    msg: String,
  },
  components: {
    'SellerProgress': SellerProgress
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
  height: 70px;
  margin: 20px auto;
  background: $light; // in future use gradient to tie into progress
  border: 2px solid $light-blue;
  text-align: center;
}

</style>