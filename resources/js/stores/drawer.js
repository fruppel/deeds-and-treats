import {defineStore} from 'pinia';

export default defineStore('drawer', {
    state: () => ({
        drawerOpen: false,
        component: null,
        componentProps: null,
    }),
    actions: {
        open(component, componentProps = null) {
            this.setComponent(component, componentProps);
            this.drawerOpen = true;
        },

        close() {
            this.drawerOpen = false;
            this.setComponent(null);
        },

        setComponent(component, componentProps = null) {
            this.component = component;
            this.componentProps = componentProps;
        }
    }
});
