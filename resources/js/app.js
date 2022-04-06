import {createApp} from 'vue';
import {createPinia} from 'pinia';
import router from './router';
import AppContainer from './components/AppContainer.vue';
import LayoutApp from '@/layouts/LayoutApp';
import LayoutGuest from '@/layouts/LayoutGuest';
import {Workbox} from 'workbox-window';

createApp({})
    .component('LayoutApp', LayoutApp)
    .component('LayoutGuest', LayoutGuest)
    .component('app-container', AppContainer)
    .use(createPinia())
    .use(router)
    .mount('#app');

if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js');
    wb.register();
}
