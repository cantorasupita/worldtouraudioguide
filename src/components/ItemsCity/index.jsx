import React from 'react';
import './style.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { SkeletonCircle, Skeleton } from '@chakra-ui/react'

import { Link } from "react-router-dom";














const ItemCity = ({citys}) => {


 

   // console.log(citys)

    return (
        <section className="items-city">
     
            <Container>
                <Row >
                    <Col >
                        <h2 className="items-city__h2">Main destinations</h2>
                    </Col> 
                </Row>
                
                <Row>
                      {/*Item----------------------------------------------------------------------------------- */}
                    {citys &&
                        citys.map((item)=>(
                        
                            <Col key={item.id} lg={4} md={6} className="items-city__wrapper">
                                <div className="items-city__item">
                                    <Link to={`/city-tours/${item.id}`} >
                                        <img className='items-city__img' src={item.image}/>
                                        <h4 className='items-city__h4'>{item.name}</h4>
                                    </Link>   
                                </div>                      
                            </Col>
                        ))
                    } {/* #Item----------------------------------------------------------------------------------- */}
                
                
                    {/*Sceleton----------------------------------------------------------------------------------- */}
                    {!citys && 
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

                </Row>
            </Container>
        </section>
        
    )
}



export default ItemCity;