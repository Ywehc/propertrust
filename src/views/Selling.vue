<template>
  <div>
    <SellerSummary></SellerSummary>
    <SellerQuestions></SellerQuestions>
  </div>
</template>

<script>

import SellerSummary from '@/components/SellerSummary.vue'
import SellerQuestions from '@/components/SellerQuestions.vue'

export default {
  name: 'selling',
  components: {
    SellerSummary, SellerQuestions
  }
}
</script>