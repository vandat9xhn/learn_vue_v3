import { createStore } from 'vuex';
//
import storeUserActions from './user/actions';
import storeUserGetters from './user/getters';
import storeUserMutations from './user/mutations';
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
        user: {
            state: {
                first_name: '',
                last_name: '',
            },
            getters: storeUserGetters,
            mutations: storeUserMutations,
            actions: storeUserActions,
        },
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
