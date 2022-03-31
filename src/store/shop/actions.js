//
const API_CountCart = () =>
    new Promise((res) => {
        setTimeout(() => {
            res(Math.round(Math.random() + 0.5) * 10);
        }, 250);
    });

//
const storeShopActions = {
    async fetchCountCart(store) {
        if (store.state.fetching_count_cart) {
            return;
        }

        store.commit('changeFetchingCountCart', true);
        const new_count_cart = await API_CountCart();

        store.commit('changeCountCart', new_count_cart);
        store.commit('changeFetchingCountCart', false);
    },
};

export default storeShopActions;
