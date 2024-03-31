import React from 'react';
import './style.scss';

import logoWhite from '../../assets/img/icon/logoWhite.png';
import googleIcon from '../../assets/img/icon/googlePlay.png';
import apleIcon from '../../assets/img/icon/ApleStore.png';
import facebook from '../../assets/img/icon/facebook.svg';
import instaIcon from '../../assets/img/icon/insta_icon.svg';
import googleIcon2 from '../../assets/img/icon/google-play.svg';
import apleIcon2 from '../../assets/img/icon/app-store.svg';

import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//i18n
import { useTranslation } from 'react-i18next';




const Footer = () =>{

    const {t} = useTranslation();

    return (
        <footer className='footer'>
            <Container>
                <Row>

                    <Col className="footer__logo-Container">
                        <div>
                            <img  className="footer__logo" src={logoWhite} alt='alt'/>
                        </div>
                        <div className='footer__logo-text'>
                            <p>WORLD TOUR</p>
                            <p>AUDIO GUIDE</p>
                        </div>
                        
                    </Col>

                    <Col>
                        <h4 className='footer__h4 footer__h4-mb text-start'>{t('Footer.menu.main.title')}</h4>
                        <Link to={'/'}><p className="footer__p text-start">{t('Footer.menu.main.links.how_it_works')}</p></Link>
                        <Link to={'/countries'}><p className="footer__p text-start">{t('Footer.menu.main.links.countries')}</p></Link>
                    </Col>

                    <Col>
                        <h4 className='footer__h4 footer__h4-mb text-start'>{t('Footer.menu.info.title')}</h4>
                        <Link to={'/about'}><p className="footer__p text-start">{t('Footer.menu.info.links.about_us')}</p></Link>
                        <Link to={'/contacts'}><p className="footer__p text-start">{t('Footer.menu.info.links.contact_us')}</p></Link>
                        <Link to={'/'}><p className="footer__p text-start">{t('Footer.menu.info.links.privacy_and_policy')}</p></Link>
                    </Col>

                    <Col>
                        <div>
                            <h4 className='footer__h4 text-start'>{t("Footer.Follow_us")}</h4>
                            <div className='footer__icons-social'>
                                <Link to={'/'}><img src={facebook} alt="google play icon"/></Link>
                                <Link to={'/'}><img src={instaIcon} alt="google play icon"/></Link>
                            </div>   
                        </div>
                       
                        <div>
                            <h4 className='footer__h4 text-start'>{t("Footer.Download_our_app")}</h4>
                            <div  className='footer__icons-downalnd'>
                                <Link to={'/'}><img src={googleIcon2} alt="google play icon"/></Link>
                                <Link to={'/'}> <img src={apleIcon2} alt="aplee store icon"/></Link>
                            </div> 
                        </div>
                    </Col>

                </Row>
            </Container>
           
        </footer>
    )
}

export default Footer;