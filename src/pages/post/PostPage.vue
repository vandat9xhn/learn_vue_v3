<template>
    <h1>This is Post {{ post_id || '' }}</h1>

    <div>
        <input type="text" v-focus v-log />
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
//
import logHello from '../../directives/logHello.js';

export default {
    name: 'PostPage',
    directives: {
        log: logHello,
    },

    data() {
        return {
            post_id: 0,
        };
    },
    setup() {},
    //
    mounted() {
        console.log(this.$authorName);
        const router = useRouter();

        this.post_id = router.currentRoute.value.params['id'];
    },
};
</script>

<style lang="scss" scoped></style>
