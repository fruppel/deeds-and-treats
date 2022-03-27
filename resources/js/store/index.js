import { createStore } from 'vuex';
import drawer from './modules/drawer';
import deeds from './modules/deeds';
import auth from './modules/auth';

const store = createStore({
    modules: {
        drawer,
        auth,
        deeds
    }
});

export default store;
