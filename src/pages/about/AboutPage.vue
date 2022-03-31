<template>
    <div class="about">About</div>

    <!-- Inject -->
    <div style="padding: 10px">
        <div>Inject</div>

        <div>
            <span>
                {{ user.first_name }} {{ user.last_name }} {{ user.city }}
            </span>
        </div>
    </div>

    <!-- Data API -->
    <div>Company: {{ company_name }}</div>

    <!-- store -->
    <div @click="handleCountUp">Count up {{ count }}</div>

    <div>Shop Count cart {{ shop.count_cart }}</div>
    <div @click="handleCountUpCart">Count cart +1</div>
</template>

<script>
import store from '../../store/store';

export default {
    name: 'AboutPage',
    props: {},
    inject: ['user'],

    data() {
        return {
            company_name: '',
        };
    },
    computed: {
        count() {
            return store.state.common.count;
        },
        shop() {
            return store.state.shop;
        },
    },
    //
    methods: {
        async changeCompanyName() {
            const promise = () => {
                return new Promise((res) => {
                    setTimeout(() => {
                        res('ABC JSC');
                    }, 500);
                });
            };

            const new_company_name = await promise();

            this.company_name = new_company_name;
        },
        handleCountUp() {
            store.commit('countUp');
        },
        handleCountUpCart() {
            store.commit('changeCountCart', store.state.shop.count_cart + 1);
        },
    },
    //
    mounted() {
        this.changeCompanyName();
        store.dispatch('fetchCountCart');
    },
    beforeRouteLeave(to, from, next) {
        console.log(to, from);
        if (confirm()) {
            next();
        } else {
            next(false);
        }
    },
    unmounted() {
        // console.log(this.company_name);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
    padding: 15px;
}
</style>
