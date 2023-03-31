import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'statistics',
    state: () => ({
        statisticsByYear: null,
    }),

    actions: {
        async receiveStatisticsByYear(year) {
            const { data } = await apiClient.get(`/api/statistics/${year}`);
            this.statisticsByYear = data;
        },
    },
});
