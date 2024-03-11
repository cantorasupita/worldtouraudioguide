import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {loginAPI} from '../../api/userAPI';



const initialState = {
    isAuth: localStorage.getItem('token') !== null && localStorage.getItem('token') !== '',//trun || false
    token:  localStorage.getItem('token') || '',
    status: '',
    error: null,
    message: ''

}


//login----------------------------------------------------------------------------------------
export const loginThunk = createAsyncThunk(
    'auth/loginUser',
    async  (data, thunkAPI) => {
        //console.log(data)
      try{
        const response = await  loginAPI(data);
        //console.log( response)
       if(response.data.status === 200) {
           // console.log("200")
            return response
        }
        if(response.data.status == 'Failed!'){  //nui drept parolul sau email
           // console.log('Failed!')
            return thunkAPI.rejectWithValue(response.data.message);
        }
        if(response.data.status == '422'){  //nui parolul sau email
          //  console.log('422')
            return thunkAPI.rejectWithValue(response.data.message);
        }
      }catch(err){
       // console.log('ERROR')
          return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  );


 






//====================================================================================
const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                    state.status = 'loading'
                    state.isAuth = false
            })
            .addCase(loginThunk .fulfilled, (state, action) =>{
                //console.log(action, 'SUCCES')
                state.status = 'succeeded';
                state.isAuth = true
                localStorage.setItem('token', action.payload.data.data.user_token)
            })
            .addCase(loginThunk.rejected, (state, action) => {
                //console.log('REJECT')
                state.status = 'failed';
                state.error = action
                state.isAuth = false
                localStorage.removeItem('token');
                state.message = action.payload
 
            })
    }
})


export default AuthSlice.reducer;