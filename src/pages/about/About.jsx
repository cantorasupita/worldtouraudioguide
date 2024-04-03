import React  from 'react';
import './style.scss';

import {Container,Row, Col} from 'react-bootstrap';

import aboutImage from '../../assets/img/about.jpg';
import authorImg from '../../assets/img/Author.jpg'

//i18n
import { useTranslation } from 'react-i18next';



//About--------------------------------------------------------
const About = () =>{

    //i18n
    const {t} = useTranslation();

    return (
        <div className='about'>
            <Container className='about__container'>
                <Row>
                    <Col className='about__img-bg'>
                        <img src={aboutImage} alt="about-image"/>
                    </Col>
                </Row>
                <Row>
                    <Col className='about__img-bg'>
                        <h1>{t("About.h1")}</h1>
                        <h4>{t("About.h4_Changing the world")}</h4>
                        <p>{t("About.p_1")}</p>
                        <h4>{t("About.h4_Easy")}</h4>
                        <p>{t("About.p_2")}</p>
                        <h4>{t("About.h4_The_Journey")}</h4>
                        <p>{t("About.p_3")}</p>
                        <p>{t("About.p_4")}</p>
                        <p>{t("About.p_5")}</p>
                        <h4>{t("About.h4_Sebastian_Weij")}</h4>
                        <p>{t("About.h6_Founder")}</p>
                        <img className='about__authorImg' src={authorImg} alt="author"/>
                      
                    </Col>
                </Row>

            </Container>
        </div>
        
       
    )
}

export default About;