import React  from 'react';
import './style.scss';
import axios from 'axios';
import {Container,Row, Col} from 'react-bootstrap';

import aboutImage from '../../assets/img/about.jpg';
import authorImg from '../../assets/img/Author.jpg'

import map from '../../assets/img/map.jpg'
import H2 from '../../components/UI/H2/H2'


//Countries--------------------------------------------------------
const Countries = () =>{

    let [countries, setCountries] = React.useState(null)


    const fetchData = async ()=>{
        try{
            let res = await axios.get('https://18.198.94.122/api/get-all-countries')
            console.log(res)
            if(res.data.status === 200){
                setCountries(res.data.data)
                filterCountry(res.data.data)
            }  
        }catch(err){
            console.log(err)
        }
       
    }
    
    const filterCountry = (data) => {
        let res = data.filter((item=>{
            return item.draft > 0 | item.actualization > 0 | item.new > 0 && item
        }))
        setCountries(res);
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
                    <div>
                       <img src={map} alt="map"/>
                    </div>
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

export default Countries;