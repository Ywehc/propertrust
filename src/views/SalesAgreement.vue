<template>
    <div class="container">
        <h4 class="title">{{downloadPdf}}</h4>
        <div class="row">
            <div class="col-12 col-md-5 col-lg-4 col-xl-3 button-container">
                <button @click="download" class="btn btn-lg btn-blue">Download as PDF</button>
            </div>
            <div class="col-12 col-md-7 col-lg-8 col-xl-9 button-container">
                <router-link 
                    to="/selling"
                    tag="button"
                    class="btn btn-lg btn-blue"
                    >Back to Form
                </router-link>
            </div>
        </div>
        <agreement-referrals v-if="windowWidth > 490"></agreement-referrals>
        <div ref="content">
            <h4 class="title">Agreement of Purchase and Sale</h4>
            <p class="help-text">GENERAL USE:  {{ generalUse }} </p>
            <div class="contract-text">
                <p>This Agreement of Purchase and Sale dated this {{ agreementDate }}</p>
                <p><strong>BUYER ____________________________</strong>, agrees to purchase from
                    <strong> SELLER, {{sellerName }} </strong>, the following <strong>REAL PROPERTY</strong> situated at
                </p>
                <p>Address {{ propertyStreetNumber }} {{ propertyStreetName }}, {{ propertyCity }}, 
                    {{ propertyProvince }}, {{ propertyPostal }}, {{ propertyCountry}}
                    and legally described as {{ propertyLegalDescription }}, the 'property' 
                </p>
                <p><strong>PURCHASE PRICE: $CDN Canadian Dollars<span>{{ purchasePrice}}</span></strong>
                </p>
            </div>
            <p class="help-text">DEPOSIT: {{ deposit }} </p>
            <div class="contract-text">
                <p><strong>DEPOSIT: Buyer submits herewidth {{ purchasePrice }} $CDN Canadian Dollars</strong></p>
                <p>by negotiable cheque payable to {{ depositHolder }} {{ depositInfo }}</p>
            </div>
            <p class="help-text">1. {{ irrevocability1 }} </p>
            <p class="contract-text">1. IRREVOCABILITY: This Offer shall be irrevocable by {{sellerName}} {{ buyerName }} 
                until {{irrevocabilityDate}}, {{irrevocability2}}
            </p>
            <p class="help-text">2. {{completion1}} </p>
            <div class="contract-text">
                <p>2. {{completion2}} {{completionDate}}</p>
                <p>{{completion3}}</p>
            </div>
            <p class="help-text">3. {{chattels1}} </p> 
            <div class="contract-text">
                <p>3. CHATTELS INCLUDED: {{chattelsIncluded}}</p>
                <p>{{chattels2}}</p>
            </div>
            <p class="help-text">4. {{fixtures}}</p>
            <p class="contract-text">4. FIXTURES EXCLUDED: {{fixturesExcluded}} </p>
            <p class="help-text">5. {{rentals}}</p>
            <p class="contract-text">5. RENTAL ITEMS: {{rentalItems}} </p>
            <p class="help-text">6. {{hst1}}</p>
            <p class="contract-text"><strong>6. HST:</strong> {{hst2}} </p>
            <p class="help-text">7. {{titleSearch1}} </p>
            <div class="contract-text">
            <p><strong>7. TITLE SEARCH:</strong>Buyer shall be allowed until 6:00 p.m. on the {{requisitionDate}}</p>
            <p>{{titleSearch2}}</p> 
            </div>
            <p class="help-text">8. {{futureUse1}}</p>
            <p class="contract-text"><strong>8. FUTURE USE: </strong>{{futureUse2}}</p>
            <p class="help-text">9. {{title1}}</p>
            <p class="contract-text"><strong>9. TITLE: </strong>{{title2}}</p>
            <p class="help-text">10. {{closing1}}</p>
            <p class="contract-text"><strong>10. {{closing2}}</strong></p>
            <p class="help-text">11. {{discharge1}} </p>
            <p class="contract-text"><strong>11. DOCUMENTS AND DISCHARGE: </strong>{{discharge2}}</p>
            <p class="help-text">12. {{inspection1}}</p>
            <p class="contract-text"><strong>12. INSPECTION: </strong>{{inspection2}}</p>
            <p class="help-text">13. {{insurance1}}</p>
            <p class="contract-text"><strong>13. INSURANCE: {{insurance2}}</strong></p>
            <p class="help-text">14. {{planning1}}</p>
            <p class="contract-text"><strong>14. PLANNING ACT: </strong>{{planning2}}</p>
            <p class="help-text">15. {{preparation1}}</p>
            <p class="contract-text"><strong>15. DOCUMENT PREPARATION: </strong>{{preparation2}}</p>
            <p class="help-text">16. {{residency1}}</p>
            <p class="contract-text"><strong>16. RESIDENCY: </strong>{{residency2}}</p>
            <p class="help-text">17. {{adjustments1}}</p>
            <p class="contract-text"><strong>17. ADJUSTMENTS: </strong>{{adjustments2}}</p>
            <p class="help-text">18. {{assessment1}}</p>
            <p class="contract-text"><strong>18. PROPERTY ASSESSMENT: </strong>{{assessment2}} </p>
            <p class="help-text">19. {{time1}}</p>
            <p class="contract-text"><strong>19. TIME LIMITS: </strong>{{time2}}</p>
            <p class="help-text">20. {{tender1}}</p>
            <p class="contract-text"><strong>20. TENDER: </strong>{{tender2}}</p>
            <p class="help-text">21. {{family1}}</p>
            <p class="contract-text"><strong>21. FAMILY LAW ACT: </strong>{{family2}}</p>
            <p class="help-text">22. {{uffi1}}</p>
            <p class="contract-text"><strong>22. UFFI: </strong>{{uffi1}}</p>
            <p class="help-text">23. {{consumer1}}</p>
            <p class="contract-text"><strong>23. {{consumer2}}</strong></p>
            <p class="help-text">24. {{writing1}}</p>
            <p class="contract-text"><strong>24. AGREEMENT IN WRITING: </strong>{{writing2}}</p>
            <p class="help-text">25. {{timeDate1}}</p>
            <p class="contract-text"><strong>25. TIME AND DATE: </strong>{{timeDate2}}</p>
            <p class="help-text">26. {{successors1}}</p>
            <p class="contract-text"><strong>26. SUCCESSORS AND ASSIGNS: </strong>{{successors2}}</p>
            <div class="signatures container">
                <div class="row">
                    <div class="col-lg-4">
                        <p>SIGNED, SEALED AND DELIVERED in the presence of: </p>
                        <p>(Witness) __________________________</p>
                        <p>(Witness) __________________________</p>
                    </div>
                    <div class="col-lg-4">
                        <p>IN WITNESS whereof I have hereunto set my hand and seal:</p><p>(Witness) __________________________</p>
                        <p>(Buyer) __________________________</p>
                        <p>(Buyer) __________________________</p>
                    </div>
                    <div class="col-lg-4">
                        <br>
                        <p>DATE: _____________</p>
                        <p>DATE: _____________</p>
                    </div>
                </div>
            </div>
            <div class="signatures container">
                <div class="row">
                    <div class="col-lg-4">
                        <p>SIGNED, SEALED AND DELIVERED in the presence of: </p>
                        <p>(Witness) __________________________</p>
                        <p>(Witness) __________________________</p>
                    </div>
                    <div class="col-lg-4">
                        <p>IN WITNESS whereof I have hereunto set my hand and seal:</p><p>(Witness) __________________________</p>
                        <p>(Seller) __________________________</p>
                        <p>(Seller) __________________________</p>
                    </div>
                    <div class="col-lg-4">
                        <br>
                        <p>DATE: _____________</p>
                        <p>DATE: _____________</p>
                    </div>
                </div>
            </div>
            <p class="contract-text"><strong>{{spousal}}</strong></p>
            <div class="signatures container">
                <div class="row">
                    <div class="col-lg-4">
                        <p>(Witness) __________________________</p>
                    </div>
                    <div class="col-lg-4">
                        <p>(Spouse) __________________________</p>
                    </div>
                    <div class="col-lg-4">
                        <p>DATE: _____________</p>
                    </div>
                </div>
            </div>
            <p class="contract-text"><strong>CONFIRMATION OF ACCEPTANCE:</strong>{{acceptance}} {{agreementDate}}</p>
            <div class="signatures container">
                <p>Signature of Seller or Buyer ________________________</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-5 col-lg-4 col-xl-3 button-container">
                <button @click="download" class="btn btn-lg btn-blue">Download as PDF</button>
            </div>
            <div class="col-12 col-md-7 col-lg-8 col-xl-9 button-container">
                <router-link 
                    to="/selling"
                    tag="button"
                    class="btn btn-lg btn-blue"
                    >Back to Form
                </router-link>
            </div>
        </div>
        <agreement-referrals></agreement-referrals>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import copy from '../copy/copy.json'
import AgreementReferrals from '../components/AgreementReferrals.vue'
import jspdf from 'jspdf'

export default {
    components: {
        AgreementReferrals
    },
    methods: {
        download() {
            const doc = new jspdf()
            const html = this.$refs.content.innerHTML
            doc.fromHTML(html,15,15, {
                width: 150
            })
            doc.save("SalesAgreement.pdf")
        }
    },
    mounted () {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            windowWidth: screen.width,
            downloadPdf: copy.agreement.downloadPdf,
            generalUse: copy.agreement.generalUse,
            deposit: copy.agreement.deposit,
            depositInfo: copy.agreement.depositInfo,
            irrevocability1: copy.agreement.irrevocability1,
            irrevocability2: copy.agreement.irrevocability2,
            completion1: copy.agreement.completion1,
            completion2: copy.agreement.completion2,
            completion3: copy.agreement.completion3,
            chattels1: copy.agreement.chattels1,
            chattels2: copy.agreement.chattels2,
            fixtures: copy.agreement.fixtures,
            rentals: copy.agreement.rentals,
            hst1: copy.agreement.hst1,
            hst2: copy.agreement.hst2,
            titleSearch1: copy.agreement.titleSearch1,
            titleSearch2: copy.agreement.titleSearch2,
            futureUse1: copy.agreement.futureUse1,
            futureUse2: copy.agreement.futureUse2,
            title1: copy.agreement.title1,
            title2: copy.agreement.title2,
            closing1: copy.agreement.closing1,
            closing2: copy.agreement.closing2,
            discharge1: copy.agreement.discharge1,
            discharge2: copy.agreement.discharge2,
            inspection1: copy.agreement.inspection1,
            inspection2: copy.agreement.inspection2,
            insurance1: copy.agreement.insurance1,
            insurance2: copy.agreement.insurance2,
            planning1: copy.agreement.planning1,
            planning2: copy.agreement.planning2,
            preparation1: copy.agreement.preparation1,
            preparation2: copy.agreement.preparation2,
            residency1: copy.agreement.residency1,
            residency2: copy.agreement.residency2,
            adjustments1: copy.agreement.adjustments1,
            adjustments2: copy.agreement.adjustments2,
            assessment1: copy.agreement.assessment1,
            assessment2: copy.agreement.assessment2,
            time1: copy.agreement.time1,
            time2: copy.agreement.time2,
            tender1: copy.agreement.tender1,
            tender2: copy.agreement.tender2,
            family1: copy.agreement.family1,
            family2: copy.agreement.family2,
            uffi1: copy.agreement.uffi1,
            uffi2: copy.agreement.uffi2,
            consumer1: copy.agreement.consumer1,
            consumer2: copy.agreement.consumer2,
            writing1: copy.agreement.writing1,
            writing2: copy.agreement.writing2,
            timeDate1: copy.agreement.timeDate1,
            timeDate2: copy.agreement.timeDate2,
            successors1: copy.agreement.successors1,
            successors2: copy.agreement.successors2,
            spousal: copy.agreement.spousal,
            acceptance: copy.agreement.acceptance
        }
    },
    computed: {
        ...mapGetters([
            'buyerName',
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
            'requisitionDate'
        ])
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin: 30px 0px;
}
.contract-text span {
    float: right;
}
.contract-text {
    color: $dark;
}
.help-text {
    color: $dark-blue;
}
.button-container {
    margin: 20px auto;
}
@media screen and (max-width: 768px) {
    .button-container {
        text-align: center;
        margin: 0px auto;
    }
    .title {
        text-align: center;
    }
}
</style>