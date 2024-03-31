import React  from 'react';
import './style.scss';

import {Container,Row, Col} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import email_icon from '../../assets/img/icon/email_icon.png';
import insta_icon from '../../assets/img/icon/insta_icon-2.png';
import messenger_icon from '../../assets/img/icon/messenger_icon.png';
import whatsapp_icon from '../../assets/img/icon/whatsapp_icon.png';




//About--------------------------------------------------------
const About = () =>{
    return (
        <Container className='contacts'>

            <Row className="contacts-container__item contacts__header">
                <Col>
                    <h2>Contact Us</h2>
                </Col>
            </Row>

            <Row className="contacts__container-item">
                <div className='d-flex contacts__link'>
                    <div> 
                        <img 
                            className="contacts__img"  
                            src={email_icon} 
                            alt="email icon"/>
                    </div>
                    <p  className="contacts__p">Send an email feedback@worldtouraudioguide.com</p>
                </div>
            </Row>

            <Row className="contacts__container-item">
                <Link 
                    to="https://www.instagram.com/world_tour_audio_guide/" 
                    target="blank"
                    className='d-flex contacts__link'>
                    <div>
                        <img 
                            className="contacts__img"  
                            src={insta_icon} 
                            alt="instagram icon"/>
                    </div>
                    <p className="contacts__p">Send a message using Instagram</p>
                </Link>
            </Row>

            <Row className="contacts__container-item">
                <Link 
                    target="blank"
                    to="https://www.facebook.com/profile.php/?id=100076615452332"
                    className='d-flex contacts__link'>
                    <div>
                        <img 
                            className="contacts__img"  
                            src={messenger_icon} 
                            alt="messenger icon"/>
                    </div>
                    <p className="contacts__p">Send a message using Messenger</p>
                </Link>
            </Row>

            <Row className="contacts__container-item">
                <Link to="https://wa.me/380961913399" className='d-flex contacts__link'>
                    <div>
                        <img 
                            className="contacts__img"  
                            src={whatsapp_icon} 
                            alt="whatsapp icon"/>
                    </div>
                    <p className="contacts__p">Send a message using WhatsApp</p>
                </Link>
            </Row>


        </Container> 
    )
}

export default About;