import {defineStore} from 'pinia';
import TokenService from '@/services/token-service';
import apiClient from '@/services/api-client';

export default defineStore({
    id: 'auth',
    state: () => ({
        errors: {},
        user: {},
        isAuthenticated: TokenService.getToken() !== null
    }),
    actions: {
        async login(credentials) {
            return new Promise(async resolve => {
                const response = await apiClient.post('/api/login', credentials);
                this.setLoggedIn(response.data.user);
                resolve(response.data.user);
            });
        },
        logout() {
            return new Promise(async resolve => {
                await apiClient.post('/api/logout');
                TokenService.destroyToken();
                resolve();
            })
        },
        setLoggedIn(user) {
            this.isAuthenticated = true;
            this.user = user;
            this.errors = {};
            TokenService.saveToken(this.user.token);
            apiClient.refreshToken();
        },
    }
});
