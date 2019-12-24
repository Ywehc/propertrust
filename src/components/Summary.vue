<template>
  <div>
        <h2>Sellers</h2>
        <p>{{ sellerName }}</p>
        <hr>
        <h2>Property</h2>
        <p> {{ propertyStreetNumber }} {{ propertyStreetName }} </p>
        <p> {{ propertyCity }}, {{ propertyProvince }} </p>
        <p> {{ propertyPostal }}
            <span v-if="propertyProvince !== '' && propertyPostal !== ''">, 
                {{ propertyCountry }}
            </span> 
        </p>
        <hr>
        <p>Frontage: {{ propertyFrontage }} </p>
        <p>Property Depth: {{ propertyDepth }} </p>
        <p>Legal Description of Land: {{ propertyLegalDescription }} </p>
        <p>Chattels Included: {{ chattelsIncluded }} </p>
        <p>Fixtures Excluded: {{ fixturesExcluded }} </p>
        <p>Rental Items: {{ rentalItems }} </p>
        <hr>
        <h2>Agreement</h2>
        <p>Purchase Price: {{ purchasePrice }} </p>
        <p>Deposit Amount: {{ depositAmount }} </p>
        <p>Deposit Holder: {{ depositHolder }} </p>
        <p>Irrevocability Date </p>
        <p>Completion Date</p>
        <p>Title Search/Requisition Date</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import copy from '../copy/copy.json'

export default {
    computed: {
        ...mapGetters([
            'sellerName',
            'propertyStreetNumber',
            'propertyStreetName',
            'propertyCity',
            'propertyProvince',
            'propertyPostal',
            'propertyCountry',
            'propertyFrontage',
            'propertyDepth',
            'propertyLegalDescription',
            'chattelsIncluded',
            'fixturesExcluded',
            'rentalItems',
            'purchasePrice',
            'depositAmount',
            'depositHolder'
        ])
    }
}

</script>

<style style lang="scss" scoped>


</style>