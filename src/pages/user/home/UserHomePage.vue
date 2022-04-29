<template>
    <div>User Home Page</div>

    <BtnRoundedVue
        :btn_props="{
            class: 'user-home_btn',
            type: 'button',
            onclick: handleShowModal,
        }"
    >
        Open Modal
    </BtnRoundedVue>

    <teleport v-if="show_modal" to="#portal">
        <div class="UserHome_portal">
            <div class="UserHome_portal_contain">
                <div>Hello Portal</div>

                <div>
                    <button type="button" @click="handleClosePortal">
                        Close portal
                    </button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import BtnRoundedVue from '../../../components/btns/btn_rounded/BtnRounded.vue';

export default {
    name: 'UserHomePage',
    components: { BtnRoundedVue },
    data() {
        return { show_modal: false };
    },
    props: {},
    methods: {
        handleShowModal() {
            this.show_modal = true;
        },
        handleClosePortal() {
            this.show_modal = false;
        },
    },
};
</script>

<style lang="scss">
.UserHome_portal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.25);
}

.UserHome_portal_contain {
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
}
</style>
