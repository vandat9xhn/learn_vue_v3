//
const storeShopMutations = {
    changeCountCart(state, payload) {
        state.count_cart = payload;
    },
    changeFetchingCountCart(state, payload) {
        state.fetching_count_cart = payload;
    },
};

export default storeShopMutations;
