<template>
  <div>
    <h4 class="tab-content-heading">Contract Information</h4>
    <p class="mt-4">Seller Name:</p>
    <b-form-input 
        type="text"
        v-model="sellerName"
        placeholder="Legal Name of Seller">
    </b-form-input>
    <p class="mt-4">Agreement Date:</p>
    <vc-date-picker v-model="contractAgreementDate"/>
    <div class="mt-4">Purchase Price:</div>
    <b-form-input 
      type="number" 
      v-model="purchasePrice" 
      placeholder="Purchase Price in Dollars (CDN$)">
    </b-form-input>
    <div class="terms">
      <input type="checkbox" id="HstCheckbox" v-model="newHome">
      <label for="checkbox"></label>
      <span>Check if this is a newly built property and HST will be in addition to the listed Purchase Price</span>
    </div>
    <div class="mt-4">Deposit Amount: </div>
    <b-form-input 
      type="text" 
      v-model="depositAmount" 
      placeholder="Deposit in Dollars (CDN$)">
    </b-form-input>
    <div class="mt-4">Deposit Holder: </div>
    <b-form-input 
      type="text" 
      v-model="depositHolder" 
      placeholder="Name of deposit holder">
    </b-form-input>
    <p class="mt-4">Irrevocability Date: </p>
    <vc-date-picker v-model="contractIrrevocabilityDate"/>
    <p class="mt-4">Completion Date: </p>
    <vc-date-picker v-model="contractCompletionDate"/>
    <p class="mt-4">Title Search/Requisition Date:</p>
    <vc-date-picker v-model="contractRequisitionDate"/>
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields';

export default {
  data() {
    return {
      agreementDate: new Date(),
      irrevocabilityDate: new Date(),
      completionDate: new Date(),
      requisitionDate: new Date(),
    }
  },
  computed: {
    ...mapFields({
      contractAgreementDate: "contract.agreementDate",
      contractIrrevocabilityDate: "contract.irrevocabilityDate",
      contractCompletionDate: "contract.completionDate",
      contractRequisitionDate: "contract.requisitionDate",
      newHome: "contract.hasHst"
    }),
    sellerName: {
      get() {
          return this.$store.getters.sellerName;
      },
      set(sellerName) {
          this.$store.dispatch('updateSellerName', sellerName);
      }
    },
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
    }
  },
  methods: {
    updateSellerName(event) {
      this.$store.dispatch('updateSellerName', event.target.value);
    },
    updatePurchasePrice(event) {
      this.$store.dispatch('updatePurchasePrice', event.target.value);
    },
    updateDepositAmount(event) {
      this.$store.dispatch('updateDepositAmount', depositAmount);
    },
    updateDepositHolder(event) {
      this.$store.dispatch('updateDepositHolder', depositHolder);
    }
  }
}

</script>

<style lang="scss" scoped>
#HstCheckbox {
  margin-top: 16px;
  margin-right: 8px;
}
</style>