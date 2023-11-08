import '../css/app.css';

import {createApp} from 'vue/dist/vue.esm-bundler';
import {createPinia} from 'pinia';
import router from './router';
import AppContainer from './components/AppContainer.vue';
import LayoutApp from '@/layouts/LayoutApp.vue';
import LayoutGuest from '@/layouts/LayoutGuest.vue';

createApp({})
    .component('LayoutApp', LayoutApp)
    .component('LayoutGuest', LayoutGuest)
    .component('app-container', AppContainer)
    .use(createPinia())
    .use(router)
    .mount('#app');
