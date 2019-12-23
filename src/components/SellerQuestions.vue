<template>
  <div class="container">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Seller" active>
          <seller-names></seller-names>
        </b-tab>
        <b-tab title="Property">
            <property-info></property-info>
        </b-tab>           
        <b-tab title="Contract">
             <contract-info></contract-info>
        </b-tab>
        <b-tab title="Summary">
          <sale-summary></sale-summary>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import SellerNames from './SellerNames.vue'
import PropertyInfo from './PropertyInfo.vue'
import ContractInfo from './ContractInfo.vue'
import Summary from './Summary.vue'

export default {
  components: {
    SellerNames,
    PropertyInfo,
    ContractInfo,
    saleSummary: Summary
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Passion+One&display=swap');


</style>