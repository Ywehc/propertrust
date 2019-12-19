<template>
  <div>
    <!-- <SellerProgress></SellerProgress> -->
    <SellerSummary></SellerSummary>
    <SellerQuestions></SellerQuestions>
  </div>
</template>

<script>

// import SellerProgress from '@/components/SellerProgress.vue'
import SellerSummary from '@/components/SellerSummary.vue'
import SellerQuestions from '@/components/SellerQuestions.vue'

export default {
  name: 'selling',
  components: {
    SellerSummary, SellerQuestions
  }
}
</script>