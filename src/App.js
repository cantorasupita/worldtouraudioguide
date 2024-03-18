import * as React from 'react'
import './styles/index.css';

import { BrowserRouter as Router, Routes, Route, Navigate, redirect } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';



//component
import Header from './components/header/Header'

//pages
import About from './pages/about/About';
import Home from './pages/home/Home';
import CityTours from './pages/CityTours/CityTours';
import Login from './pages/login/Login';
import Reg from './pages/registration/Reg';







function App() {

  const dispatch = useDispatch()

  const {authReducer} = useSelector(s=>s)



  return (
    <ChakraProvider>
        <Header />
          <Routes>
            {authReducer.isAuth ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Reg />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/city-tours/:id" element={<CityTours />} />
                <Route path="*" element={<Home />} />
              </>
            )}
          </Routes>
    </ChakraProvider>
  );
}

export default App;
