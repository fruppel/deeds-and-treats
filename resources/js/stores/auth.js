import {defineStore} from 'pinia';
import TokenService from '@/services/token-service';
import apiClient from '@/services/api-client';

export default defineStore('auth', {
    state: () => ({
        errors: {},
        user: {},
        isAuthenticated: TokenService.getToken() !== null
    }),
    actions: {
        async login(credentials) {
            try {
                const response = await apiClient.post('/api/login', credentials);
                this.setLoggedIn(response.data.user);
            } catch (error) {
                if (error.response.data.errors) {
                    this.errors = error.response.data.errors;
                }
            }
        },
        logout() {
            return new Promise(async resolve => {
                await apiClient.post('/api/logout');
                TokenService.destroyToken();
                resolve();
            })
        },
        async resetPassword(email) {
            try {
                const response = await apiClient.post('/api/forgot-password', email);
            } catch (error) {
                if (error.response.data.errors) {
                    this.errors = error.response.data.errors;
                }
            }
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
