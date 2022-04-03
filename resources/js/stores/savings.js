import {defineStore} from 'pinia';
import apiClient from '../services/api-client';

export default defineStore({
    id: 'savings',
    state: () => ({
        sum: 0,
    }),
    actions: {
        async fetch() {
            const response = await apiClient.get('/api/savings');
            this.sum = response.data;
        }
    }
});
