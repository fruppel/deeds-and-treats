import {defineStore} from 'pinia';

export default defineStore({
    id: 'toast',

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
