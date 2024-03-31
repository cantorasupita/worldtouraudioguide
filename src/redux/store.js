import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/Auth'
import toursReducer from './reducers/Tours'


export const store = configureStore({
    reducer: {
        authReducer,
        toursReducer,
    }
})