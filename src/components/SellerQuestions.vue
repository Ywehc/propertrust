<template>
  <div class="container">
    <div>
      <b-tabs content-class="mt-3" v-model="tabIndex">
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
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button 
          @click="tabIndex--" 
          v-if="tabIndex !== 0"
          class="btn btn-lg btn-dark-blue">Previous
        </b-button>
        <b-button 
          @click="tabIndex++" 
          v-if="tabIndex !== 3"
          class="btn btn-lg btn-blue">Next
        </b-button>
      </b-button-group>
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
  },
  data() {
    return {
      tabIndex: 0
    }
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
.mt-3 {
  min-height: 50vh;
}
.text-center {
  margin-top: 20px;
  .btn {
    width: 120px;
    margin: 10px;
  }
}
</style>