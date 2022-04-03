import {DEEDLOG_DESTROY, DEEDLOG_FETCH_ALL, DEEDLOG_STORE} from '../types/actions';
import apiClient from '../../services/api-client';
import {DEEDLOG_SET_DEEDLOGS} from '../types/mutations';

const state = {
    deedlogs: [],
};

const getters = {
    deedlogs(state) {
        return state.deedlogs;
    }
};

const actions = {
    async [DEEDLOG_FETCH_ALL](context) {
        const response = await apiClient.get('/api/deedlogs');

        if (response !== undefined) {
            context.commit(DEEDLOG_SET_DEEDLOGS, response.data);
        }
    },
    async [DEEDLOG_STORE](context, payload) {
        await apiClient.post('/api/deedlogs', payload);
    },
    async [DEEDLOG_DESTROY](context, deedId) {
        await apiClient.delete(`/api/deedlogs/${deedId}`);
    }
};

const mutations = {
    [DEEDLOG_SET_DEEDLOGS](state, deedlogs) {
        state.deedlogs = deedlogs;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
