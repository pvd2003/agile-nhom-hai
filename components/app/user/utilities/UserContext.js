import React, { createContext, useState } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await AxiosInstance().get('/user/login', body)
            console.log('Login response: ', response)
            setIsLoggedIn(true);
            return true;
        } catch (error) {
            console.log('Login error', error)
        }
        return false;
    }

    const register = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await AxiosInstance().post('/user/signup', body)
            console.log('Register response: ', response)
            return true;
        } catch (error) {
            console.log('Register error', error)
        }
        return false;
    }

    return (
        <UserContext.Provider
            value={{
                isLoggedIn, setIsLoggedIn,
                login, register
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext