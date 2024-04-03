import $host from './index.js';
import axios from 'axios';


export const  loginAPI = async (data) => {
    const {emailValid, passwordValid} = data;
    let result = await $host.post(`/login`, {input_email: emailValid, input_password: passwordValid})
    return  result;
}


export const logoutAPI = async () => {
    let result = await $host.post(`/signOut`)
    return result
}