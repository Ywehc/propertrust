<template>
    <div>
        <div class="title">
            <h1>Agreement of Purchase and Sale</h1>
        </div>
        <div class="help-text">
            <p>GENERAL USE: The Agreement of Purchase and Sale is the document that is used to state the Buyer's desire to purchase the property, and to
        negotiate the terms of the sale. It is commonly referred to as an Offer. This document also allows the Buyer a chance to outline in detail all
        of the conditions they wish to be placed in their Offer to buy the Seller’s property. Some common examples of a Buyer’s conditions include
        arranging financing (a mortgage) for the property to be purchased, completing a home inspection, or ensuring that the sale of their current
        home is completed before purchasing a new one. After the Offer is prepared and signed by the Buyer, it is presented to the Seller for
        acceptance. The Seller, in turn, may want to make changes to the Offer for the Buyer to consider. This process can continue back and forth
        several times in an effort to reach an agreement.</p>
        </div>
        <div class="contract-text">
            <p>This Agreement of Purchase and Sale dated this {{ agreementDate }}</p>
            <p><strong>BUYER, {{ buyerName }}</strong>, agrees to purchase from</p>
            <p><strong>SELLER, {{sellerName }} </strong></p>, the following
            <p><strong>REAL PROPERTY:</strong> situated at</p>
            <p>Address  {{ propertyStreetNumber }} 
                        {{ propertyStreetName }},
                        {{ propertyCity }}, 
                        {{ propertyProvince }},
                        {{ propertyPostal }},
                        {{ propertyCountry}}
            </p>
            <p>and legally described as {{ propertyLegalDescription }}, the 'property' </p>
            <p><strong>PURCHASE PRICE: </strong><span>$CDN Canadian Dollars {{ purchasePrice}}</span></p>
        </div>
        <div class="help-text">
            <p>DEPOSIT: The Buyer includes a deposit in the Offer to give it authenticity and to show their sincerity to the Seller. The deposit is considered
            part of </p>
        </div>
        <div class="contract-text">
            <p><strong>DEPOSIT: Buyer submits herewidth {{ purchasePrice }} $CDN Canadian Dollars</strong></p>
            <p>by negotiable cheque payable to {{ depositHolder }} "Deposit Holder" to be held in trust pending completion or other termination of this Agreement and to be credited toward the Purchase Price on completion.
            For the purposes of this Agreement, “Upon Acceptance” shall mean that the Buyer is required to deliver the deposit to the
            Deposit Holder within 24 hours of the acceptance of this Agreement. The parties to this Agreement hereby acknowledge that,
            unless otherwise provided for in this Agreement, the Deposit Holder shall place the deposit in trust in the Deposit Holder’s
            non-interest bearing Real Estate Trust Account and no interest shall be earned, received or paid on the deposit. </p>
        </div>
        <div class="help-text">
            <p>1. IRREVOCABILITY: The following section states the deadline that a person making an Offer gives the other party to accept their Offer. If the
            Offer is not accepted by the stated time, then the Offer is over and no longer binding on any of the parties in the transaction.</p>
        </div>
        <div class="contract-text">
            <p>1. IRREVOCABILITY: This Offer shall be irrevocable by {{sellerName}} {{ buyerName }} until
                {{irrevocabilityDate}}, after which time, if not accepted, this
                Offer shall be null and void and the deposit shall be returned to the Buyer in full without interest.
            </p>
        </div>
        <div class="help-text">
            <p>2. COMPLETION DATE: This is the date that the transaction is scheduled to be completed and unless stated otherwise, somewhere else in the
            Agreement, the property is to be vacant. This date is not to be on the weekend or a statutory holiday.</p>
        </div>
        <div class="contract-text">
            <p>2. COMPLETION DATE: This Agreement shall be completed by no later than 6:00 p.m. on the {{completionDate}}</p>
            <p>Upon completion, vacant possession of the property shall be given to the
            Buyer unless otherwise provided for in this Agreement. </p>
        </div>
        <div class="help-text">
            <p>3. CHATTELS INCLUDED: The following section allows the Buyer to list all additional items separate from the property that they wish to
            be included in their purchase. Examples to be listed here include appliances such as ‘Moffat white stove’ or ‘Hotpoint white
            refrigerator’ perhaps with serial numbers. The Seller must agree with items included before signing the Offer. The guide to follow is
            “when in doubt spell it out”. Clear descriptions of what is expected to remain in or on the property are recommended.</p> 
        </div>
        <div class="contract-text">
            <p>3. CHATTELS INCLUDED: {{chattelsIncluded}}</p>
            <p>Unless otherwise stated in this Agreement or any Schedule hereto, Seller agrees to convey all fixtures and chattels
            included in the Purchase Price free from all liens, encumbrances or claims affecting the said fixtures and chattels.</p>
        </div>
        <div class="help-text">
            <p>4. FIXTURES EXCLUDED: The following section lists any fixtures that are attached to the property that the Buyer and the Seller have agreed
            will not be included in the deal, i.e. a chandelier in the dining room, a mirror attached to wall in the front hallway. The same</p>
        </div>
        <div class="contract-text">
            <p>4. FIXTURES EXCLUDED: {{fixturesExcluded}} </p>
        </div>
        <div class="help-text">
            <p>5. RENTAL ITEMS: The following equipment is rented and not included in the Purchase Price. The Buyer agrees to assume
            the rental contract(s), if assumable:</p>
        </div>
        <div class="contract-text">
            <p>5. RENTAL ITEMS: {{rentalItems}} </p>
        </div>
        <div class="help-text">
            <p>6. HST: The following section states how HST is to be treated, if HST is to be paid.</p>
        </div>
        <div class="contract-text">
            <p><strong>6. HST:</strong>If the sale of the property (Real Property as described above) is subject to Harmonized Sales Tax (HST), then such
            tax shall be .................................................... the Purchase Price. If the sale of the property is not subject to HST, (included in/in addition to)
            Seller agrees to certify on or before closing, that the sale of the property is not subject to HST. Any HST on chattels, if
            applicable, is not included in the purchase price.</p>
        </div>
        <div class="help-text">
            <p>7. TITLE SEARCH: The following section provides the times for the Buyer’s lawyer to do the necessary searches and checks on the
            property. These will likely include matters such as checking the title to ensure that the Buyer is going to obtain good title and that there
            are no outstanding work orders.</p>
        </div>
        <div class="contract-text">
           <p><strong>7. TITLE SEARCH:</strong>Buyer shall be allowed until 6:00 p.m. on the {{requisitionDate}}</p>
           <p>(Requisition Date) to examine the title to the property at Buyer’s own expense and until the earlier of: (i) thirty days from
            the later of the Requisition Date or the date on which the conditions in this Agreement are fulfilled or otherwise waived
            or; (ii) five days prior to completion, to satisfy Buyer that there are no outstanding work orders or deficiency notices affecting the property, and that its present use may be lawfully continued and that the principal building may be insured against risk of fire. Seller hereby consents to
            the municipality or other governmental agencies releasing to Buyer details of all outstanding work orders and deficiency
            notices affecting the property, and Seller agrees to execute and deliver such further authorizations in this regard as Buyer
            may reasonably require.</p> 
        </div>
        <div class="help-text">
            <p>8. FUTURE USE: The Buyer is being told the only use the Buyer can insist upon is the use set out in the Agreement. If the Agreement states
            that it is a single family home, there is no guarantee that in five years they can operate a business from the premises.</p>
        </div>
        <div class="contract-text">
            <p><strong>8. FUTURE USE: </strong>Seller and Buyer agree that there is no representation or warranty of any kind that the future intended
            use of the property by Buyer is or will be lawful except as may be specifically provided for in this Agreement.</p>
        </div>
        <div class="help-text">
            <p>9. TITLE: This paragraph provides that the Buyer is entitled to good title but must accept the title subject to any easements for the supply
            of telephone services, electricity, gas, sewers, water, television cable facilities and other related services. Further the Buyer has to
            accept the title subject to any restrictive covenants as long as they are complied with. Finally if there are any municipal agreements,
            zoning bylaws or utility or service contracts, the Buyer must assume them.</p>
        </div>
        <div class="contract-text">
            <p><strong>9. TITLE: </strong>Provided that the title to the property is good and free from all registered restrictions, charges, liens, and
            encumbrances except as otherwise specifically provided in this Agreement and save and except for (a) any registered
            restrictions or covenants that run with the land providing that such are complied with; (b) any registered municipal
            agreements and registered agreements with publicly regulated utilities providing such have been complied with, or
            security has been posted to ensure compliance and completion, as evidenced by a letter from the relevant municipality
            or regulated utility; (c) any minor easements for the supply of domestic utility or telephone services to the property or
            adjacent properties; and (d) any easements for drainage, storm or sanitary sewers, public utility lines, telephone lines,
            cable television lines or other services which do not materially affect the use of the property. If within the specified times
            referred to in paragraph 8 any valid objection to title or to any outstanding work order or deficiency notice, or to the
            fact the said present use may not lawfully be continued, or that the principal building may not be insured against risk of
            fire is made in writing to Seller and which Seller is unable or unwilling to remove, remedy or satisfy or obtain insurance
            save and except against risk of fire (Title Insurance) in favour of the Buyer and any mortgagee, (with all related costs at
            the expense of the Seller), and which Buyer will not waive, this Agreement notwithstanding any intermediate acts or
            negotiations in respect of such objections, shall be at an end and all monies paid shall be returned without interest or
            deduction and Seller, Listing Brokerage and Co-operating Brokerage shall not be liable for any costs or damages. Save
            as to any valid objection so made by such day and except for any objection going to the root of the title, Buyer shall be
            conclusively deemed to have accepted Seller's title to the property.</p>
        </div>
        <div class="help-text">
            <p>10. CLOSING ARRANGEMENTS: If the transaction is to be completed electronically, the following paragraph sets out how the closing is to proceed.</p>
        </div>
        <div class="contract-text">
            <p><strong>10. CLOSING ARRANGEMENTS: </strong>Where each of the Seller and Buyer retain a lawyer to complete the Agreement of
            Purchase and Sale of the property, and where the transaction will be completed by electronic registration pursuant to
            Part III of the Land Registration Reform Act, R.S.O. 1990, Chapter L4 and the Electronic Registration Act, S.O. 1991,
            Chapter 44, and any amendments thereto, the Seller and Buyer acknowledge and agree that the exchange of closing
            funds, non-registrable documents and other items (the “Requisite Deliveries”) and the release thereof to the Seller and
            Buyer will (a) not occur at the same time as the registration of the transfer/deed (and any other documents intended to
            be registered in connection with the completion of this transaction) and (b) be subject to conditions whereby the lawyer(s)
            receiving any of the Requisite Deliveries will be required to hold same in trust and not release same except in accordance
            with the terms of a document registration agreement between the said lawyers. The Seller and Buyer irrevocably instruct
            the said lawyers to be bound by the document registration agreement which is recommended from time to time by the
            Law Society of Upper Canada. Unless otherwise agreed to by the lawyers, such exchange of the Requisite Deliveries will
            occur in the applicable Land Titles Office or such other location agreeable to both lawyers.</p>
        </div>
        <div class="help-text">
            <p>11. DOCUMENTS AND DISCHARGE: The following paragraph states that the Seller will give the Buyer any documents they have, while
            the Buyer cannot ask for documents that the Seller doesn’t have. When there is a mortgage on the property in favour of a bank, trust
            company, insurance company, credit union or Caisse Populaire, in most instances a discharge is not available for registration on closing.
            This paragraph sets out the procedure for dealing with these matters. A mortgage other than those set out above must be paid out and
            discharged on closing.</p>
        </div>
        <div class="contract-text">
            <p><strong>11. DOCUMENTS AND DISCHARGE: </strong>Buyer shall not call for the production of any title deed, abstract, survey or other evidence
            of title to the property except such as are in the possession or control of Seller. If requested by Buyer, Seller will deliver any sketch
            or survey of the property within Seller's control to Buyer as soon as possible and prior to the Requisition Date. If a discharge of
            any Charge/Mortgage held by a corporation incorporated pursuant to the Trust And Loan Companies Act (Canada), Chartered
            Bank, Trust Company, Credit Union, Caisse Populaire or Insurance Company and which is not to be assumed by Buyer on
            completion, is not available in registrable form on completion, Buyer agrees to accept Seller's lawyer's personal undertaking to
            obtain, out of the closing funds, a discharge in registrable form and to register same, or cause same to be registered, on title
            within a reasonable period of time after completion, provided that on or before completion Seller shall provide to Buyer a
            mortgage statement prepared by the mortgagee setting out the balance required to obtain the discharge, and, where a real-time
            electronic cleared funds transfer system is not being used, a direction executed by Seller directing payment to the mortgagee of
            the amount required to obtain the discharge out of the balance due on completion.</p>
        </div>
        <div class="help-text">
            <p>12.  INSPECTION: The following paragraph makes it known that the Buyer has had the opportunity to do a personal inspection of the
            property they are purchasing. The Buyer also acknowledges that, unless it is stated in the body of the offer, the Buyer declined the
            opportunity to have a professional home inspection completed on the property.</p>
        </div>
        <div class="contract-text">
            <p><strong>12. INSPECTION: </strong>Buyer acknowledges having had the opportunity to inspect the property and understands that upon
            acceptance of this Offer there shall be a binding agreement of purchase and sale between Buyer and Seller<strong> The Buyer
            acknowledges having the opportunity to include a requirement for a property inspection report in this
            Agreement and agrees that except as may be specifically provided for in this Agreement, the Buyer
            will not be obtaining a property inspection or property inspection report regarding the property.</strong></p>
        </div>
        <div class="help-text">
            <p>13. INSURANCE: The following clause states that the Seller must take care of the property until closing and is responsible to maintain fire insurance policies, if any, on the property until closing. If there is a fire before closing, the Buyer has two choices: they can either not
            buy the property or they can have insurance money paid to them and take the property as it is</p>
        </div>
        <div class="contract-text">
            <p><strong>13. INSURANCE: </strong>All buildings on the property and all other things being purchased shall be and remain until completion
            at the risk of Seller. Pending completion, Seller shall hold all insurance policies, if any, and the proceeds thereof in trust
            for the parties as their interests may appear and in the event of substantial damage, Buyer may either terminate this
            Agreement and have all monies paid returned without interest or deduction or else take the proceeds of any insurance
            and complete the purchase. No insurance shall be transferred on completion. If Seller is taking back a
            Charge/Mortgage, or Buyer is assuming a Charge/Mortgage, Buyer shall supply Seller with reasonable evidence of
            adequate insurance to protect Seller's or other mortgagee's interest on completion.</p>
        </div>
        <div class="help-text">
            <p>14. PLANNING ACT: The following paragraph states that the Agreement is subject to compliance with the Planning Act. This statute govern
            things like severance.</p>
        </div>
        <div class="contract-text">
            <p><strong>14. PLANNING ACT: </strong>This Agreement shall be effective to create an interest in the property only if Seller complies with the
            subdivision control provisions of the Planning Act by completion and Seller covenants to proceed diligently at his expense
            to obtain any necessary consent by completion.</p>
        </div>
        <div class="help-text">
            <p>15. DOCUMENT PREPARATION: This spells out that the Buyer will take responsibility to pay for the preparation of their own mortgages
            and the Land Transfer Tax Affidavit. The Seller, meanwhile, is responsible for preparing a Deed to transfer at the Seller’s expense.</p>
        </div>
        <div class="contract-text">
            <p><strong>15. DOCUMENT PREPARATION: </strong>The Transfer/Deed shall, save for the Land Transfer Tax Affidavit, be prepared in
            registrable form at the expense of Seller, and any Charge/Mortgage to be given back by the Buyer to Seller at the
            expense of the Buyer. If requested by Buyer, Seller covenants that the Transfer/Deed to be delivered on completion shall
            contain the statements contemplated by Section 50(22) of the Planning Act, R.S.O.1990.</p>
        </div>
        <div class="help-text">
            <p>16. RESIDENCY: The following paragraph deals with the issue of the Seller’s residency in Canada. It ensures that the Seller is a resident of
            Canada, or if they are a non-resident, that they have paid any taxes owed payable under the non-residency provisions of the Income Tax Act.</p>
        </div>
        <div class="contract-text">
            <p><strong>16. RESIDENCY: </strong>Buyer shall be credited towards the Purchase Price with the amount, if any, necessary for Buyer to pay to
            the Minister of National Revenue to satisfy Buyer's liability in respect of tax payable by Seller under the non-residency
            provisions of the Income Tax Act by reason of this sale. Buyer shall not claim such credit if Seller delivers on completion
            the prescribed certificate or a statutory declaration that Seller is not then a non-resident of Canada.</p>
        </div>
        <div class="help-text">
            <p>17. ADJUSTMENTS: The following section states that certain charges applicable to the property such as property taxes or utilities will be
            adjusted on the completion day. The Buyer will assume responsibility beginning on the day of the completion of the sale.</p>
        </div>
        <div class="contract-text">
            <p><strong>17. ADJUSTMENTS: </strong>Any rents, mortgage interest, realty taxes including local improvement rates and unmetered public or
            private utility charges and unmetered cost of fuel, as applicable, shall be apportioned and allowed to the day of
            completion, the day of completion itself to be apportioned to Buyer.</p>
        </div>
        <div class="help-text">
            <p>18. PROPERTY ASSESSMENT: The property may be re-evaluated on an annual basis. Buyer and Seller agree that change may take place
            and salespeople can not be held responsible for any changes.</p>
        </div>
        <div class="contract-text">
            <p><strong>18. PROPERTY ASSESSMENT: </strong> The Buyer and Seller hereby acknowledge that the Province of Ontario has implemented current
            value assessment and properties may be re-assessed on an annual basis. The Buyer and Seller agree that no claim will be made
            against the Buyer or Seller, or any Brokerage, Broker or Salesperson, for any changes in property tax as a result of a re-assessment
            of the property, save and except any property taxes that accrued prior to the completion of this transaction.</p>
        </div>
        <div class="help-text">
            <p>19. TIME LIMITS: All deadlines must be met according to the dates and times stated in this Agreement.</p>
        </div>
        <div class="contract-text">
            <p><strong>19. TIME LIMITS: </strong>Time shall in all respects be of the essence hereof provided that the time for doing or completing of any
            matter provided for herein may be extended or abridged by an agreement in writing signed by Seller and Buyer or by
            their respective lawyers who may be specifically authorized in that regard.</p>
        </div>
        <div class="help-text">
            <p>20. TENDER: In order to demonstrate that a party is ready, willing and able to complete a transaction, a party must produce certain items.
            For the Buyer it is generally money, for the Seller it will include things like a Transfer/Deed and keys. This paragraph sets out how
            each party performs their side</p>
        </div>
        <div class="contract-text">
            <p><strong>20. TENDER: </strong>Any tender of documents or money hereunder may be made upon Seller or Buyer or their respective lawyers
            on the day set for completion. Money may be tendered with funds drawn on a lawyer’s trust account in the form of a
            bank draft, certified cheque or wire transfer using the Large Value Transfer System. </p>
        </div>
        <div class="help-text">
            <p>21. FAMILY LAW ACT: The following section states that no spouse has a claim to this property other than a spouse who consented to the
            contract in the signature area set aside for that purpose.</p>
        </div>
        <div class="contract-text">
            <p><strong>21. FAMILY LAW ACT: </strong>Seller warrants that spousal consent is not necessary to this transaction under the provisions of the
            Family Law Act, R.S.O.1990 unless Seller's spouse has executed the consent hereinafter provided.</p>
        </div>
        <div class="help-text">
            <p>22. UFFI: The Seller warrants that while living on the property they have not used insulation containing ureaformaldehyde. Further, the
            Seller is not aware of that kind of insulation ever having been used on the property.</p>
        </div>
        <div class="contract-text">
            <p><strong>22. UFFI: </strong>Seller represents and warrants to Buyer that during the time Seller has owned the property, Seller has not caused
            any building on the property to be insulated with insulation containing ureaformaldehyde, and that to the best of Seller's
            knowledge no building on the property contains or has ever contained insulation that contains ureaformaldehyde. This
            warranty shall survive and not merge on the completion of this transaction, and if the building is part of a multiple unit
            building, this warranty shall only apply to that part of the building which is the subject of this transaction.</p>
        </div>
        <div class="help-text">
            <p>23. CONSUMER REPORTS: The following section notifies the Buyer that a personal or credit check may be obtained on the Buyer</p>
        </div>
        <div class="contract-text">
            <p><strong>23. CONSUMER REPORTS: The Buyer is hereby notified that a consumer report containing credit and/or
            personal information may be referred to in connection with this transaction.</strong></p>
        </div>
        <div class="help-text">
            <p>24. AGREEMENT IN WRITING: If there is any conflict or discrepancy between the pre-set portion of the Form and any provision added,
            then the added provision will supersede the pre-set portion. The following paragraph also confirms that no other agreements have
            been made other than what is contained in this Agreement.</p>
        </div>
        <div class="contract-text">
            <p><strong>24. AGREEMENT IN WRITING: </strong>If there is conflict or discrepancy between any provision added to this Agreement (including any
            Schedule attached hereto) and any provision in the standard pre-set portion hereof, the added provision shall supersede the
            standard pre-set provision to the extent of such conflict or discrepancy. This Agreement including any Schedule attached hereto,
            shall constitute the entire Agreement between Buyer and Seller. There is no representation, warranty, collateral agreement or
            condition, which affects this Agreement other than as expressed herein. For the purposes of this Agreement, Seller means vendor
            and Buyer means purchaser. This Agreement shall be read with all changes of gender or number required by the context.</p>
        </div>
        <div class="help-text">
            <p>25. TIME AND DATE: Any time and date stated on this Agreement are based on the time where the property is located.</p>
        </div>
        <div class="contract-text">
            <p><strong>25. TIME AND DATE: </strong>Any reference to a time and date in this Agreement shall mean the time and date where the property is located.</p>
        </div>
        <div class="help-text">
            <p>26. SUCCESSORS AND ASSIGNS: In the event one of the parties to the Agreement dies, their heirs or executors are bound by the Agreement.</p>
        </div>
        <div class="contract-text">
            <p><strong>26. SUCCESSORS AND ASSIGNS: </strong>The heirs, executors, administrators, successors and assigns of the undersigned are
            bound by the terms herein.</p>
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
        <div class="contract-text">
            <p><strong>SPOUSAL CONSENT: The Undersigned Spouse of the Seller hereby consents to the disposition evidenced herein pursuant
            to the provisions of the Family Law Act, R.S.O.1990, and hereby agrees with the Buyer that he/she will execute all necessary
            or incidental documents to give full force and effect to the sale evidenced herein.</strong></p>
        </div>
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
        <div class="contract-text">
            <p><strong>CONFIRMATION OF ACCEPTANCE:</strong>Notwithstanding anything contained herein to the contrary, I confirm this Agreement with all
            changes both typed and written was finally accepted by all parties at this day {{agreementDate}}</p>
        </div>
        <div class="signatures container">
            <p>Signature of Seller or Buyer ________________________</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import copy from '../copy/copy.json'

export default {
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

<style lang="scss">
    .contract-text span {
        float: right;
    }
</style>