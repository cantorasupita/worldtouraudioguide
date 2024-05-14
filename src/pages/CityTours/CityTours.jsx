import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { SkeletonCircle, Skeleton } from '@chakra-ui/react';

import star from '../../assets/img/star.svg';
import address from '../../assets/img/address.svg';
import {Link} from 'react-router-dom'

import H1 from '../../components/UI/H1/H1';


//-----------------------------------------------------------
const CityTours = () => {

 

    let {id}  = useParams();
    let [tours, setTours]= React.useState(null)
    let [city, setCity]= React.useState(null)


    let fetchData = async ()=> {
        try{
            let result = await axios.get(`https://18.198.94.122/api/getTourByCityId/${id}`)
            setTours(result.data.data)
            console.log(result.data.data)
            setCity(result.data.data[0].place_location.name)

        }catch(e){

        }
    }

    React.useEffect(()=>{
        fetchData()
    },[])


    
    return (
        <div className="cityTours">
            <Container className="cityTours-container" style={{ maxWidth: '1100px' }}>
                        <Row>
                            <Col>
                                <H1>{city}</H1>
                            </Col>
                        </Row>

                        <Row>
                            
                            {/*Sceleton----------------------------------------------------------------------------------- */}
                            {!tours  && 
                                [1,2,3,4,5,6].map((item, _id)=>(
                                <Col key={_id} lg={4} md={6} className="items-city__wrapper custom-col">
                                    <div  className="items-city__item">
                                        <SkeletonCircle size='50' marginBottom="5" />
                                        <Skeleton height='5px' marginBottom="5"/>
                                        <Skeleton height='5px' marginBottom="5"/>
                                        <Skeleton height='5px'marginBottom="5" />
                                        <Skeleton height='5px' marginBottom="5"/>
                                    </div>
                                </Col>
                            )) }
                            {/* #Sceleton----------------------------------------------------------------------------------- */}

                            {tours && tours.map((item, _id)=>{
                                console.log(item)
                                return (
                                    <Col key={_id} lg={4} sm={6} className={"citys-item custom-col"}>
                                        <div className="citys-item__wrapper">
                                            <div className="citys-item__imgWrapper">
                                                <Link to={`/one-tour/${item.id}?city=${item.place_location.id}`} >
                                                    <img  className="citys-item__img" src={item.image} alt={'cartinca'}/>
                                                </Link>
                                            </div>                          
                                            <h4 className='citys-item__h4'>{item.name}</h4>

                                            <div className='citys-item__bottomWrapper'>
                                                <div className="citys-item__adress">
                                                    <img src={address} alt="adress icon"/><p>{city}</p>
                                                </div>
                                                <div className="citys-item__comments">
                                                    <div className='citys-item__stars'>
                                                        {[1].map((item, _id)=><img key={_id} className="citys-item__icon" src={star} alt='icon star'/> )}
                                                    </div>
                                                    <span>{item.review_comments.length} comments</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </Col>
                                ) 
                            })}
                        </Row>
                    
            </ Container>
        </div>
       
    )
}



export default CityTours;