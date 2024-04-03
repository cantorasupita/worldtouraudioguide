import './style.scss'

import {Container, Row, Col} from 'react-bootstrap';

import  {Link} from 'react-router-dom'

import { Select } from '@chakra-ui/react'

import  logo from '../../assets/img/logo.png'

import {useSelector, useDispatch} from 'react-redux';
//AC
import { logOutThunk } from '../../redux/reducers/Auth';

import { useNavigate } from 'react-router-dom';

//translation-------------------------------------------------
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { LOCALS } from '../../i18n/const.js'







//Header ====================================================================
const Header = () => {

    const navigate = useNavigate();

    const {authReducer} = useSelector(s=>s)
    const dispatch = useDispatch()

    //logOut=============================================================================
    const logoutHandler = ()=>{
        navigate('/');
        dispatch(logOutThunk())
    }
    
    //i18n==============================================================
    const {t} =  useTranslation();
    const selectlanguege = (e) => {
        i18next.changeLanguage(LOCALS[e.target.value])
    }

    //console.log(i18next.language, '------------------------------------')

    return(
        <div className="header">
            <Container>
               <Row className="header__pad">

                    <Col md={4}>
                        <Link to={'/'}>
                            <img 
                                className="header__logo"
                                src={logo} 
                                alt="logo"/>
                        </Link>
                    </Col>

                    <Col md={8} className='header__right'>
                        <div className='header__container'>
                            <Select
                                onChange={e=>selectlanguege(e)} 
                                defaultValue={i18next.language.slice(-2)}
                                bg='white'
                                borderColor='white'
                                color='black'
                                size='sm' 
                                className="header__select">
                                    <option value='EN'>EN</option>
                                    <option value='RO'>RO</option>
                                    <option value='RS'>RU</option>
                            </Select>
                        </div>
                        <div className='header__container  header__btns'>
                            {!authReducer.isAuth ? 
                                (<>
                                    <Link to={'/login'}><span className='header__login header__button'>{t('Header.Auth.Login')}</span></Link>            
                                    <Link to={'/register'}><span  className='header__reg'>{t('Header.Auth.Sing_Up')}</span></Link>
                                </>) 
                                :
                                ( <span  className='header__out  header__button' onClick={logoutHandler}>{authReducer.username}</span>)
                            }
                        </div>
                    </Col>

                </Row> 
            </Container>
        </div>
       
    ) 
}

export default Header;