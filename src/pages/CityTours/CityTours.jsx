import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { SkeletonCircle, Skeleton } from '@chakra-ui/react';

import star from '../../assets/img/star.svg';
import address from '../../assets/img/address.svg';


const CityTours = () => {

    let {id}  = useParams();
    let [tours, setTours]= React.useState(null)
    let [city, setCity]= React.useState(null)

   

    let fetchData = async ()=> {
        try{
            let result = await axios.get(`https://18.198.94.122/api/getTourByCityId/${id}`)
            setTours(result.data.data)
            //console.log(result.data.data)
            setCity(result.data.data[0].place_location.name)

        }catch(e){

        }
    }

    React.useEffect(()=>{
        fetchData()
    },[])



    return (
        <Container>
            <Row>
                <Col>
                    <h2 className={'city-title__h2'}>{city}</h2>
                </Col>
            </Row>

            <Row>
                
                {/*Sceleton----------------------------------------------------------------------------------- */}
                {!tours  && 
                    [1,2,3,4,5,6].map((item, _id)=>(
                    <Col key={_id} lg={4} md={6} className="items-city__wrapper ">
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
                    //console.log(item.image)
                    return (
                        <Col key={_id} md={4} className={"citys-item"}>
                            <div className="citys-item__wrapper">
                                <div className="citys-item__imgWrapper">
                                    <img  className="citys-item__img" src={item.image} alt={'cartinca'}/>
                                </div>                          
                                <h4 className='citys-item__h4'>{item.name}</h4>

                                <div className='citys-item__bottomWrapper'>
                                    <div className="citys-item__adress">
                                        <img src={address} alt="adress icon"/><p>{city}</p>
                                    </div>
                                    <div className="citys-item__comments">
                                        <div className='citys-item__stars'>
                                            {[1,2,3,4,5].map((item, _id)=><img key={_id} className="citys-item__icon" src={star} alt='icon star'/> )}
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
    )
}



export default CityTours;