import React  from 'react';
import './style.scss';

import {Container,Row, Col} from 'react-bootstrap';

import aboutImage from '../../assets/img/about.jpg';
import authorImg from '../../assets/img/Author.jpg'





//About--------------------------------------------------------
const About = () =>{
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
                        <h1>Walk, listen and explore</h1>
                        <h4>Changing the world</h4>
                        <p>We want to make your life easier when traveling,
                             we are the best personal audio guide. You can find 
                             different museums or tours that you can enjoy and
                              learn in 13 different languages. World Tour Audio 
                              Guide offers you totally free audio guides, with 
                              an unbeatable quality, filtering and creating tours
                               designed by our experts, so you can enjoy them to the fullest.
                        </p>
                        <h4>Easy</h4>
                        <p>We have made this application so easy and intuitive to use that you can enjoy the best way.</p>
                        <h4>The Journey</h4>
                        <p>
                            The main mission of World Tour Audio Guide is to make life easier 
                            for the traveller. I have been travelling all over the world all my 
                            life, but the idea and the aim of this company started in 2021, when 
                            I made a trip around Turkey, in this time I was visiting open museums
                            and sometimes I was using a personal guide and sometimes an audio guide.
                            When I was using the audio guides I had to pay to use them and also
                            they were scarce in languages, the experience was not so good, 
                            as I had to pay for an audio guide and they didn't even have
                            it in my language; this is something annoying, because one 
                            will always prefer to be told the story in one's mother tongue.
                        </p>
                        <p>
                            That's where the idea came from, I asked myself:
                            'Why should it be expensive to soak up the culture
                            and why should it be impossible for many people to use it,
                            because it's not supported in their language?'
                        </p>
                        <p>
                            From that very moment I started working to create a platform that was totally
                            free and had support in many languages, for me there should not be a barrier
                            for one to be able to enjoy culture or learn about history, and that is why
                           we have created this app, so that everyone can listen and enjoy the world around us.
                        </p>
                        <h4>Sebastian Weij</h4>
                        <p>Founder/ CEO</p>
                        <img className='about__authorImg' src={authorImg} alt="author"/>
                      
                    </Col>
                </Row>

            </Container>
        </div>
        
       
    )
}

export default About;