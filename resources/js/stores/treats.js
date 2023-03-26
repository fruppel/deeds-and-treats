import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'treats',
    state: () => ({
        treats: [],
    }),
    getters: {
        unlockableTreats(state) {
            return state.treats.filter(treat => treat.unlocked === null);
        },
    },
    actions: {
        async fetchAll() {
            const response = await apiClient.get('/api/treats');

            if (response !== undefined) {
                this.treats = response.data;
            }
        }
    }
});
