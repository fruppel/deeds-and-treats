import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'treats',
    state: () => ({
        errors: {},
        treat: null,
        treats: []
    }),
    actions: {
        async fetchById(id) {
            const { data } = await apiClient.get(`/api/treats/${id}`);
            this.treat = data.treat;
        },
        async fetchAll() {
            const response = await apiClient.get('/api/treats');

            if (response !== undefined) {
                this.treats = response.data;
            }
        },
        async update(treat) {
            try {
                await apiClient.patch(`/api/treats/${treat.id}`, treat);
            } catch (error) {
                this.errors = error.response.data.errors;
                throw error;
            }
        },
        async store(treat) {
            try {
                await apiClient.post('/api/treats', treat)
            } catch (error) {
                if (error.response.data.errors) {
                    this.errors = error.response.data.errors;
                }
                throw error;
            }
        }
    }
});
