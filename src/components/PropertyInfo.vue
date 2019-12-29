<template>
  <div>
        <h4 class="tab-content-heading">Property Information</h4>
        <div class="mt-4">Street Number: {{ propertyStreetNumber }}</div>
        <b-form-input 
            type="text"
            v-model="propertyStreetNumber" 
            placeholder="Street Number">
        </b-form-input>
        <div class="mt-4">Street Name: {{ propertyStreetName }}</div>
        <b-form-input 
            type="text" 
            v-model="propertyStreetName" 
            placeholder="Street Name">
        </b-form-input>             
        <div class="mt-4">City: {{ propertyCity }}</div>
        <b-form-input 
            type="text" 
            v-model="propertyCity" 
            placeholder="City">
        </b-form-input> 
        <div class="mt-4">Province: {{ propertyProvince }}</div>
        <b-form-input 
            type="text" 
            v-model="propertyProvince" 
            placeholder="Province">
        </b-form-input>
        <div class="mt-4">Postal Code: {{ propertyPostal}}</div>
        <b-form-input 
            type="text" 
            v-model="propertyPostal" 
            placeholder="Postal Code">
        </b-form-input>
        <div class="mt-4">Property Frontage: {{ propertyFrontage }}</div>
        <b-form-input 
            type="text" 
            v-model="propertyFrontage" 
            placeholder="North - South - East - West">
        </b-form-input>
        <div class="mt-4">Property Depth: {{ propertyDepth }}</div>
        <b-form-input 
            type="text" 
            v-model="propertyDepth" 
            placeholder="Property Depth - approximate">
        </b-form-input>
        <div class="mt-4">Legal description of land including easements not described elsewhere: {{ propertyLegalDescription }}</div>
        <b-form-input 
            type="text" 
            v-model="propertyLegalDescription" 
            placeholder="Legal Description of Property">
        </b-form-input>
        <div class="mt-4">Chattels Included: {{ chattelsIncluded }}</div>
        <b-form-input 
            type="text" 
            v-model="chattelsIncluded" 
            placeholder="Chattels Included">
        </b-form-input>
        <div class="mt-4">Fixtures Excluded: {{ fixturesExcluded }}</div>
        <b-form-input 
            type="text" 
            v-model="fixturesExcluded" 
            placeholder="Fixtures Excluded">
        </b-form-input>
        <div class="mt-4">Rental Items: {{ rentalItems }}</div>
        <b-form-input 
            type="text" 
            v-model="rentalItems" 
            placeholder="Rental Items">
        </b-form-input>
    </div>
</template>

<script>
export default {
    computed: {
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