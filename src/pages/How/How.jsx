import React  from 'react';
import './style.scss';



import howImg1 from '../../assets/img/how-1.jpg';
import howImg2 from '../../assets/img/how-2.jpg';
import howImg3 from '../../assets/img/how-3.jpg';
import howImg4 from '../../assets/img/how-4.jpg';

//UI
import { Button } from '@chakra-ui/react'
import {Container,Row, Col} from 'react-bootstrap';
import P from '../../components/UI/P/P'
import H1 from '../../components/UI/H1/H1'

import {useNavigate} from 'react-router-dom';
//i18n
import { useTranslation } from 'react-i18next';



//About--------------------------------------------------------
const How = () =>{

    const navigate = useNavigate();

    //i18n
    const {t} = useTranslation();

    const funcRedirect = () => {
        navigate('/login');
    }


    return (
        <div className='how'>
            <Container className='about__container' style={{ maxWidth: '1000px' }}>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <H1>{t("How.h1")}</H1> 
                    </Col>    
                </Row>
                <Row>
                    <Col md={12} lg={6} className='how__cont'>
                        <h4>{t("How.h4_How_does_it_work?")}</h4>
                        <P>
                            {t("How.p_1")}
                        </P>
                        <Button
                            className="mb-3"
                            onClick={funcRedirect} 
                            backgroundColor="#29A9E1"> {t("How.btn_login")}</Button>
                    </Col>
                    <Col md={12} lg={6}>
                        <img className='how__img' src={howImg1} alt="img how"/>  
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className='how__container'>
                        <h4>{t("How.h4_In_3_steps")}</h4>
                        <P className='how__p'>
                            {t("How.p_2")}
                        </P>

                        <div className="how__number">1</div>
                        <P className='how__img'>
                            {t("How.p_3")}
                        </P>
                        <img className='how__img' src={howImg2} alt="img how"/>  
                        <div className="how__number">2</div>
                        <P className='how__p'>
                            {t("How.p_4")}
                        </P>
                        <img className='how__img' src={howImg3} alt="img how"/>  
                        <div className="how__number">3</div>
                        <P className='how__p'>
                            {t("How.p_5")}
                        </P>
                        <img className='how__img' src={howImg4} alt="img how"/>  
                    </Col>
                </Row>       
                        
             

                 
        

            </Container>
        </div>
        
       
    )
}

export default How;