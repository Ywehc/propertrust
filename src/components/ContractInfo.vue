<template>
  <div>
    <b-form-input 
        type="text"
        v-model="sellerName"
        placeholder="Legal Name of Seller">
    </b-form-input>
    <div class="mt-2">{{ sellerName }}</div>
    <hr>
    <p>Agreement Date: {{ contractAgreementDate }}</p>
    <vc-date-picker v-model="contractAgreementDate"/>
    <hr>
    <hr>
    <div class="mt-2">Purchase Price: {{ purchasePrice }}</div>
    <b-form-input 
      type="number" 
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
    <p>Irrevocability Date: {{ contractIrrevocabilityDate }}</p>
    <vc-date-picker v-model="contractIrrevocabilityDate"/>
    <hr>
    <p>Completion Date: {{ contractCompletionDate }}</p>
    <vc-date-picker v-model="contractCompletionDate"/>
    <hr>
    <div class="terms">
      <input type="checkbox" id="HstCheckbox" v-model="newHome">
      <label for="checkbox"></label>
      <span>Check if this is a newly built property</span>
    </div>
    <hr>
    <div class="terms" v-if="newHome">
      <span>13% HST is included in purchase price or in addition to purchase price: {{ hstIncluded }}</span>
      <br>
      <input type="radio" id="one" value="HST is included in purchase price" v-model="hstIncluded">
      <label for="one">Included in price</label>
      <br>
      <input type="radio" id="two" value="HST will be added to purchase price " v-model="hstIncluded">
      <label for="two">In addition to price</label>
      <div class="mt-2">Deposit Holder: {{ depositHolder }}</div>
    </div>
    <hr>
    <p>Title Search/Requisition Date: {{ contractRequisitionDate }}</p>
    <vc-date-picker v-model="contractRequisitionDate"/>
    <hr>
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
      newHome: "contract.hasHst",
      hstIncluded: "contract.hstIncluded"
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

<style style lang="scss" scoped>


</style>