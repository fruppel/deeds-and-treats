import {ERRORS_SET_ERRORS} from '../types/mutations';

const state = {
    errors: {},
}

const getters = {
    errors(state) {
        return state.errors;
    }
};

const mutations = {
    [ERRORS_SET_ERRORS](state, errors) {
        state.errors = errors;
    }
}
