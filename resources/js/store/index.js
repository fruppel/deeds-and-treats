import { createStore } from 'vuex';
import auth from './modules/auth';
import deedlogs from './modules/deedlogs';
import deeds from './modules/deeds';
import drawer from './modules/drawer';
import savings from './modules/savings';
import treats from './modules/treats';

const store = createStore({
    modules: {
        auth,
        deedlogs,
        deeds,
        drawer,
        savings,
        treats
    }
});

export default store;
