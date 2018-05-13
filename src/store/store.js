import Vue from 'vue';
import Vuex from 'vuex';
import Stocks from './modules/Stocks';
Vue.use(Vuex);
export const store = new Vuex.Store({
modules:{
    Stocks
}
})