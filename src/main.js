import { createApp } from 'vue';
//
import App from './App.vue';
import { router } from './router';
import store from './store/store';

import focus from './directives/focus';
import authorName from './plugins/authorName';

const app = createApp(App);
app.use(router);
app.use(store);

app.directive('focus', focus);
app.use(authorName);

app.mount('#app');
