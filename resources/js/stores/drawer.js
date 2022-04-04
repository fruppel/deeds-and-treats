import {defineStore} from 'pinia';

export default defineStore({
    id: 'drawer',
    state: () => ({
        drawerOpen: false,
        component: null,
        componentProps: null,
    }),
    actions: {
        open(component, componentProps = null) {
            console.log(componentProps);
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
