import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'






export const getCitiesThunk = createAsyncThunk(
  'getTours',
  async (data, thunkAPI) => {
      try {
          let response = await axios.get(`https://18.198.94.122/api/getCitiesWithTour`)
          //let response =  await axios.get(`./cities.json`);
          if(response.data.status === 200){  
            return response.data.data
        }
      }catch(err){
          return thunkAPI.rejectWithValue(err.response.data);
      }
  }
);



const initialState = {
  cities: [],
  searchCity: [],
  status: '',
  error: ''  
}








//====================================================================================
const CitiesSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {
        filterTours: (state, action) => {
          // Принимаем критерий фильтрации как payload
          const filterCriteria = action.payload;
          const filteredCities = state.cities.filter(tour => {
            return tour.country === filterCriteria;
        });
           // Если ничего не найдено, присваиваем пустой массив
           state.cities = filteredCities.length > 0 ? filteredCities : [];
      }

    },
    extraReducers: (builder) => {
      builder
          .addCase(getCitiesThunk.pending, (state) => {
              state.status = 'loading'
          })
          .addCase(getCitiesThunk.fulfilled, (state, action) =>{
              console.log(action, 'SUCCES')
              state.cities = action.payload
              state.searchCity = action.payload
          })
          .addCase(getCitiesThunk.rejected, (state, action) => {
              console.log('REJECT')
              state.status = 'failed';


          })


  }

})

export const { filterTours } =  CitiesSlice.actions
export default CitiesSlice.reducer;