<template>
    <button class="BtnRounded" type="button" v-bind="btn_props">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BtnRounded',
    props: {
        btn_props: Object,
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
