<template>
  <div>
    <SellerProgress></SellerProgress>
    <SellerSummary></SellerSummary>
    <SellerQuestions></SellerQuestions>
  </div>
</template>

<script>

import SellerProgress from '@/components/SellerProgress.vue'
import SellerSummary from '@/components/SellerSummary.vue'
import SellerQuestions from '@/components/SellerQuestions.vue'

//problems to solve:
// show user where they are in entire process - array tied to gradient?
// display list ('question') conditionally rendered or routed from last question.

export default {
  name: 'selling',
  components: {
    SellerProgress, SellerSummary, SellerQuestions
  }
}


</script>