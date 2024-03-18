import React from 'react';
import './style.scss'
import { 
    Input, InputGroup, 
    InputRightElement, Button, 
    Box,  Link, 
    FormErrorMessage, 
    FormControl, 
    FormLabel, 
    Select,
    NumberInpu, NumberInputField, NumberInputStepper, NumberInput, Textarea } from '@chakra-ui/react'
  import './style.scss';
  
  import {useDispatch, useSelector} from 'react-redux';
  import {loginThunk} from '../../redux/reducers/Auth';
  
  import { useForm, Controller } from "react-hook-form"
  
  import axios from 'axios';




const Reg = ()=>{

  const [clicked, setClicked] = React.useState(false);
  //input state------------------------
  let [valForm, setFormVal] = React.useState({
        first_name: '', last_name: '',
        organization: '', phone_number: '',
        email: '', password: '',
        country: '', city: '',
        address:'', aboutTour: ''})

  //let [state, setState] = React.useState(null)

  let [countrys, setCountrys] = React.useState([])
  let [cities, setCities] = React.useState([])
  
  let [switchForm, setSwitchForm] =  React.useState(1)



  
   //validation---------------------------------------
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  
  //dispatch-----------------------------------------------------------
  const {authReducer} = useSelector(s=>s)
  const dispatch = useDispatch();


  const fetchCountries = async () => {
    try { 
      let res = await axios.get(`https://18.198.94.122/api/get-all-countries`)
      if(res.status === 200) {
        console.log(res.data.data, 'fetchCountries')
        setCountrys(res.data.data)
      }
     
    }catch(err){
        console.log(err, 'ERROR')
    }
  }




  const fetchCountrie = async (id) => {
        console.log(id, '------------------------------------------------')
      try { 
        console.log( `https://18.198.94.122/api/get-all-cities-with-users/${id}`)
        let res = await axios.get(`https://18.198.94.122/api/get-all-cities-with-users/${id}`)
        if(res.status === 200) {
           console.log(res, 'fetchCities')
            handleCountry(id)
            setCities(res.data.data)
        }
       
      }catch(err){
          console.log(err, 'ERROR')
      }
   
 
  }



  const fetchReg = () => {

    let obj = { 
      first_name: valForm.first_name.trim(),
      last_name: valForm.last_name.trim(),
      organization: valForm.organization.trim(),
      phone_number: valForm.phone_number.trim(),
      email:  valForm.email.trim(),
      password: valForm.password.trim()
    }
    console.log(obj, 'fetchREg')
    setSwitchForm(pervState => pervState + 1)
    fetchCountries()//axios


  }
  


  
  const fetchReg2 = () => {

   
    console.log('HUIII')

  }

  //password watch-----------------------------------------------
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  
  //input -----------------------------------------------
  const handleFirstName = (e) => {
    setFormVal({ ...valForm, first_name: e.target.value});
  };
  
  const handleLastName = (e) => {
    setFormVal({ ...valForm, last_name: e.target.value});
  };
  
  const handleOrganization = (e) => {
    setFormVal({ ...valForm, organization: e.target.value});
  };
  
  const handlePhone = (e) => {
    setFormVal({ ...valForm, phone_number: e.target.value});
  }


  const handlePassword = (e) => {
    setFormVal({...valForm, password: e.target.value})
  }

  const handleMailChange = (e) => {
    setFormVal({ ...valForm, email: e.target.value });
  };



  //input-----------------------------------------------
  const handleCountry = (data) => {
    console.log(data, 'LALALAL')
    setFormVal({ ...valForm, country: data });
  };

  const handleCity = (e) => {
    setFormVal({ ...valForm, city: e.target.value });
  };

  const handleAdress = (e) => {
    setFormVal({ ...valForm, address: e.target.value });
  };

  const handleAboutTour = (e) => {
    setFormVal({ ...valForm, aboutTour: e.target.value });
  };








console.log(valForm, 'HUIIIIII')


    return (
        <div className="auth_reg">  


        {switchForm == 1 && 
        
            <Box border='1px' borderColor='gray.200' borderRadius="md" className="auth_reg__formBox">
                    <h3 className='h3'>Create an audio guide is easy!</h3>
                    <h2 className='h2'>Registration</h2>
                  <form className="auth_reg__form" onSubmit={handleSubmit(fetchReg)}>
                    
                      
                        {/*first_name------------------------------------------------ */}
                        <FormControl isInvalid={errors.first_name} className='auth_reg__inputWrapper'>
                            <Input 
                                {...register("first_name", { required: true, minLength: 1 })} 
                                isInvalid={!!errors.first_name}
                                errorBorderColor='crimson'
                                placeholder='First Name' 
                                size='lg' 
                                value={valForm.first_name}
                                onChange={handleFirstName}/>  
                              <FormErrorMessage>
                                  {errors.first_name && 'wrong first name format'}
                              </FormErrorMessage>
                        </FormControl>
                        
                        
                        {/*last_name ------------------------------------------------ */}
                        <FormControl isInvalid={errors.last_name} className='auth_reg__inputWrapper'>
                            <Input 
                                {...register("last_name", { required: true, minLength: 1 })} 
                                isInvalid={!!errors.last_name}
                                errorBorderColor='crimson'
                                placeholder='Last Name' 
                                size='lg' 
                                value={valForm.last_name}
                                onChange={handleLastName}/>  
                            <FormErrorMessage>
                                {errors.last_name && 'wrong last name format'}
                            </FormErrorMessage>
                        </FormControl>
                      
                        {/*organization ------------------------------------------------ */}
                        <FormControl isInvalid={errors.organization} className='auth_reg__inputWrapper'>
                            <Input 
                                {...register("organization", { required: true, minLength: 1 })} 
                                isInvalid={!!errors.organization}
                                errorBorderColor='crimson'
                                placeholder='Organization' 
                                size='lg' 
                                value={valForm.organization}
                                onChange={handleOrganization}/>  
                            <FormErrorMessage>
                                {errors.organization && 'wrong organization format'}
                            </FormErrorMessage>
                        </FormControl>

                        {/*phone_number------------------------------------------------ */}
                        <FormControl isInvalid={errors.phone_number} className='auth_reg__inputWrapper'>
                            <NumberInput  size='lg' >
                              <NumberInputField 
                                  {...register("phone_number", { required: true,pattern: /^[0-9]{7,15}$/ })}
                                  type="tel" 
                                  isInvalid={!!errors.phone_number}
                                  errorBorderColor='crimson'
                                  placeholder='Phone Number' 
                                  value={valForm.phone_number}
                                  onChange={handlePhone}/>  
                            </NumberInput>
                            <FormErrorMessage>
                                {errors.phone_number && 'wrong phone number format'}
                            </FormErrorMessage>
                        </FormControl>

                        {/*Input Email------------------------------------------------ */}
                        <FormControl isInvalid={errors.email} className='auth_reg__inputWrapper auth_reg__inputWrapper-modify'>
                          <Input 
                              {...register("email", { required: true,  pattern: /^\S+@\S+$/i })} 
                              isInvalid={!!errors.email}
                              errorBorderColor='crimson'
                              placeholder='Email' 
                              size='lg' 
                              value={valForm.email.trim()}
                              onChange={handleMailChange}/>  
                            <FormErrorMessage>
                                {errors.email && 'wrong email format'}
                            </FormErrorMessage>
                        </FormControl>

                        

                        {/*Input PASSWORD ------------------------------------------------ */}
                        <FormControl isInvalid={errors.password} className='auth_reg__inputWrapper auth_reg__inputWrapper-modify'>
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



                        {/*btn submit ------------------------------------------------ */}
                        <div className="auth__btnContainer">
                            <Button 
                                type='submit'
                                  isLoading={isSubmitting}
                                  backgroundColor='#29A9E1' 
                                  color="white"
                                  _hover={{ bg: '#0070a0' }}>
                                      Login
                            </Button>
                        </div>

                  </form>
                  {<p className="auth__validMessage">{authReducer.message}</p>}
              </Box>
      
        }



        {switchForm == 2 && 
          
          <Box border='1px' borderColor='gray.200' borderRadius="md" className="auth_reg__formBox">
              <h3 className='h3'>Tell me more about you</h3>
              <form className="auth_reg__form" onSubmit={handleSubmit(fetchReg2)}>



          




                  {/*first_name------------------------------------------------*/}
                
                  <FormControl isInvalid={errors.country} className='auth_reg__inputWrapper auth_reg__inputWrapper-modify'>
                      <Select 
                       {...register("country", { required: true })} 
                       placeholder='Select country'  
                        size='lg'
                        errorBorderColor='crimson'
                        onChange={(event) => {
                          let selectedIndex = event.target.selectedIndex;
                          if (selectedIndex !== 0) {
                            fetchCountrie(countrys[selectedIndex - 1].id);
                          }else{
                            fetchCountrie(selectedIndex );
                          }
                        }}> 
                        {countrys.map((item, _id)=>{
                          return (
                            <option key={_id}>{item.name}</option>
                          )
                        })}
                      </Select>
                      <FormErrorMessage>
                        {errors.acountry && 'Wrong city format'}
                      </FormErrorMessage>
                  </FormControl>
                                                
                  
                  {/*last_name ------------------------------------------------ */}
                  <FormControl isInvalid={errors.city} className='auth_reg__inputWrapper auth_reg__inputWrapper-modify'>
                      <Select
                         {...register("city", { required: true })} 
                          placeholder='Select city'  
                          size='lg'
                          errorBorderColor='crimson'>
                              {cities.map((item, _id)=>{
                                    return (
                                      <option key={_id} >{item.name}</option>
                                    )
                                  })
                                }
                      </Select>
                      <FormErrorMessage>
                          {errors.city && 'wrong city format'}
                      </FormErrorMessage>
                  </FormControl>
                
                

                  {/*last_name ------------------------------------------------ */}
                  <FormControl isInvalid={errors.address} className='auth_reg__inputWrapper auth_reg__inputWrapper-modify'>
                      <Input 
                          {...register("address", { required: true, minLength: 5 })} 
                          isInvalid={!!errors.address}
                          errorBorderColor='crimson'
                          placeholder='address' 
                          size='lg' 
                          value={valForm.address}
                          onChange={handleAdress}/>  
                      <FormErrorMessage>
                          {errors.address && 'wrong address format'}
                      </FormErrorMessage>
                  </FormControl>


                  
                  {/*aboutTour ------------------------------------------------ */}
                  <FormControl isInvalid={errors.aboutTour} className='auth_reg__inputWrapper auth_reg__inputWrapper-modify'>
                      <Textarea
                          {...register("aboutTour", { required: true, minLength: 4 })} 
                          isInvalid={!!errors.aboutTour}
                          errorBorderColor='crimson'
                          placeholder='Tell me more about your tour:' 
                          size='lg' 
                          value={valForm.aboutTour}
                          onChange={handleAboutTour}/>  
                      <FormErrorMessage>
                          {errors.aboutTour && 'wrong aboutTour format'}
                      </FormErrorMessage>
                  </FormControl>


                  {/*btn submit ------------------------------------------------ */}
                  <div className="auth-reg__btnContainer">
                    
                      <Button 
                          onClick={()=> setSwitchForm(pervState => pervState - 1)}
                          backgroundColor='#29A9E1' 
                          color="white"
                          _hover={{ bg: '#0070a0' }}>
                              Back
                      </Button>

                      <Button 
                          type='submit'
                          isLoading={isSubmitting}
                          backgroundColor='#29A9E1' 
                          color="white"
                          _hover={{ bg: '#0070a0' }}>
                              Next
                      </Button>
                  </div>

              </form>
              {<p className="auth__validMessage">{authReducer.message}</p>}
          </Box>
        }

       
















        </div>
        
    )
}

export default Reg;

