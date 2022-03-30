import { createStore } from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
    state: {
        count: 0,
    },
    getters,
    mutations,
    actions,
});

export default store;
