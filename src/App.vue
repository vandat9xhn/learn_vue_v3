<template>
    <div>
        <HelloWorld msg="Welcome to Your Vue.js App">
            Hello slot

            <template #hello_slot_2="{ title }">
                Hello slot 2: {{ title }}
            </template>
        </HelloWorld>
    </div>

    <div>
        <router-link to="/"> Go to Home </router-link>
    </div>

    <div>
        <router-link to="/about"> Go to About </router-link>
    </div>

    <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
