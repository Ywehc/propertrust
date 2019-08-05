<template>
  <div class="container">
        <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Seller" active>
            <div>
                <b-form-input v-model="sellerName" placeholder="Full legal names of all Sellers"></b-form-input>
                <div class="mt-2">Value: {{ sellerName }}</div>
            </div>
        </b-tab>
        <b-tab title="Property"><p>Property Information</p>
            <div>
                <b-form-input v-model="propertyAddress" placeholder="Property Address"></b-form-input>
                <div class="mt-2">Value: {{ propertyAddress }}</div>
                <b-form-input v-model="propertyCity" placeholder="City"></b-form-input>
                <div class="mt-2">Value: {{ propertyCity }}</div>
                <p>Frontage</p>
                <b-form-select v-model="frontageSelected" :options="frontageOptions"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ frontageSelected }}</strong></div>
            </div>
        </b-tab>
            
        <b-tab title="Contract"><p>I'm the second tab</p></b-tab>
        <!-- <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab> -->
      </b-tabs>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SellerQuestions',
  props: {
    msg: String,
  },
  data() {
      return {
          sellerName: '',
          propertyAddress: '',
          propertyCity: '',
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