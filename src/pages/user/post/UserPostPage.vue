<template>
    <div>User Post Page</div>

    <div>
        <button type="button" @click="handleGotoProfile">
            Using a Function: Goto Post Profile
        </button>
    </div>
</template>

<script>
export default {
    name: 'UserPostPage',
    props: {},
    methods: {
        handleGotoProfile() {
            this.$router.push('/user/profile');
            console.log(this);
        },
    },
};
</script>

<style lang="scss"></style>
