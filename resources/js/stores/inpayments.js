import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'inpayments',
    state: () => ({
        errors: {},
        inpayment: null,
        inpayments: []
    }),
    actions: {
        async fetchById(id) {
            const { data } = await apiClient.get(`/api/inpayments/${id}`);
            this.inpayment = data.inpayment;
        },
        async fetchAll() {
            const response = await apiClient.get('/api/inpayments');

            if (response !== undefined) {
                this.inpayments = response.data.inpayments;
            }
        },
        async update(inpayment) {
            try {
                await apiClient.patch(`/api/inpayments/${inpayment.id}`, inpayment);
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        },
        async store(inpayment) {
            try {
                const response = await apiClient.post('/api/inpayments', inpayment);
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        }
    }
});
