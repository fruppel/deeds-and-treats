import apiClient from '../../services/api-client';
import {SAVINGS_FETCH} from '../types/actions';
import {SAVINGS_SET} from '../types/mutations';

const state = {
    savings: 0,
};

const getters = {
    savings(state) {
        return state.savings;
    }
};

const actions = {
    async [SAVINGS_FETCH](context) {
        const response = await apiClient.get('/api/savings');
        context.commit(SAVINGS_SET, response.data);
    }
};

const mutations = {
    [SAVINGS_SET](state, savings) {
        state.savings = savings;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
