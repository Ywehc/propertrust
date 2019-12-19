<template>
  <div class="container">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Seller" active>
            <div>
                <b-form-input 
                  type="text"
                  v-model="value"
                  placeholder="Test">
                </b-form-input>
                <div class="mt-2">{{ value }}</div>
            </div>
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
                <p>Frontage</p>
                <b-form-select v-model="frontageSelected" :options="frontageOptions"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ frontageSelected }}</strong></div>
            </div>
        </b-tab>
            
        <b-tab title="Contract"><p>Agreement Date: date-picker </p></b-tab>
        <!-- <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab> -->
      </b-tabs>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    },
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
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value);
    },
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
    }
  },
  data() {
      return {
          frontageSelected: null,
          frontageOptions: [
              { value: null, text: 'Please select an option' },
              { value: 'north', text: 'North' },
              { value: 'north east', text: 'North-East' },
              { value: 'east', text: 'East' },
              { value: 'south east', text: 'South-East' },
              { value: 'south', text: 'South' },
              { value: 'south west', text: 'South-West' },
              { value: 'west', text: 'West' },
              { value: 'north west', text: 'North-West' },
          ] 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Passion+One&display=swap');


</style>