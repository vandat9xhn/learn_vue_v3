<template>
    <div class="about">About</div>
</template>

<script>
export default {
    name: 'AboutPage',
    props: {},
    mounted() {
        console.log('mounted');
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
        console.log('unmounted');
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
