import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        seller: {
            legalName: 'Chris',         
        },
        property: {
            streetNumber: 8,
            streetName: 'Kintail Crescent',
            city: 'London',
            province: 'Ontario',
            postal: 'N6E1J5'
        },
        message: 'hello',
        value: 0
    },
    getters: {
        value: state => {
            return state.value;
        },
        sellerName: state => {
            return state.seller.legalName;
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
        }
    },
    actions: {
        updateValue({commit}, payload) {
            commit('updateValue', payload);
        },
        updateSellerName({commit}, payload) {
            commit('updateSellerName', payload);
        }
    }
});