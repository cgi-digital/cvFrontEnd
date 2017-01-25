export const API_URL = 'http://localhost:3000/api/';

/**
 * Client Configuration
 * @param axios   This parameter can be referenced to https://github.com/mzabriskie/axios#axioscreateconfig
 * @param options This parameter can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
 */
const apiConfig = { axios: { baseURL: API_URL, responseType: 'json' } };

export default apiConfig;