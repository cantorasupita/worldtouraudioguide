import './style.scss'
import {Container, Row, Col} from 'react-bootstrap';
import  {Link} from 'react-router-dom'
import { InputPicker, InputGroup, Input  } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

import  logo from '../../assets/img/logo.png'

import {useSelector, useDispatch} from 'react-redux';

import { logOutThunk } from '../../redux/reducers/Auth';




const data = ['English', 'Deutsch', 'Francais',].map(
    item => ({ label: item, value: item })
  );





const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
  <InputGroup {...props} inside className="header__search">
    <Input placeholder={placeholder} />
    <InputGroup.Button>
      <SearchIcon />
    </InputGroup.Button>
  </InputGroup>
);




const Header = () => {

    const {authReducer} = useSelector(s=>s)
    const dispatch = useDispatch()

    const logoutHandler = ()=>{
        dispatch(logOutThunk())
    }
    
    console.log(authReducer, 'isAuth header')

    return(
        <div className="header">
            <Container>
               <Row className="header__pad">

                    <Col md={4} >
                        <Link to={'/'}>
                            <img 
                                className="header__logo"
                                src={logo} 
                                alt="logo"/>
                        </Link>
                       
                    </Col>

                   

                    <Col md={8} className="header__containerLink">
                        <CustomInputGroupWidthButton 
                            className="header__search"
                            size="md" 
                            placeholder="Search" />

                        <InputPicker 
                            cleanable={false}
                            defaultValue={'English'}
                            className="header__langSelect" 
                            data={data} block />

                    {!authReducer.isAuth ? 
                        (<>
                            <Link to={'/login'}><span className='header__login'>Login</span></Link>            
                            <Link to={'/register'}><span  className='header__reg'>Sign up</span></Link>
                        </>) 
                        :
                        ( <span  className='header__out' onClick={logoutHandler}>Log Out</span>)
                    }
                    </Col>

                </Row> 
            </Container>
        </div>
       
    ) 
}

export default Header;