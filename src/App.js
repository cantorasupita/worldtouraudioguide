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
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/login/Login';
import Reg from './pages/registration/Reg';


import './i18n/index';




function App() {

  const dispatch = useDispatch()

  const {authReducer} = useSelector(s=>s)



  return (
    <ChakraProvider>
        <Header />
         
          <Routes>
            {!authReducer.isAuth ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Reg />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/city-tours/:id" element={<CityTours />} />
                <Route path="/one-tour/:id" element={<OneTour />} />
                <Route path="/comments/:id" element={<Comments />} />
                <Route path="/about" element={<About />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<Home />} />
              </>
            )}
          </Routes>
        <Footer />
    </ChakraProvider>
  );
}

export default App;
