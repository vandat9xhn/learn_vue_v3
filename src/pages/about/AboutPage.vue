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

    <teleport v-if="show_modal" to="#portal">
        <div class="about-portal">
            <div>
                <button type="button" @click="leaveRoute">Yes</button>
            </div>

            <div>
                <button type="button" @click="closeModal">No</button>
            </div>
        </div>
    </teleport>
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
            show_modal: false,
            _next: (is_next = true) => {},
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

        //
        leaveRoute() {
            this._next();
        },
        closeModal() {
            this._next(false);
            this.show_modal = false;
        },
    },
    //
    mounted() {
        this.changeCompanyName();
        store.dispatch('fetchCountCart');
    },
    beforeRouteLeave(to, from, next) {
        this.show_modal = true;
        this._next = next;
    },
    unmounted() {
        // console.log(this.company_name);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './AboutPage.scss';
</style>
