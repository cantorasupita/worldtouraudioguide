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
                        <H1 >Create an audio guide and we give you support for 13 languages</H1> 
                    </Col>    
                </Row>
                <Row>
                    <Col md={12} lg={6} className='how__cont'>
                        <h4>How does it work?</h4>
                        <P>
                            We have the technology to make it easy for you to create an audio
                            guide and we will support you within a week to make the audio
                            guide available in 13 languages (English, Spanish, German, Dutch,
                            Chinese, French, Japanese, Italian, Portuguese, Russian, Danish,
                            Finnish, Romanian).
                        </P>
                        <Button
                            className="mb-3"
                            onClick={funcRedirect} 
                            backgroundColor="#29A9E1">LETS START</Button>
                    </Col>
                    <Col md={12} lg={6}>
                        <img className='how__img' src={howImg1} alt="img how"/>  
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className='how__container'>
                        <h4>In 3 steps</h4>
                        <P className='how__p'>
                            Tour creator is only for museums that want to create and share their audioguides,
                            thus creating a simple content to reach more of their customers and with only
                            3 simple steps it is possible to do it.
                        </P>

                        <div className="how__number">1</div>
                        <P className='how__img'>
                            Create an outdoor tour or
                            indoors by adding and combining audio texts and images!
                        </P>
                        <img className='how__img' src={howImg2} alt="img how"/>  
                        <div className="how__number">2</div>
                        <P className='how__p'>
                            When you create the tour, you can publish it and it will be
                            instantly available on the mobile platform,
                            if you think you have made a mistake,
                            you can always go back to the platform and correct it.
                        </P>
                        <img className='how__img' src={howImg3} alt="img how"/>  
                        <div className="how__number">3</div>
                        <P className='how__p'>
                            Your tour is already published, our team will work to
                            make your tour available in 13 languages,
                            so you can attract more people and promote it.
                        </P>
                        <img className='how__img' src={howImg4} alt="img how"/>  
                    </Col>
                </Row>       
                        
             

                 
        

            </Container>
        </div>
        
       
    )
}

export default How;