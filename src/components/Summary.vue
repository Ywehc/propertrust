<template>
  <div>
        <h4 class="tab-content-heading">Purchase Summary</h4>
        <h4>Sellers</h4>
        <p>{{ sellerName }}</p>
        <hr>
        <h4>Property</h4>
        <p> {{ propertyStreetNumber }} {{ propertyStreetName }} </p>
        <p v-if="propertyCity !== '' && propertyProvince !== ''"> {{ propertyCity }}, {{ propertyProvince }} </p>
        <p> {{ propertyPostal }}
            <span v-if="propertyProvince !== '' && propertyPostal !== ''">, 
                {{ propertyCountry }}
            </span> 
        </p>
        <p v-if="propertyFrontage !== ''">Frontage: {{ propertyFrontage }} </p>
        <p v-if="propertyDepth !== ''">Property Depth: {{ propertyDepth }} </p>
        <p v-if="propertyLegalDescription !== ''">Legal Description of Land: {{ propertyLegalDescription }} </p>
        <p v-if="chattelsIncluded !== ''">Chattels Included: {{ chattelsIncluded }} </p>
        <p v-if="fixturesExcluded !== ''">Fixtures Excluded: {{ fixturesExcluded }} </p>
        <p v-if="rentalItems !== ''">Rental Items: {{ rentalItems }} </p>
        <hr>
        <h4>Agreement</h4>
        <p v-if="agreementDate !== ''">Agreement Date: {{ agreementDate }} </p>
        <p v-if="purchasePrice !== ''">Purchase Price: {{ purchasePrice }} </p>
        <p v-if="hasHst == true">Total Price including 15% HST {{ (purchasePrice * 1.15) }} </p>
        <p v-if="depositAmount !== ''">Deposit Amount: {{ depositAmount }} </p>
        <p v-if="depositHolder !== ''">Deposit Holder: {{ depositHolder }} </p>
        <p v-if="irrevocabilityDate!== ''">Irrevocability Date: {{ irrevocabilityDate }} </p>
        <p v-if="completionDate !== ''">Completion Date: {{ completionDate }}</p>
        <p v-if="requisitionDate !== ''">Title Search/Requisition Date: {{requisitionDate}} </p>
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
            'depositHolder',
            'agreementDate',
            'irrevocabilityDate',
            'completionDate',
            'requisitionDate',
            'hasHst'
        ])
    }
}

</script>

<style style lang="scss" scoped>


</style>