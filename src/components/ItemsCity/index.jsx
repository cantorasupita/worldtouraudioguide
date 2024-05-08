import React from 'react';
import './style.scss';

//UI
import { Container, Row, Col } from 'react-bootstrap';
import { SkeletonCircle, Skeleton } from '@chakra-ui/react'
import H1 from '../../components/UI/H1/H1'
import H2 from '../UI/H2/H2'

import { Link } from "react-router-dom";

//i18next
import { useTranslation } from 'react-i18next';












const ItemCity = ({citys}) => {

    const {t} = useTranslation();
 



    return (
        <section className="items-city">
     
            <Container style={{ maxWidth: '1000px' }}>
                <Row >
                    <Col >
                        <H2
                            marginTop={'40px'} 
                            fontSize={"36px"}>
                                {t("Home_page.h2")}
                        </H2>
                    </Col> 
                </Row>
                
                <Row>
                      {/*Item----------------------------------------------------------------------------------- */}
                    {citys &&
                        citys.map((item)=>(
                        
                            <Col key={item.id} lg={4} md={6} className="custom-col items-city__wrapper">
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