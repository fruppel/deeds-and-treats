import {defineStore} from 'pinia';

export default defineStore('toast', {
    state: () => ({
        message: null,
    }),

    actions: {
        show(message, timeout = 2000) {
            this.message = message;

            setTimeout(() => {
                this.message = null;
            }, timeout);
        }
    },
});
