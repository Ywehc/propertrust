<template>
    <div class="row">
        <h4 class="title">Let us help connect you with</h4>
        <div v-if="servicesClicked == true" 
            class="alert alert-warning" 
            role="alert">
            Look for referral services to be enabled in a future release!
        </div>
        <ul class="services" @click="toggleServices">
            <li class="btn btn-lg btn-mid-blue">Real Estate Lawyer</li>
            <li class="btn btn-lg btn-mid-blue">Mortgage Broker/Lender</li>
            <li class="btn btn-lg btn-mid-blue">Title Company</li>
            <li class="btn btn-lg btn-mid-blue">Movers</li>
            <li class="btn btn-lg btn-mid-blue">Home Inspectors</li>
            <li class="btn btn-lg btn-mid-blue">Contractors & Handymen</li>
            <li class="btn btn-lg btn-mid-blue">MLS Listings</li>
            <li class="btn btn-lg btn-mid-blue">Home Insurance</li>
            <li class="btn btn-lg btn-mid-blue">Traditional Realtor</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            servicesClicked: false
        }
    },
    methods: {
        toggleServices() {
            this.servicesClicked = true
        }
    }
}
</script>

<style lang="scss" scoped>
.row {
    margin-top: 40px;
}
.alert {
    height: 50px;
    margin-bottom: 0;
    padding-bottom: 0;
}
.btn-mid-blue, .btn-dark-blue {
    margin: 15px;
}
.title {
    margin: 10px 16px;
}
ul.services {
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
}
@media screen and (max-width: 576px) {
    .title {       
        margin: 40px auto;
    }
    ul.services {
        justify-content: center;
    }
    .btn-mid-blue {
        margin: 5px;
    }
    .alert {
        margin: 20px;
        height: auto;
        padding: 6px;
        text-align: center;
    }
}
</style>