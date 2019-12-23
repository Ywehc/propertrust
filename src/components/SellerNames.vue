<template>
  <div>
        <b-form-input 
            type="text"
            v-model="sellerName"
            placeholder="Legal Name of Seller">
        </b-form-input>
        <div class="mt-2">{{ sellerName }}</div>
    </div>
</template>

<script>

// import copy from '../copy/copy.json'

export default {
    computed: {
        sellerName: {
            get() {
                return this.$store.getters.sellerName;
            },
            set(sellerName) {
                this.$store.dispatch('updateSellerName', sellerName);
            }
        }
    },
    methods: {
        updateSeller(event) {
            this.$store.dispatch('updateSellerName', event.target.value);
        }
    }
}

</script>

<style style lang="scss" scoped>


</style>
