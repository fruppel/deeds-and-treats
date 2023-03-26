import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'treat',
    state: () => ({
        treat: null,
        errors: {},
    }),

    actions: {
        async fetchById(id) {
            const {data} = await apiClient.get(`/api/treats/${id}`);
            this.treat = data.treat;
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
        },
        async destroy(treatId) {
            await apiClient.delete(`/api/treats/${treatId}`);
        },
        async divide(treatId, divideInto) {
            try {
                await apiClient.post(`/api/treat/divide/${treatId}`, {
                    divideInto
                });
                return true;
            } catch (error) {
                if (error.response.data.errors) {
                    this.errors = error.response.data.errors;
                }

                return false;
            }
        },
    },
});
