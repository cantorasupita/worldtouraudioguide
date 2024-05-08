import React, { useRef, useEffect, useState } from 'react'; 
import './style.scss';
import axios from 'axios';
import {Container,Row, Col} from 'react-bootstrap';
import H2 from '../../components/UI/H2/H2'

//==========================================================
import { useSelector, useDispatch } from 'react-redux';
import { getCitiesThunk } from '../../redux/reducers/Cities'


//=======================================================================
import 'leaflet/dist/leaflet.css'; // Импортируем CSS для Leaflet
import L from 'leaflet'; // Импортируем библиотеку Leaflet
import  markerIcon from '../../assets/img/icon/geometka.png'





function SimpleMap({citiesReducer}) {
    
    // Состояние для хранения массива городов
    const [loadedCities, setLoadedCities] = React.useState([]);
    const mapContainerRef = useRef(null); // Создаем ref для контейнера карты
    const mapRef = useRef(null); // Создаем ref для объекта карты

    // Загрузка данных городов из редуктора в состояние
    useEffect(() => {
        setLoadedCities(citiesReducer);
    }, [citiesReducer]);

    // Состояние для хранения массива городов с координатами
    const [citiesWithCoordinates, setCitiesWithCoordinates] = useState([]);

    // useEffect для загрузки координат городов
    useEffect(() => {

        const fetchData = async () => {
            if (loadedCities.length > 0) {
                const updatedCities = await Promise.all(loadedCities.map(async city => {
                    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city.name}&format=json`);
                    const data = await response.json();
                    if (data.length > 0) {
                        return {
                            ...city,
                            coordinates: [parseFloat(data[0].lat), parseFloat(data[0].lon)]
                        };
                    } else {
                        return city;
                    }
                }));
                setCitiesWithCoordinates(updatedCities);
            }
        };
        fetchData();
    }, [loadedCities]);

    // Инициализация и обновление карты
    useEffect(() => {
        if (!mapContainerRef.current) return;

        if (!mapRef.current) {
           // const map = L.map(mapContainerRef.current).setView(citiesWithCoordinates[0].coordinates, 3);
           const map = L.map(mapContainerRef.current).setView([25, 0], 2); // Установка центра карты близко к северному полюсу

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            mapRef.current = map;
        }

        const map = mapRef.current;

        const customIcon = L.icon({
            iconUrl: markerIcon,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });

        map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        citiesWithCoordinates.forEach(city => {
            if (city.coordinates) {
                L.marker(city.coordinates, { icon: customIcon }).addTo(map).bindPopup(city.name);
            }
        });

        return () => {
            map.eachLayer(layer => {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });
        };
    }, [citiesWithCoordinates]);

    return (
        <div ref={mapContainerRef} id="map" style={{ height: "400px", width: "100%" }}></div>
    );
}





//Countries============================================================================================
const Countries2 = () =>{


    const citiesReducer = useSelector(s => s.citiesReducer.cities);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCitiesThunk());
    }, []);

    console.log(citiesReducer, 'qqqqqqqqqqqqqqqqq')




    //==================================================
    let [countries, setCountries] = React.useState(null)

    const filterCountry = (data) => {
        let res = data.filter((item=>{
            return item.draft > 0 | item.actualization > 0 | item.new > 0 && item
        }))
        setCountries(res);
    }


    const fetchData = async ()=>{
        try{
            let res = await axios.get('https://18.198.94.122/api/get-all-countries')
            //console.log(res, 'countries')
            if(res.data.status === 200){
                setCountries(res.data.data)
                filterCountry(res.data.data)
            }  
        }catch(err){
            console.log(err)
        }
       
    }
    


    React.useEffect(()=>{
        fetchData()
    },[])



    if(!countries){
        return <h1>Loading...</h1>
    }
    return (
        <div className='countries'>
            <Container className='oneTour__container' style={{ maxWidth: '1000px' }}>
                <Row>
                    <div>{/*map======================================================= */}
                            <SimpleMap citiesReducer={citiesReducer}/>
                    </div>{/*map======================================================= */}
                </Row>
                <Row >
                    <Col className='mt-4'>
                        <H2 marginBottom={"10px"}>World tour audio guide countrie</H2>
                        <div className='countries__statistic'>
                            <div>57 countries</div>
                            <div>350 tours</div>
                        </div>
                    </Col> 
                </Row>
                <Row>

                    <Col className='countries__ul'>
                        <div className='countries__li'>
                                <Col className="fw-bold">Countries</Col>
                                <Col className="fw-bold">Cities</Col>
                                <Col className="fw-bold">Tours</Col>
                        </div>
                       {countries.map((item, _id)=>{
                            return (
                                <div className='countries__li' key={_id}>
                                    <Col>{item.name}</Col>
                                    <Col>{item.draft}</Col>
                                    <Col>{item.actualization + item.new}</Col>
                                </div>
                            )})
                        }
                    </Col>
                </Row>
               
            </Container>
        </div>
        
       
    )
}


const Countries = () =>{

    const citiesReducer = useSelector(s => s.citiesReducer.cities);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCitiesThunk());
    }, []);

    console.log(citiesReducer, 'qqqqqqqqqqqqqqqqq')




    //==================================================
    let [countries, setCountries] = React.useState(null)

    const filterCountry = (data) => {
        let res = data.filter((item=>{
            return item.draft > 0 | item.actualization > 0 | item.new > 0 && item
        }))
        setCountries(res);
    }


    const fetchData = async ()=>{
        try{
            let res = await axios.get('https://18.198.94.122/api/get-all-countries')
           
            if(res.data.status === 200){
                setCountries(res.data.data)
                filterCountry(res.data.data)
            }  
        }catch(err){
            console.log(err)
        }
       
    }
    

    console.log(countries, 'countries')
    React.useEffect(()=>{
        fetchData()
    },[])



    if(!countries){
        return <h1>Loading...</h1>
    }
    return (
        <div className='countries'>
            <Container className='oneTour__container' style={{ maxWidth: '1000px' }}>
                <Row>
                    <div>{/*map======================================================= */}
                            <SimpleMap citiesReducer={citiesReducer}/>
                    </div>{/*map======================================================= */}
                </Row>
                <Row >
                    <Col className='mt-4'>
                        <H2 marginBottom={"10px"}>World tour audio guide countrie</H2>
                        <div className='countries__statistic'>
                            <div>1 countries</div>
                            <div>7 tours</div>
                        </div>
                    </Col> 
                </Row>
                <Row>

                    <Col className='countries__ul'>
                        <div className='countries__li'>
                                <Col className="fw-bold">Countries</Col>
                                <Col className="fw-bold">Cities</Col>
                                <Col className="fw-bold">Tours</Col>
                        </div>
                        {countries.map((item, _id)=>{
                            return (
                                <div className='countries__li' key={_id}>
                                    <Col>{item.name}</Col>
                                    <Col>{item.draft + 1}</Col>
                                    <Col>{item.actualization + item.new}</Col>
                                </div>
                            )})
                        }
                    </Col>
                </Row>
               
            </Container>
        </div>
        
       
    )
}


export default Countries;