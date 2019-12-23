<template>
  <div class="container">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Seller" active>
            <div>
                <b-form-input 
                  type="text"
                  v-model="sellerName"
                  placeholder="Legal Name of Seller">
                </b-form-input>
                <div class="mt-2">{{ sellerName }}</div>
            </div>
        </b-tab>
        <b-tab title="Property"><p>Property Information</p>
            <div>
                <div class="mt-2">Street Number: {{ propertyStreetNumber }}</div>
                <b-form-input 
                  type="text"
                  v-model="propertyStreetNumber" 
                  placeholder="Street Number">
                </b-form-input>
                <div class="mt-2">Street Name: {{ propertyStreetName }}</div>
                <b-form-input 
                  type="text" 
                  v-model="propertyStreetName" 
                  placeholder="Street Name">
                </b-form-input>             
                <div class="mt-2">City: {{ propertyCity }}</div>
                <b-form-input 
                  type="text" 
                  v-model="propertyCity" 
                  placeholder="City">
                </b-form-input> 
                <div class="mt-2">Province: {{ propertyProvince }}</div>
                <b-form-input 
                  type="text" 
                  v-model="propertyProvince" 
                  placeholder="Province">
                </b-form-input>
                <div class="mt-2">Postal Code: {{ propertyPostal}}</div>
                <b-form-input 
                  type="text" 
                  v-model="propertyPostal" 
                  placeholder="Postal Code">
                </b-form-input>
                <div class="mt-2">Property Frontage: {{ propertyFrontage }}</div>
                <b-form-input 
                  type="text" 
                  v-model="propertyFrontage" 
                  placeholder="North - South - East - West">
                </b-form-input>
                <div class="mt-2">Property Depth: {{ propertyDepth }}</div>
                <b-form-input 
                  type="text" 
                  v-model="propertyDepth" 
                  placeholder="Property Depth - approximate">
                </b-form-input>
                <div class="mt-2">Legal description of land including easements not described elsewhere: {{ propertyLegalDescription }}</div>
                <b-form-input 
                  type="text" 
                  v-model="propertyLegalDescription" 
                  placeholder="Legal Description of Property">
                </b-form-input>
                <div class="mt-2">Chattels Included: {{ chattelsIncluded }}</div>
                <b-form-input 
                  type="text" 
                  v-model="chattelsIncluded" 
                  placeholder="Chattels Included">
                </b-form-input>
                <div class="mt-2">Fixtures Excluded: {{ fixturesExcluded }}</div>
                <b-form-input 
                  type="text" 
                  v-model="fixturesExcluded" 
                  placeholder="Fixtures Excluded">
                </b-form-input>
                <div class="mt-2">Rental Items: {{ rentalItems }}</div>
                <b-form-input 
                  type="text" 
                  v-model="rentalItems" 
                  placeholder="Rental Items">
                </b-form-input>
            </div>
        </b-tab>
            
        <b-tab title="Contract">
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
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    sellerName: {
      get() {
        return this.$store.getters.sellerName;
      },
      set(sellerName) {
        this.$store.dispatch('updateSellerName', sellerName);
      }
    },
    propertyStreetNumber: {
      get() {
        return this.$store.getters.propertyStreetNumber;
      },
      set(propertyStreetNumber) {
        this.$store.dispatch('updatePropertyStreetNumber', propertyStreetNumber);
      }
    },
    propertyStreetName: {
      get() {
        return this.$store.getters.propertyStreetName;
      },
      set(propertyStreetName) {
        this.$store.dispatch('updatePropertyStreetName', propertyStreetName);
      }
    },
    propertyCity: {
      get() {
        return this.$store.getters.propertyCity;
      },
      set(propertyCity) {
        this.$store.dispatch('updatePropertyCity', propertyCity);
      }
    },
    propertyProvince: {
      get() {
        return this.$store.getters.propertyProvince;
      },
      set(propertyProvince) {
        this.$store.dispatch('updatePropertyProvince', propertyProvince);
      }
    },
    propertyPostal: {
      get() {
        return this.$store.getters.propertyPostal;
      },
      set(propertyPostal) {
        this.$store.dispatch('updatePropertyPostal', propertyPostal);
      }
    },
    propertyFrontage: {
      get() {
        return this.$store.getters.propertyFrontage;
      },
      set(propertyFrontage) {
        this.$store.dispatch('updatePropertyFrontage', propertyFrontage);
      }
    },
    propertyDepth: {
      get() {
        return this.$store.getters.propertyDepth;
      },
      set(propertyDepth) {
        this.$store.dispatch('updatePropertyDepth', propertyDepth);
      }
    },
    propertyLegalDescription: {
      get() {
        return this.$store.getters.propertyLegalDescription;
      },
      set(propertyLegalDescription) {
        this.$store.dispatch('updatePropertyLegalDescription', propertyLegalDescription);
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
      set(purchasePrice) {
        this.$store.dispatch('updateDepositAmount', depositAmount);
      }
    },
    depositHolder: {
      get() {
        return this.$store.getters.depositHolder;
      },
      set(purchasePrice) {
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
    },
    chattelsIncluded: {
      get() {
        return this.$store.getters.chattelsIncluded;
      },
      set(chattelsIncluded) {
        this.$store.dispatch('updateChattelsIncluded', chattelsIncluded);
      }
    },
    fixturesExcluded: {
      get() {
        return this.$store.getters.fixturesExcluded;
      },
      set(fixturesExcluded) {
        this.$store.dispatch('updateFixturesExcluded', fixturesExcluded);
      }
    },
    rentalItems: {
      get() {
        return this.$store.getters.rentalItems;
      },
      set(rentalItems) {
        this.$store.dispatch('updateRentalItems', rentalItems);
      }
    }
  },

  methods: {
    updateSeller(event) {
      this.$store.dispatch('updateSellerName', event.target.value);
    },
    updatePropertyStreetNumber(event) {
      this.$store.dispatch('updatePropertyStreetNumber', propertyStreetNumber);
    },
    updatePropertyStreetName(event) {
      this.$store.dispatch('updatePropertyStreetName', propertyStreetName);
    },
    updatePropertyCity(event) {
      this.$store.dispatch('updatePropertyCity', propertyCity);
    },
    updatePropertyProvince(event) {
      this.$store.dispatch('updatePropertyProvince', propertyProvince);
    },
    updatePropertyPostal(event) {
      this.$store.dispatch('updatePropertyPostal', propertyPostal);
    },
    updatePropertyFrontage(event) {
      this.$store.dispatch('updatePropertyFrontage', propertyFrontage);
    },
    updatePropertyDepth(event) {
      this.$store.dispatch('updatePropertyDepth', propertyDepth);
    },
    updatePropertyLegalDescription(event) {
      this.$store.dispatch('updatePropertyLegalDescription', propertyLegalDescription);
    },
    updatePurchasePrice(event) {
      this.$store.dispatch('updatePurchasePrice', purchasePrice);
    },
    updateDepositAmount(event) {
      this.$store.dispatch('updateDepositAmount', depositAmount);
    },
    updateDepositHolder(event) {
      this.$store.dispatch('updateDepositHolder', depositHolder);
    },
    updateCompletionDate(event) {
      this.$store.dispatch('updateCompletionDate', completionDate);
    },
    updateChattelsIncluded(event) {
      this.$store.dispatch('updateChattelsIncluded', chattelsIncluded);
    },
    updateFixturesExcluded(event) {
      this.$store.dispatch('updateFixturesExcluded', fixturesExcluded);
    },
    updateRentalItems(event) {
      this.$store.dispatch('updateRentalItems', rentalItems);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Passion+One&display=swap');


</style>