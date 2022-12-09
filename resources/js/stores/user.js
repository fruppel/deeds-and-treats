import {defineStore} from 'pinia';
import apiClient from '../services/api-client';

export default defineStore({
    id: 'user',
    state: () => ({
        savings: 0,
        intersectionThreeDays: 0,
        intersectionTenDays: 0,
        maxSavingsPerDay: 0,
        costsAll: 0,
        costsSpent: 0,
        costsOpen: 0,
        activeTreat: {},
    }),
    getters: {
        available: (state) => state.savings - state.costsSpent,
        activeReached(state) {
            if (state.activeTreat.unlocked !== null) {
                return 1;
            }

            return Math.min(1, this.available / state.activeTreat.costs);
        },
        activeRest(state) {
            return Math.max(0, state.activeTreat.costs - this.available);
        },
        activeEtaThreeDays(state) {
            return Math.round(this.activeRest / state.intersectionThreeDays);
        },
        activeEtaTenDays(state) {
            return Math.round(this.activeRest / state.intersectionTenDays);
        },
        openEtaThreeDays(state) {
            return Math.round((state.costsOpen - state.available) / state.intersectionThreeDays);
        },
        openEtaTenDays(state) {
            return Math.round((state.costsOpen - state.available) / state.intersectionTenDays);
        },
        openEtaMax(state) {
            return Math.round((state.costsOpen - state.available) / state.maxSavingsPerDay);
        },
        hasActiveTreat: (state) => state.activeTreat && Object.keys(state.activeTreat).length !== 0,
        canUnlock(state) {
            return this.hasActiveTreat && this.available >= state.activeTreat.costs;
        },
    },
    actions: {
        async fetch() {
            const response = await apiClient.get('/api/user');
            this.savings = response.data.savings;
            this.intersectionThreeDays = response.data.intersectionThreeDays;
            this.intersectionTenDays = response.data.intersectionTenDays;
            this.maxSavingsPerDay = response.data.maxSavingsPerDay;
            this.costsAll = response.data.costsAll;
            this.costsSpent = response.data.costsSpent;
            this.costsOpen = response.data.costsOpen;
            this.activeTreat = response.data.activeTreat;
        },
        async setActiveTreat(treat) {
            const response = await apiClient.post(`/api/activetreat/${treat.id}`)
            await this.fetch();
        },
        async removeActiveTreat() {
            const response = await apiClient.delete('/api/activetreat');
            await this.fetch();
        },
        async unlock() {
            const response = await apiClient.post('/api/unlock/' + this.activeTreat.id);
            await this.fetch();
        }
    }
});
