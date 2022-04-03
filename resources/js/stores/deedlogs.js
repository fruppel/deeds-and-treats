import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'deedlogs',
    state: () => ({
        deedlogs: [],
    }),
    actions: {
        async fetchAll() {
            const response = await apiClient.get('/api/deedlogs');

            if (response !== undefined) {
                this.deedlogs = response.data;
            }
        },
        async store(payload) {
            await apiClient.post('/api/deedlogs', payload);
        },
        async destroy(deedId) {
            await apiClient.delete(`/api/deedlogs/${deedId}`);
        }
    }
});
