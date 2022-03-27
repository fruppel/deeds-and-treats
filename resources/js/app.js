import {createApp} from 'vue';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';
import apiClient from './services/api-client';
import ListDeleteButton from './components/ListDeleteButton';
import CurrencyInput from './components/form/CurrencyInput';
import CurrencyInputWrapper from './components/form/CurrencyInputWrapper';
import MobileMenu from './components/layout/MobileMenu';
import HamburgerButton from './components/layout/HamburgerButton';

import AppContainer from './components/AppContainer';

createApp({})
    .component('mobile-menu', MobileMenu)
    .component('hamburger-button', HamburgerButton)
    .component('list-delete-button', ListDeleteButton)
    .component('currency-input', CurrencyInput)
    .component('currency-input-wrapper', CurrencyInputWrapper)
    .component('app-container', AppContainer)
    .use(store)
    .use(router)
    .use(VueAxios, {$api: apiClient})
    .mount('#app');

