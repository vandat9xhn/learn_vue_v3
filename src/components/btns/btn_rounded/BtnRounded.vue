<template>
    <button :class="class_btn" type="button" v-bind="btn_props">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BtnRounded',
    props: {
        btn_props: {
            default() {
                return {};
            },
            type: Object,
        },
    },
    data() {
        return {
            class_btn: 'BtnRounded',
        };
    },
};
</script>

<style scoped>
.BtnRounded {
    padding: 5px 12px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
