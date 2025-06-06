import {defineStore} from 'pinia';
import apiClient from '@/services/api-client';

export default defineStore('treatsFiltered', {
    state: () => ({
        treats: [],
        sort: {
            by: null,
            direction: null,
        },
        filter: null,
    }),
    getters: {
        combinedSort() {
            if (this.sort.by !== null && this.sort.direction !== null) {
                return `${this.sort.by}_${this.sort.direction}`;
            }

            return null;
        }
    },
    actions: {
        async fetch() {
            const response = await apiClient.get('/api/treats', {
                params: {
                    sortBy: this.sort.by,
                    sortDirection: this.sort.direction,
                    filter: this.filter,
                }
            });

            if (response !== undefined) {
                this.treats = response.data;
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
            await this.fetch();
        },

        /**
         * @param {String} filter
         * @returns {Promise<void>}
         */
        async applyFilter(filter) {
            this.filter = filter;
            await this.fetch();
        }
    }
});
