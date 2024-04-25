import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';
import {useSelector, useDispatch} from 'react-redux';

//i18n
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
            "tour_count": 1
        },
        {
            "id": 761133,
            "name": " Kampala",
            "image": "https://media.istockphoto.com/id/1496247266/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0-%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0-%D0%B4%D0%BD%D1%96%D0%BF%D1%80%D0%B0-%D0%B2-%D0%BA%D0%B8%D1%94%D0%B2%D1%96-%D0%B2-%D1%81%D0%BE%D0%BD%D1%8F%D1%87%D0%BD%D0%B8%D0%B9-%D0%BB%D1%96%D1%82%D0%BD%D1%96%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BA%D0%B8%D1%97%D0%B2-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0.jpg?s=1024x1024&w=is&k=20&c=uQp2bLo-y8U1SfSzM_L9ItaZQjM0sx4XbbR5X5IJFJw=",
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


//----------------------------------------------------------------------------------------
const BannerSection = () => {
    const [citys, setCitys] = React.useState(null)
    const [input, setInput] = React.useState('')
    const [searchstate, setSearchstate] = React.useState([])

    const orasheFunc = () => {
        setCitys(orashe.data)
    }

    const inputHandler = (e) => {
        
        setInput(e.target.value)
        //let result = citys.filter(item => item.country === e.target.value |item.name === e.target.value )

        // Преобразуем введенную строку в нижний регистр для регистронезависимого сравнения
        const searchTerm = e.target.value.toLowerCase().trim();
    
        const filteredData = citys.filter(item => {
            const countryName = item.country.toLowerCase();
            const city = item.name.toLowerCase();
            // Если поисковый запрос пустой, вернем пустой массив, чтобы ничего не отображалось
            if(searchTerm.length === 0) {
                return false;
            }
            else {
                // Если введено хотя бы один символ в поисковом запросе,
                // ищем совпадение с первыми двумя символами названия страны
                return countryName.startsWith(searchTerm.substring(0, 20)) || city.startsWith(searchTerm.substring(0, 20));
            }
        });
        
        setSearchstate(filteredData)
       console.log(filteredData, 'Ne tsaiiiiiiiiiiiiiii')
     
    }




    //i18n===================================
    const {t} = useTranslation();

    React.useEffect(()=>{
        orasheFunc()
    })


    return (
        <section className="banner-section">
            <Container>
                <Row className='banner-section__row'>
                    <div className="banner-section__col">
                        
                        <p className="subtitle-h1">{t("Home_page.h1_subtitle")}</p>
                        <h1 className="title-h1">{t("Home_page.h1")}</h1>
                        <div className="banner-section__search-container">
                            <input 
                                onChange={(e)=>inputHandler(e)}
                                value={input}
                                className="banner-section__search-inp"
                                type="text" 
                                placeholder={t("Home_page.search_input")}/>
                            <button 
                                className="banner-section__search-btn"
                                name="search">{t("Home_page.search_btn")}</button>
                        </div>
                        <div className="banner-section__container">
                            <div className="banner-section__result-search">
                                    {searchstate && searchstate.map((item, _id)=>(
                                            <div 
                                                className='banner-section__result-search-item' 
                                                key={_id}>{item.name}
                                            </div>
                                    ))}
                                    {
                                    searchstate && searchstate.map((item, _id)=>(
                                            <div  
                                                key={_id}
                                                className='banner-section__result-search-item'>
                                                {item.country}
                                            </div>
                                    ))
                                    }
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        
    )
}



export default BannerSection;