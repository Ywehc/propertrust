<template>
    <div class="container">
        <h4 class="tab-content-heading">Terms & Conditions</h4>
        <div class="terms row">
            <input type="checkbox" 
                v-model="checked"
                class="col-2 checkbox"
            >  
            <label for="checkbox" class="col-10">{{terms}}</label>
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
.checkbox {
    margin-top: 20px;
}
@media screen and (max-width: 576px) {
  .btn-lg {
      margin-top: 40px;
  }
}
</style>