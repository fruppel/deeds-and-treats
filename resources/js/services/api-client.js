import axios from 'axios';
import router from '../router/index';

import TokenService from './token-service';

const apiClient = axios.create({
    withCredentials: true,
});

apiClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
apiClient.defaults.headers.common['Accept'] = 'application/json';
apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + TokenService.getToken();

apiClient.interceptors.response.use(null, async error => {
    if (error.response.status === 405) {
        console.error('Implement 405 error handling');
        return Promise.reject(error);
    }

    if (error.status === 403) {
        return router.push({
            path: '/login',
        });
    }

    return Promise.reject(error);
});

apiClient.refreshToken = () => {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + TokenService.getToken();
};

export default apiClient;

