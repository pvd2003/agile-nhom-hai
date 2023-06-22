import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL:'http://192.168.140.2:3000'
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            const token = await AsyncStorage.getItem('token');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;