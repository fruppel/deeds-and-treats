const TOKEN_KEY = 'tad_token';

export const getToken = () => {
    return window.localStorage.getItem(TOKEN_KEY);
};

export const saveToken = token => {
    return window.localStorage.setItem(TOKEN_KEY, token);
};

export const destroyToken = () => {
    window.localStorage.removeItem(TOKEN_KEY);
}

export default {
    getToken,
    saveToken,
    destroyToken
};
