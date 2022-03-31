<template>
    <div>User Page</div>

    <div>
        <router-link to="/user/post"> Go to User Post </router-link>
    </div>

    <div>
        <router-link to="/user/profile"> Go to User Profile </router-link>
    </div>

    <router-view></router-view>
</template>

<script>
export default {
    name: 'UserPage',
    props: {},
    //
    mounted() {
        console.log('mounted');
    },
};
</script>

<style lang="scss"></style>
