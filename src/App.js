import * as React from 'react'
import './styles/index.css';

import { BrowserRouter as Router, Routes, Route, Navigate, redirect } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';



//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

//pages
import About from './pages/about/About';
import Countries from './pages/countries/Countries';
import Home from './pages/home/Home';
import CityTours from './pages/CityTours/CityTours';
import OneTour from './pages/OneTour/OneTour';
import Comments from './pages/Comments/Comments';
import Contacts from './pages/Contacts/Contacts.jsx';
import How from './pages/How/How';
import Login from './pages/login/Login';
import Reg from './pages/registration/Reg';
import Confi from './pages/Сonfi/Сonfi'

import './i18n/index';
//i18next
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { LOCALS } from './i18n/const.js'




function App() {

  const dispatch = useDispatch()

  const {authReducer} = useSelector(s=>s)


  //i18next===============================================================
  const langueSwitch = () => {
     let langue = i18next.language
    //console.log(langue, 'До----------------')
      let result;
      switch(langue) {
          case 'ru-RU': 
              result = LOCALS.RS;
              break;
          case 'rs-RS': 
              result = LOCALS.RS;
              break;
          case 'ro-RO': 
              result = LOCALS.RO;
              break;
          case 'en-US': 
              result = LOCALS.EN; 
              break;
      }
      i18next.changeLanguage(result)
  }
  React.useEffect(()=>{
      langueSwitch()
  })





  return (
    <ChakraProvider>
        <Header />
        <Routes>
          {!authReducer.isAuth ? 
            ( <>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Reg />} />
                <Route path="/about" element={<About />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/how" element={<How />} />
                <Route path="/confi" element={<Confi />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
            
              <>
                <Route path="/" element={<Home />} />
                <Route path="/how" element={<How />} />
                <Route path="/about" element={<About />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/confi" element={<Confi />} />
                <Route path="/city-tours/:id" element={<CityTours />} />
                <Route path="/one-tour/:id" element={<OneTour />} />
                <Route path="/comments/:id" element={<Comments />} />
                
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
        </Routes>
          
        <Footer />
    </ChakraProvider>
  );
}

export default App;
