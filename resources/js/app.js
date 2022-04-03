import {createApp} from 'vue';
import {createPinia} from 'pinia';
import VueAxios from 'vue-axios';
import router from './router';
import apiClient from './services/api-client';
import CurrencyInput from './components/form/CurrencyInput';
import CurrencyInputWrapper from './components/form/CurrencyInputWrapper';
import MobileMenu from './components/layout/MobileMenu';
import HamburgerButton from './components/layout/HamburgerButton';
import AppContainer from './components/AppContainer.vue';

createApp({})
    .component('mobile-menu', MobileMenu)
    .component('hamburger-button', HamburgerButton)
    .component('currency-input', CurrencyInput)
    .component('currency-input-wrapper', CurrencyInputWrapper)
    .component('app-container', AppContainer)
    .use(createPinia())
    .use(router)
    .use(VueAxios, {$api: apiClient})
    .mount('#app');

