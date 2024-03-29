import Vuex from 'vuex'
import Vue from 'vue'
import { getField, updateField} from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        seller: {
            legalName: '',         
        },
        buyer: {
            legalName: 'Buyer Bob',
        },
        property: {
            streetNumber: '',
            streetName: '',
            city: '',
            province: '',
            postal: '',
            country: 'Canada',
            frontage: '',
            depth: '',
            legalDescription: '',
            chattelsIncluded: '',
            fixturesExcluded: '',
            rentalItems: ''
        },
        contract: {
            price: '',
            deposit: '',
            depositHolder: '',
            agreementDate: '',
            irrevocabilityDate: '',
            completionDate: '',
            requisitionDate: '',
            hasHst: false
        }
    },
    getters: {
        buyerName: state => {
            return state.buyer.legalName;
        },
        sellerName: state => {
            return state.seller.legalName;
        },
        propertyStreetNumber: state => {
            return state.property.streetNumber;
        },
        propertyStreetName: state => {
            return state.property.streetName;
        },
        propertyCity: state => {
            return state.property.city;
        },
        propertyCountry: state => {
            return state.property.country;
        },
        propertyProvince: state => {
            return state.property.province;
        },
        propertyPostal: state => {
            return state.property.postal;
        },
        propertyFrontage: state => {
            return state.property.frontage;
        },
        propertyDepth: state => {
            return state.property.depth;
        },
        propertyLegalDescription: state => {
            return state.property.legalDescription;
        },
        purchasePrice: state => {
            return state.contract.price;
        },
        depositAmount: state => {
            return state.contract.deposit;
        },
        depositHolder: state => {
            return state.contract.depositHolder;
        },
        chattelsIncluded: state => {
            return state.property.chattelsIncluded;
        },
        fixturesExcluded: state => {
            return state.property.fixturesExcluded;
        },
        rentalItems: state => {
            return state.property.rentalItems;
        },
        agreementDate: state => {
            return state.contract.agreementDate;
        },
        irrevocabilityDate: state => {
            return state.contract.irrevocabilityDate;
        },
        completionDate: state => {
            return state.contract.completionDate;
        },
        requisitionDate: state => {
            return state.contract.requisitionDate;
        },
        hasHst: state => {
            return state.contract.hasHst;
        },
        getField
    },
    mutations: {
        updateSellerName: (state, payload) => {
            state.seller.legalName = payload;
        },
        updatePropertyStreetNumber: (state, payload) => {
            state.property.streetNumber = payload;
        },
        updatePropertyStreetName: (state, payload) => {
            state.property.streetName = payload;
        },
        updatePropertyCity: (state, payload) => {
            state.property.city = payload;
        },
        updatePropertyProvince: (state, payload) => {
            state.property.province = payload;
        },
        updatePropertyPostal: (state, payload) => {
            state.property.postal = payload;
        },
        updatePropertyFrontage: (state, payload) => {
            state.property.frontage = payload;
        },
        updatePropertyDepth: (state, payload) => {
            state.property.depth = payload;
        },
        updatePropertyLegalDescription: (state, payload) => {
            state.property.legalDescription = payload;
        },
        updatePurchasePrice: (state, payload) => {
            state.contract.price = payload;
        },
        updateDepositAmount: (state, payload) => {
            state.contract.deposit = payload;
        },
        updateDepositHolder: (state, payload) => {
            state.contract.depositHolder = payload;
        },
        updateChattelsIncluded: (state, payload) => {
            state.property.chattelsIncluded = payload;
        },
        updateFixturesExcluded: (state, payload) => {
            state.property.fixturesExcluded = payload;
        },
        updateRentalItems: (state, payload) => {
            state.property.rentalItems = payload;
        },
        updateField
    },
    actions: {
        updateSellerName({commit}, payload) {
            commit('updateSellerName', payload);
        },
        updatePropertyStreetNumber({commit}, payload) {
            commit('updatePropertyStreetNumber', payload);
        },
        updatePropertyStreetName({ commit }, payload) {
            commit('updatePropertyStreetName', payload);
        },
        updatePropertyCity({ commit }, payload) {
            commit('updatePropertyCity', payload);
        },
        updatePropertyProvince({ commit }, payload) {
            commit('updatePropertyProvince', payload);
        },
        updatePropertyPostal({ commit }, payload) {
            commit('updatePropertyPostal', payload);
        },
        updatePropertyFrontage({ commit }, payload) {
            commit('updatePropertyFrontage', payload);
        },
        updatePropertyDepth({ commit }, payload) {
            commit('updatePropertyDepth', payload);
        },
        updatePropertyLegalDescription({ commit }, payload) {
            commit('updatePropertyLegalDescription', payload);
        },
        updatePurchasePrice({ commit }, payload) {
            commit('updatePurchasePrice', payload);
        },
        updateDepositAmount({ commit }, payload) {
            commit('updateDepositAmount', payload);
        },
        updateDepositHolder({ commit }, payload) {
            commit('updateDepositHolder', payload);
        },
        updateChattelsIncluded({ commit }, payload) {
            commit('updateChattelsIncluded', payload);
        },
        updateFixturesExcluded({ commit }, payload) {
            commit('updateFixturesExcluded', payload);
        },
        updateRentalItems({ commit }, payload) {
            commit('updateRentalItems', payload);
        }
    }
});