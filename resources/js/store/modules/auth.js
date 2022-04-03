import '../types/actions';
import '../types/mutations';
import TokenService from '../../services/token-service';
import apiClient from '../../services/api-client';
import {AUTH_CHECK, AUTH_LOGIN, AUTH_LOGOUT} from '../types/actions';
import {AUTH_SET_ERROR, AUTH_SET_USER} from '../types/mutations';

const state = {
    errors: {},
    user: {},
    isAuthenticated: TokenService.getToken() !== null
};

const getters = {
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {
    [AUTH_CHECK]() {
        return false;
    },

    [AUTH_LOGIN](context, credentials) {
        return new Promise(async resolve => {
            const response = await apiClient.post('/api/login', credentials);
            context.commit(AUTH_SET_USER, response.data.user);
            resolve(response.data.user);
        });
    },

    async [AUTH_LOGOUT](context) {
        await apiClient.post('/api/logout');
        TokenService.destroyToken();
    }
};

const mutations = {
    [AUTH_SET_USER](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        state.errors = {};
        TokenService.saveToken(state.user.token);
        apiClient.refreshToken();
    },

    [AUTH_SET_ERROR](state, error) {
        state.errors = error;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
