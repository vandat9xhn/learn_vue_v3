<template>
  <div v-if="has_detected_login">
    <div>
      <hello-world msg="Welcome to Your Vue.js App">
        Hello slot

        <template #hello_slot_2="{ title }">
          Hello slot 2: {{ title }}
        </template>
      </hello-world>
    </div>

    <div>
      <router-link to="/"> Go to Home </router-link>
    </div>

    <div>
      <router-link to="/about"> Go to About </router-link>
    </div>

    <div>
      <router-link to="/user"> Go to User </router-link>
    </div>

    <div>
      <router-link to="/post/1"> Go to Post </router-link>
    </div>

    <router-view></router-view>
  </div>

  <div v-if="!has_detected_login">Loading....</div>
</template>

<script>
import { useRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import store from './store/store';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      has_detected_login: false,
    };
  },
  provide() {
    return {
      user: {
        first_name: 'Nguyen',
        last_name: 'My',
        city: 'HN',
      },
    };
  },
  methods: {},
  //
  async beforeCreate() {
    await store.dispatch('fetchUser');
    this.has_detected_login = true;
    const { first_name } = store.state.user;

    if (this.$route.meta.auth && !first_name) {
      this.$router.replace('/');
    }
  },
  //
  mounted() {
    this.$router.afterEach((to) => {
      const { first_name } = store.state.user;
      // console.log(first_name, to);
      console.log(to.meta.auth);
      if (to.meta.auth && !first_name) {
        this.$router.push('/');
      }
    });

    // const router = useRouter();
    // console.log(router);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
