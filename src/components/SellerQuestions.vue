<template>
  <div class="container">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Property">
            <property-info></property-info>
        </b-tab>           
        <b-tab title="Contract">
             <contract-info></contract-info>
        </b-tab>
        <b-tab title="Summary">
          <sale-summary></sale-summary>
        </b-tab>
        <b-tab title="Generate Agreement">
          <generate-agreement></generate-agreement>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import PropertyInfo from './PropertyInfo.vue'
import ContractInfo from './ContractInfo.vue'
import Summary from './Summary.vue'
import GenerateAgreement from './GenerateAgreement.vue'

export default {
  components: {
    PropertyInfo,
    ContractInfo,
    saleSummary: Summary,
    GenerateAgreement
  }
}
</script>

<style style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Passion+One&display=swap');
</style>