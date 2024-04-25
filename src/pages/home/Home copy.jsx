import React from 'react'

import BannerSection from '../../components/bannerSection';
import ItemCity from '../../components/ItemsCity';

import axios from 'axios'

import { useTranslation } from 'react-i18next';


let orashe = {
    "message": "success",
    "status": 200,
    "data": [
        {
            "id": 76113,
            "name": "Kyiv",
            "image": "https://media.istockphoto.com/id/1496247266/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0-%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0-%D0%B4%D0%BD%D1%96%D0%BF%D1%80%D0%B0-%D0%B2-%D0%BA%D0%B8%D1%94%D0%B2%D1%96-%D0%B2-%D1%81%D0%BE%D0%BD%D1%8F%D1%87%D0%BD%D0%B8%D0%B9-%D0%BB%D1%96%D1%82%D0%BD%D1%96%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BA%D0%B8%D1%97%D0%B2-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0.jpg?s=1024x1024&w=is&k=20&c=uQp2bLo-y8U1SfSzM_L9ItaZQjM0sx4XbbR5X5IJFJw=",
            "country": "Ucraina",
            "draft": 1,
            "new": 0,
            "actualization": 2,
            "admin_published": 0,
            "tour_count": 3
        },
        {
            "id": 761133,
            "name": " Kampala",
            "image": "https://media.istockphoto.com/id/1256870479/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%B0%D0%BC%D0%BF%D0%B0%D0%BB%D0%B0.jpg?s=612x612&w=0&k=20&c=-1lkJx3PBvfdVcBmID25gQd-KdjuA8al9nwZOVxnVvU=",
            "country": "Uganda",
            "draft": 1,
            "new": 0,
            "actualization": 2,
            "admin_published": 0,
            "tour_count": 1
        },
      {
        "id": 77414,
        "name": "Rotterdam",
        "image": "https://18.198.94.122/storage/city/V4nZSFBGwANMoqFXFUmC5iMes7ZznwrdRiOViWWB.jpg",
        "country": "Netherlands",
        "draft": 2,
        "new": 0,
        "actualization": 2,
        "admin_published": 0,
        "tour_count": 4
      },
      {
        "id": 147421,
        "name": "The Hague",
        "image": "https://18.198.94.122/storage/city/3es254ynqGzJWhBuMzIkG6jucb65OY5w8q5KGii6.jpg",
        "country": "Netherlands",
        "draft": 0,
        "new": 1,
        "actualization": 1,
        "admin_published": 0,
        "tour_count": 2
      },
      {
        "id": 76112,
        "name": "Amsterdam",
        "image": "https://18.198.94.122/storage/city/ZIrfu0F6FuDEoAokiWV7TYNNHzn2jaHnxRWUJ7CQ.jpg",
        "country": "Netherlands",
        "draft": 1,
        "new": 0,
        "actualization": 2,
        "admin_published": 0,
        "tour_count": 3
      },
   
    ]
  }



const Home = () => {

    const {t} = useTranslation()

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

const orasheFunc = () => {
    setCitys(orashe.data)
}

    React.useEffect(()=>{
        //fetchData()
        orasheFunc();
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