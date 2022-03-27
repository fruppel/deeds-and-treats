import { DRAWER_OPEN, DRAWER_CLOSE } from '../types/actions';
import { DRAWER_SET_COMPONENT, DRAWER_SET_OPEN} from '../types/mutations';

const state = {
    drawerOpen: false,
    component: null,
    componentProps: null,
};

const getters = {
    drawerOpen(state) {
        return state.drawerOpen;
    },
    component(state) {
        return state.component;
    },
    componentProps(state) {
        return state.componentProps;
    }
};

const actions = {
    [DRAWER_OPEN](context, {component, componentProps}) {
        console.log(componentProps);
        context.commit(DRAWER_SET_OPEN, true);
        context.commit(DRAWER_SET_COMPONENT, {component, componentProps});
    },

    [DRAWER_CLOSE](context) {
        console.log(context);
        console.log(DRAWER_SET_OPEN);
        context.commit(DRAWER_SET_OPEN, false)
        context.commit(DRAWER_SET_COMPONENT, {component: null, componentProps: null});
    },
};

const mutations = {
    [DRAWER_SET_OPEN](context, isOpen) {
        context.drawerOpen = isOpen;
    },

    [DRAWER_SET_COMPONENT](context, {component, componentProps}) {
        context.component = component;
        context.componentProps = componentProps;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
