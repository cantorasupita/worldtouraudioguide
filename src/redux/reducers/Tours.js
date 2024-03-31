import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {loginAPI, logoutAPI} from '../../api/userAPI';



const initialState = {
  tours: []
    
}








//====================================================================================
const ToursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {
        addTours: (state, action) => {
           state.tours = action.payload
        }

    },

})

export const { addTours } =  ToursSlice.actions
export default ToursSlice.reducer;