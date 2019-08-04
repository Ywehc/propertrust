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

//problems to solve:
// show user where they are in entire process - array tied to gradient?
// display list ('question') conditionally rendered or routed from last question.


export default {
  name: 'selling',
  components: {
    SellerProgress, SellerSummary
  }
}
</script>