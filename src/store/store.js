import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        seller: {
            legalName: '',         
        },
        property: {
            streetNumber: '',
            streetName: '',
            city: '',
            province: '',
            postal: '',
            country: 'Canada'
        },
    },
    getters: {
        value: state => {
            return state.value;
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
        propertyProvince: state => {
            return state.property.province;
        },
        propertyPostal: state => {
            return state.property.postal;
        }
    },
    mutations: {
        updateMessage(state, message) {
            state.obj.message = message
        },
        updateValue: (state, payload) => {
            state.value = payload;
        },
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
        }
    },
    actions: {
        updateValue({commit}, payload) {
            commit('updateValue', payload);
        },
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
        }
    }
});