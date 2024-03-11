import $host from './index.js';
import axios from 'axios';


export const  loginAPI = async (data) => {
    const {email, password} = data;
    let result = await $host.post(`/login`, {input_email: email, input_password:password})
    return  result;
}


