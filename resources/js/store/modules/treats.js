import apiClient from '../../services/api-client';
import {
    TREAT_FETCH_ALL,
    TREAT_FETCH_BY_ID,
    TREAT_STORE,
    TREAT_UPDATE
} from '../types/actions';
import {
    TREAT_SET_TREAT,
    TREAT_SET_TREATS,
    TREAT_SET_ERROR
} from '../types/mutations';

const state = {
    errors: {},
    treat: null,
    treats: []
};

const getters = {
    treat(state) {
        return state.treat;
    },

    treats(state) {
        return state.treats;
    },

    errors(state) {
        return state.errors;
    }
};

const actions = {
    async [TREAT_FETCH_BY_ID](context, id) {
        const { data } = await apiClient.get(`/api/treats/${id}/edit`);
        context.commit(TREAT_SET_TREAT, data.treat);
    },

    async [TREAT_FETCH_ALL](context) {
        const response = await apiClient.get('/api/treats');

        if (response !== undefined) {
            context.commit(TREAT_SET_TREATS, response.data.treats);
        }
    },

    async [TREAT_UPDATE](context, treat) {
        try {
            await apiClient.patch(`/api/treats/${treat.id}`, treat);
        } catch (error) {
            context.commit(TREAT_SET_ERROR, error.response.data.errors);
        }
    },

    async [TREAT_STORE](context, treat) {
        try {
            await apiClient.post('/api/treats', treat);
        } catch (error) {
            context.commit(TREAT_SET_ERROR, error.response.data.errors);
        }
    },
};

const mutations = {
    [TREAT_SET_TREAT](state, treat) {
        state.treat = treat;
    },

    [TREAT_SET_TREATS](state, treats) {
        state.treats = treats;
    },

    [TREAT_SET_ERROR](state, errors) {
        state.errors = errors;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
