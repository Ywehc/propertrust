<template>
  <div class="container">
    <div>
      <b-tabs content-class="mt-3 ">
        <b-tab title="Property" :title-item-class="'tab-container'">
            <property-info></property-info>
        </b-tab>           
        <b-tab title="Contract" :title-item-class="'tab-container'">
             <contract-info></contract-info>
        </b-tab>
        <b-tab title="Summary" :title-item-class="'tab-container'">
          <sale-summary></sale-summary>
        </b-tab>
        <b-tab title="Generate Agreement" :title-item-class="'tab-container'">
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

<style style lang="scss" >
.container {
  padding: 16px 30px;
  color: $dark-blue!important;
}
.tab-container:active a {
  background-color: $light-blue!important;
}
.tab-container a{
  color: $dark-blue!important;
  font-weight: bold;
}
</style>