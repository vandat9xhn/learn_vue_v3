<template>
    <div class="UserPage">
        <div>User Page</div>

        <div>
            <router-link to="/user/post"> Go to User Post </router-link>
        </div>

        <div>
            <router-link to="/user/profile"> Go to User Profile </router-link>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'UserPage',
    props: {},
    //
    mounted() {},
};
</script>

<style lang="scss">
.UserPage {
    padding: 25px 10px;
}
</style>
