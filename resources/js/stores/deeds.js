import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'deeds',
    state: () => ({
        errors: {},
        deed: null,
        deeds: []
    }),
    actions: {
        async fetchById(id) {
            const { data } = await apiClient.get(`/api/deeds/${id}/edit`);
            this.deed = data.deed;
        },
        async fetchAll() {
            const response = await apiClient.get('/api/deeds');

            if (response !== undefined) {
                this.deeds = response.data.deeds;
            }
        },
        async update(deed) {
            try {
                await apiClient.patch(`/api/deeds/${deed.id}`, deed);
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        },
        async store(deed) {
            try {
                await apiClient.post('/api/deeds', deed);
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        }
    }
});
