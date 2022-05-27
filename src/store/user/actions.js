const getDataUser = () => {
    return new Promise(res => {
        setTimeout(() => {
            res({first_name: 'Nguyen', last_name: 'Dat'})
        }, 250);
    })
}

const storeUserActions = {
    async fetchUser({ commit }) {
        const data = await getDataUser()

        commit('fetchUser', data);
    },
};

export default storeUserActions;
