import React  from 'react';
import './style.scss';

import {Container,Row, Col} from 'react-bootstrap';

import aboutImage from '../../assets/img/about.jpg';
import authorImg from '../../assets/img/Author.jpg'

//UI
import P from '../../components/UI/P/P';
import H1 from '../../components/UI/H1/H1'

//i18n
import { useTranslation } from 'react-i18next';



//About--------------------------------------------------------
const About = () =>{

    //i18n
    const {t} = useTranslation();

    return (
        <div className='about'>
            <Container className='about__container' style={{ maxWidth: '1000px' }}>
                <Row>
                    <Col className='about__img-bg'>
                        <img src={aboutImage} alt="about-image"/>
                    </Col>
                </Row>
                <Row>
                    <Col className='about__img-bg'>
                        <H1>{t("About.h1")}</H1>
                        <h4>{t("About.h4_Changing the world")}</h4>
                        <P>{t("About.p_1")}</P>
                        <h4>{t("About.h4_Easy")}</h4>
                        <P>{t("About.p_2")}</P>
                        <h4>{t("About.h4_The_Journey")}</h4>
                        <P>{t("About.p_3")}</P>
                        <P>{t("About.p_4")}</P>
                        <P>{t("About.p_5")}</P>
                        <h4>{t("About.h4_Sebastian_Weij")}</h4>
                        <P>{t("About.h6_Founder")}</P>
                        <img className='about__authorImg' src={authorImg} alt="author"/>
                      
                    </Col>
                </Row>

            </Container>
        </div>
        
       
    )
}

export default About;