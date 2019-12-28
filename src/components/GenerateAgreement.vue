<template>
    <div>
        <div class="terms">
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{terms}}</label>
        </div>
        <router-link 
            to="/agreement"
            tag="button"
            class="btn btn-lg"
            :disabled="checked == false"
            >Create Sales Agreement
        </router-link>
    </div>
</template>

<script>
import copy from '../copy/copy.json'

export default {
    data() {
        return {
            checked: false,
            terms: copy.seller.generateAgreement
        }
    }
}

</script>

<style style lang="scss" scoped>
button {
    margin: 6px auto;
    border-color: $dark;
}
button.btn-lg {
    width: 260px;
    background: $light-blue;
    color: white;
    }

</style>