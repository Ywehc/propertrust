<template>
  <div>
    <p>Agreement Date: date-picker</p>
      <hr>
      <hr>
      <div class="mt-2">Purchase Price: {{ purchasePrice }}</div>
      <b-form-input 
        type="text" 
        v-model="purchasePrice" 
        placeholder="Purchase Price in Dollars (CDN$)">
      </b-form-input>
      <div class="mt-2">Deposit Amount: {{ depositAmount }}</div>
      <b-form-input 
        type="text" 
        v-model="depositAmount" 
        placeholder="Deposit in Dollars (CDN$)">
      </b-form-input>
      <div class="mt-2">Deposit Holder: {{ depositHolder }}</div>
      <b-form-input 
        type="text" 
        v-model="depositHolder" 
        placeholder="Name of deposit holder">
      </b-form-input>
      <hr>
      <p>Irrevocability Date picker</p>
      <hr>
      <div class="mt-2">Completion Date: {{ completionDate }}</div>
      <b-form-input 
        type="text" 
        v-model="completionDate" 
        placeholder="Completion Date">
      </b-form-input>
      <hr>
      <p>If HST applies, will it be included in or in addition to the Purchase Price?</p>
      <hr>
      <hr>
      <p>Title Search/Requisition Date Picker</p>
      <hr>
  </div>
</template>

<script>

// import copy from '../copy/copy.json'

export default {
    computed: {
      purchasePrice: {
        get() {
          return this.$store.getters.purchasePrice;
        },
        set(purchasePrice) {
          this.$store.dispatch('updatePurchasePrice', purchasePrice);
        }
      },
      depositAmount: {
        get() {
          return this.$store.getters.depositAmount;
        },
        set(depositAmount) {
          this.$store.dispatch('updateDepositAmount', depositAmount);
        }
      },
      depositHolder: {
        get() {
          return this.$store.getters.depositHolder;
        },
        set(depositHolder) {
          this.$store.dispatch('updateDepositHolder', depositHolder);
        }
      },
      completionDate: {
        get() {
          return this.$store.getters.completionDate;
        },
        set(completionDate) {
          this.$store.dispatch('updateCompletionDate', completionDate);
        }
      }
    },
    methods: {
      updateDepositAmount(event) {
        this.$store.dispatch('updateDepositAmount', depositAmount);
      },
      updateDepositHolder(event) {
        this.$store.dispatch('updateDepositHolder', depositHolder);
      },
      updateCompletionDate(event) {
        this.$store.dispatch('updateCompletionDate', completionDate);
      },
    }
}

</script>

<style style lang="scss" scoped>


</style>