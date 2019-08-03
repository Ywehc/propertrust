<template>
  <div>
    <SellerProgress></SellerProgress>
    <SellerSummary></SellerSummary>
    <h1>Selling</h1>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

import SellerProgress from '@/components/SellerProgress.vue'
import SellerSummary from '@/components/SellerSummary.vue'

// add variable for questions remaining?

export default {
  name: 'selling',
  components: {
    SellerProgress, SellerSummary
  }
}
</script>