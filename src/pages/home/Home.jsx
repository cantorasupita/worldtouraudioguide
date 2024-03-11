import React from 'react'

import BannerSection from '../../components/bannerSection';
import ItemCity from '../../components/ItemsCity';

import axios from 'axios'








const Home = () => {



    const [citys, setCitys] = React.useState(null)
    

    const fetchData  = async ()=>{
        try {
            let result = await axios.get(`https://18.198.94.122/api/getCitiesWithTour`)
            if(result.data.status === 200){  
                setCitys(result.data.data)
            }else {
                console.error("Ошибка при получении данных о городах:", result.data.message);
            }

        }catch(error){
            console.error("Произошла ошибка при выполнении запроса:", error);
        }
    }



    React.useEffect(()=>{
        fetchData()
    },[])



    return (
        <div>
            <BannerSection />
            <ItemCity 
                citys={citys} 
                fetchData={fetchData}/>
        </div>
    )
}



export default Home;