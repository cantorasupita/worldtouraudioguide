import React from 'react';
import { 
  Input, InputGroup, 
  InputRightElement, Button, 
  Box,   
  FormErrorMessage, FormControl, FormLabel   } from '@chakra-ui/react'
import './style.scss';

import {useDispatch, useSelector} from 'react-redux';
import {loginThunk} from '../../redux/reducers/Auth';

import { useForm } from "react-hook-form"

import { Link } from "react-router-dom"


//-----------------------------------------------------
function AuthDownComponent(){
  return (
    <div className="auth__down">
      <p>Don't have an account?</p>
      <Link 
        color='#29A9E1' 
        _hover={{ color: '#0070a0' }} 
        to={'/register'}>
            Create an account
      </Link>
    </div>
  )
}




//AuthForm------------------------------------------------------
const AuthForm = () => {

  //input state------------------------
  let [valForm, setFormVal] = React.useState({email: '', password: ''})
  let [state, setState] = React.useState(null)

 //validation---------------------------------------
const {
  handleSubmit,
  register,
  watch,
  formState: { errors, isSubmitting },
} = useForm()



  //dispatch-----------------------------------------------------------
  const {authReducer} = useSelector(s=>s)
  const dispatch = useDispatch();
  const fetchLogin = () => {
      let {email, password} = valForm
      let emailValid = email.trim();
      let passwordValid = password.trim();
      dispatch(loginThunk({emailValid, passwordValid }))
      setFormVal({...valForm, password: '', email: ''})
  }



  //password watch-----------------------------------------------
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  //input-----------------------------------------------
  const handlePassword = (e) => {
    setFormVal({...valForm, password: e.target.value})
  }
  const handleMailChange = (e) => {
    setFormVal({ ...valForm, email: e.target.value});
  };




    return (
        <div className="auth">  

          <Box border='1px' borderColor='gray.200' borderRadius="md" className="auth__formBox">

              <form className="auth__form" onSubmit={handleSubmit(fetchLogin)}>
                    <h2 className='h2'>Login</h2>

                    {/*Input Email------------------------------------------------ */}
                    <FormControl isInvalid={errors.email}>
                        <Input 
                            {...register("email", { required: true, pattern: /^\s*\S+@\S+\s*$/i })} // /^\S+@\S+$/i
                            isInvalid={!!errors.email}
                            errorBorderColor='crimson'
                            placeholder='Email' 
                            size='lg' 
                            value={valForm.email}
                            onChange={handleMailChange}/>  
                          <FormErrorMessage>
                              {errors.email && 'wrong email format'}
                          </FormErrorMessage>
                      </FormControl>
                    
                    

                    {/*Input PASSWORD ------------------------------------------------ */}
                    <FormControl isInvalid={errors.password}>
                      <InputGroup size='lg'>
                          <Input
                            {...register("password", {required: true, minLength: 6 })}
                              pr='4.5rem'
                              type={show ? 'text' : 'password'}
                              placeholder='Enter password'
                              value={valForm.password.trim()}
                              onChange={handlePassword}
                              isInvalid={!!errors.password}
                              errorBorderColor='crimson'
                            />
                          <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                              {show ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                          {errors.password && 'Password must contain at least 6 characters'}
                      </FormErrorMessage>
                    </FormControl>
                  

                    <div className="auth__btnContainer">
                      <Button 
                      type='submit'
                        isLoading={isSubmitting}
                        //onClick={fetchLogin} 
                        backgroundColor='#29A9E1' 
                        color="white"
                        _hover={{ bg: '#0070a0' }}>
                              Login
                      </Button>
                    </div>

              </form>
              {<p className="auth__validMessage">{authReducer.message}</p>}
            </Box>

          <AuthDownComponent />

        </div>
        
    )
}

export default AuthForm;