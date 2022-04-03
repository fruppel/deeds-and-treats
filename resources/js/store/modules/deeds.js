import apiClient from '../../services/api-client';
import {DEED_FETCH_ALL, DEED_FETCH_BY_ID, DEED_STORE, DEED_UPDATE} from '../types/actions';
import {DEEDS_SET_DEED, DEEDS_SET_DEEDS, ERRORS_SET_ERRORS} from '../types/mutations';

const state = {
    errors: {},
    deed: null,
    deeds: []
};

const getters = {
    deed(state) {
        return state.deed;
    },
    deeds(state) {
        return state.deeds;
    },
};

const actions = {
    async [DEED_FETCH_BY_ID](context, id) {
        const { data } = await apiClient.get(`/api/deeds/${id}/edit`);
        context.commit(DEEDS_SET_DEED, data.deed);
    },

    async [DEED_FETCH_ALL](context) {
        const response = await apiClient.get('/api/deeds');

        if (response !== undefined) {
            context.commit(DEEDS_SET_DEEDS, response.data.deeds);
        }
    },

    async [DEED_UPDATE](context, deed) {
        try {
            await apiClient.patch(`/api/deeds/${deed.id}`, deed);
        } catch (error) {
            context.commit(ERRORS_SET_ERRORS, error.response.data.errors);
        }
    },

    async [DEED_STORE](context, deed) {
        try {
            await apiClient.post('/api/deeds', deed);
        } catch (error) {
            context.commit(ERRORS_SET_ERRORS, error.response.data.errors);
        }
    },
};

const mutations = {
    [DEEDS_SET_DEED](state, deed) {
        state.deed = deed;
    },
    [DEEDS_SET_DEEDS](state, deeds) {
        state.deeds = deeds;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
