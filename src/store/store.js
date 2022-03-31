import { createStore } from 'vuex';
//
import storeCommonActions from './count/actions';
import storeCommonGetters from './count/getters';
import storeCommonMutations from './count/mutations';
// 
import storeShopActions from './shop/actions';
import storeShopGetters from './shop/getters';
import storeShopMutations from './shop/mutations';

// 
const store = createStore({
    modules: {
        common: {
            state: {
                count: 0,
            },
            getters: storeCommonGetters,
            mutations: storeCommonMutations,
            actions: storeCommonActions,
        },
        shop: {
            state: {
                count_cart: 0,
                fetching_count_cart: false,
            },
            getters: storeShopGetters,
            mutations: storeShopMutations,
            actions: storeShopActions,
        },
    },
});

export default store;
