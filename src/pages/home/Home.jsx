import React from 'react'

import BannerSection from '../../components/bannerSection';
import ItemCity from '../../components/ItemsCity';

import axios from 'axios'

import { useTranslation } from 'react-i18next';

import { useSelector, useDispatch } from 'react-redux';
import { getCitiesThunk } from '../../redux/reducers/Cities'



const Home = () => {

    const {t} = useTranslation()
    const citiesReducer = useSelector(s=>s.citiesReducer.cities)
    const dispatch = useDispatch()

  
    

    const fetchData  = async ()=>{
        try {
            let result = await axios.get(`https://18.198.94.122/api/getCitiesWithTour`)
            if(result.data.status === 200){  
                //setCitys(result.data.data)
            }else {
                console.error("Ошибка при получении данных о городах:", result.data.message);
            }

        }catch(error){
            console.error("Произошла ошибка при выполнении запроса:", error);
        }
    }



    React.useEffect(()=>{
        //fetchData()
        dispatch(getCitiesThunk())
    },[])



    return (
        <div>
            <BannerSection />
            <ItemCity 
                citys={citiesReducer} 
                fetchData={fetchData}/>
        </div>
    )
}



export default Home;