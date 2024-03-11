import axios from 'axios';



const $host = axios.create({
    baseURL: `https://18.198.94.122/api`
})

//функция интерцептер
//подставляем токен к Гет запросу
export const  authInterceptor = config =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

// $authHost + JWT интерцептер
$host.interceptors.request.use(authInterceptor)


export default $host;