import axios from 'axios';

const api = axios.create({
    baseURL: 'https://psad9m6vrj.execute-api.sa-east-1.amazonaws.com/test',
    headers: { 
        'Authorization': 'Basic cG91cGFjaGVmLXRlc3Q6ZGQzZWQ5MGUtNjY3Zi00MjQ4LWE2NzEtOTI2NjI2MWRiYTVi',
        // 'Content-Type': 'multipart/form-data'
    }
})

export default api;