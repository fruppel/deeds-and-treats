import axios from 'axios';
import router from '../router/index';

import TokenService from './token-service';

const apiClient = axios.create({
    withCredentials: true,
});

apiClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
apiClient.defaults.headers.common['Accept'] = 'application/json';
apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + TokenService.getToken();

apiClient.interceptors.response.use(null, async response => {
    return router.push({
        path: '/login',
    });
});

apiClient.refreshToken = () => {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + TokenService.getToken();
};

export default apiClient;

