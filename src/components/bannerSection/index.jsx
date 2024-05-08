import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';
//redux
import {useSelector, useDispatch} from 'react-redux';
import { filterTours, getCitiesThunk } from '../../redux/reducers/Cities'

import {Link, useNavigate} from 'react-router-dom';
//i18n
import { useTranslation } from 'react-i18next';

import x from '../../assets/img/icon/x.png'





//----------------------------------------------------------------------------------------
const BannerSection = () => {

    const cities2 = useSelector(s=>s.citiesReducer.searchCity)
    const dispatch = useDispatch()

    const [input, setInput] = React.useState('')
    const [searchstate, setSearchstate] = React.useState([])

   const [fetchCity, setFetchCity] = React.useState(false)

   const navigate = useNavigate();

    const inputHandler = (e) => {
        
        setInput(e.target.value)
       
        // Преобразуем введенную строку в нижний регистр для регистронезависимого сравнения
        const searchTerm = e.target.value.toLowerCase().trim();
    
        const filteredData = cities2.filter(item => {
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
     
    }

    //peredam id in Redux--------------------------------------------------------
    const filterDispatch = () =>{
        if(searchstate[0]){
             dispatch(filterTours(searchstate[0].country))//dispatch
        }
        setSearchstate([])
        setInput('')
    }

    //i18n===================================
    const {t} = useTranslation();

   React.useEffect(()=>{
        dispatch(getCitiesThunk())
   },[0])


    console.log(searchstate , 'IhUHUhUHU')
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
                           
                           {/*btn============================================================ */}
                            {fetchCity ?
                                    <button
                                        onClick={()=>{
                                            filterDispatch()
                                        }}
                                        className="banner-section__search-btn"
                                       >{t("Home_page.search_btn")} 
                                    </button>
                                    :
                                    <button 
                                         onClick={()=>{
                                            console.log()
                                            if(searchstate[0]){
                                                navigate(`/city-tours/${searchstate[0].id}`);
                                            }
                                            
                                         }}
                                        className="banner-section__search-btn"
                                       >{t("Home_page.search_btn")}
                                    </button>
                            } {/*###btn============================================================ */}
                        </div>

                        <div className="banner-section__container">
                            <div className="banner-section__result-search">

                                {/* Filtru POISK   =========================================================== */}
                                {searchstate && searchstate.map((item, _id)=>(
                                        <div
                                            onClick={()=>{
                                                setInput(item.name)
                                                setFetchCity(false)
                                                setSearchstate([item])
                                            }}
                                            key={_id}
                                            className='banner-section__result-search-item'>
                                                {item.name}
                                        </div>
                                ))}

                                {searchstate && searchstate.map((item, _id)=>(
                                        <div
                                            onClick={()=>{
                                                setInput(item.country)
                                                setFetchCity(true)
                                                setSearchstate([item])
                                                dispatch(getCitiesThunk())
                                            }}
                                            key={_id}
                                            className='banner-section__result-search-item'>
                                                {item.country}
                                        </div>
                                ))}
                                {/* ##Filtru POISK   =========================================================== */}

                            </div>
                            <img
                                onClick={()=>{
                                    dispatch(getCitiesThunk())
                                    setSearchstate([])
                                    setInput('')
                                }}  
                                src={x} 
                                className='banner-section__x-icon'/>
                        </div>
                        
                    </div>
                </Row>
            </Container>
        </section>
        
    )
}



export default BannerSection;