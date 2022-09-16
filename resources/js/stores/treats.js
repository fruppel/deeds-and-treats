import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'treats',
    state: () => ({
        errors: {},
        treat: null,
        treats: [],
        sort: {
            by: null,
            direction: null,
        },
    }),
    getters: {
        unlockableTreats(state) {
            return state.treats.filter(treat => treat.unlocked === null);
        },
    },
    actions: {
        async fetchById(id) {
            const { data } = await apiClient.get(`/api/treats/${id}`);
            this.treat = data.treat;
        },
        async fetchAll() {
            const response = await apiClient.get('/api/treats', {
                params: {
                    sortBy: this.sort.by,
                    sortDirection: this.sort.direction,
                }
            });

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
        /**
         * @param {String} by
         * @param {String} direction
         * @returns {Promise<void>}
         */
        async applySort(by, direction) {
            this.sort.by = by;
            this.sort.direction = direction;
            await this.fetchAll();
        }
    }
});
