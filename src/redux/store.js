import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/Auth'
import citiesReducer from './reducers/Cities'


export const store = configureStore({
    reducer: {
        authReducer,
        citiesReducer,
    }
})