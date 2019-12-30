<template>
    <div>
        <h4 class="tab-content-heading">Terms & Conditions</h4>
        <div class="terms row">
            <input type="checkbox" 
                v-model="checked"
                class="col-2 col-md-1 checkbox"
            >  
            <label for="checkbox" class="col-10 col-md-11">{{terms}}</label>
        </div>
        <router-link 
            to="/agreement"
            tag="button"
            class="btn btn-lg btn-blue"
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
.terms {
    font-size: 18px;
    label {
        margin-top: -.5rem;
    }
}
input[type=checkbox] {
    transform: scale(2);
}
.btn-blue {
    margin-top: 20px;
}
@media screen and (max-width: 576px) {
    .checkbox {
    margin-top: 20px;
    }
}
</style>