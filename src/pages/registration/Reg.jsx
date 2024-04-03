import React from 'react';
import './style.scss'
import { 
    Input, InputGroup, 
    InputRightElement, Button, 
    Box,  
    FormErrorMessage, 
    FormControl, 
    FormLabel, 
    Select,
    NumberInpu, NumberInputField, NumberInputStepper, NumberInput, Textarea, Stack, Switch } from '@chakra-ui/react'
  import './style.scss';
  
  import {useNavigate} from 'react-router-dom';

  import {useDispatch, useSelector} from 'react-redux';
  import {loginThunk} from '../../redux/reducers/Auth';
  
  import { useForm, Controller } from "react-hook-form"
  
  import axios from 'axios';




const Reg = ()=>{

  const navigate = useNavigate();

  const [clicked, setClicked] = React.useState(false);
  const [switchSubmitBtn, setSwitchSubmitBtn] = React.useState(false);
  //input state------------------------
  let [valForm, setFormVal] = React.useState({
        first_name: '', last_name: '',
        organization: '', phone_number: '',
        email: '', password: '',
        country: null, city: null,
        address:'', aboutTour: ''
      })

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



  //countries--------------------------------------------------------------------
  const fetchCountries = async () => {
    try { 
      let res = await axios.get(`https://18.198.94.122/api/get-all-countries`)
      if(res.status === 200) {
        //console.log(res.data.data, 'fetchCountries')
        setCountrys(res.data.data)
      }
     
    }catch(err){
        console.log(err, 'ERROR')
    }
  }



  //select countrie---------------------------------------------------------------
  const fetchCountrie = async (id) => {
      try { 
        console.log( `https://18.198.94.122/api/get-all-cities-with-users/${id}`)
        let res = await axios.get(`https://18.198.94.122/api/get-all-cities-with-users/${id}`)
        if(res.status === 200) {
           //console.log(res, 'fetchCities')
            handleCountry(id)
            setCities(res.data.data)
        }
       
      }catch(err){
          console.log(err, 'ERROR')
      }
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

    setFormVal({ ...valForm, country: data, city: null });
  };

  const handleCity = (data) => {
    console.log(data, 'city')
    
    setFormVal({ ...valForm, city: data === null | data === 0 ? null : data});
  };

  const handleAdress = (e) => {
    setFormVal({ ...valForm, address: e.target.value });
  };

  const handleAboutTour = (e) => {
    setFormVal({ ...valForm, aboutTour: e.target.value });
  };



  //reg 1 screen----------------------------------------------------
  const fetchReg = () => {
    /*
    let obj = { 
      first_name: valForm.first_name.trim(),
      last_name: valForm.last_name.trim(),
      organization: valForm.organization.trim(),
      phone_number: valForm.phone_number.trim(),
      email:  valForm.email.trim(),
      password: valForm.password.trim()
    }*/
    //console.log(obj, 'fetchREg')
    setSwitchForm(pervState => pervState + 1)
    fetchCountries()//axios
  }
  


  //reg 2 screen ------------------------------------------------
  const fetchReg2 = () => {
    /*
    let obj = { 
      first_name: valForm.first_name.trim(),
      last_name: valForm.last_name.trim(),
      organization: valForm.organization.trim(),
      phone_number: valForm.phone_number.trim(),
      email:  valForm.email.trim(),
      password: valForm.password.trim(),
      country: valForm.country,
      city: valForm.city,
      address: valForm.address.trim(),
      aboutTour: valForm.aboutTour.trim(),
    }
    console.log(obj, 'fetchREg')*/
    setSwitchForm(pervState => pervState + 1)
  }


  const fetch3 = async () => {
    let obj = { 
      input_user_name:  valForm.first_name.trim()+ '_' +valForm.last_name.trim(),
      first_name: valForm.first_name.trim(),
      last_name: valForm.last_name.trim(),
      organization: valForm.organization.trim(),
      phone: valForm.phone_number.trim(),
      mobile_no: "",
      input_email:  valForm.email.trim(),
      input_password: valForm.password.trim(),
      country: valForm.country,
      city: valForm.city,
      address: valForm.address.trim(),
      about: valForm.aboutTour.trim(),
      company: "company",
      from_where: "web",
      role: "creator",
      input_auth_type: 0
    }
    console.log(obj, 'fetch 333333333333333333333')

      try { 
          let res = await axios.post(`https://18.198.94.122/api/register`, obj)
          if(res.data.status === "Failed!") {
                console.log(res, 'Failed =======================================================')
                setSwitchForm(1);
                setSwitchSubmitBtn(false)
                /*
                setFormVal({
                  first_name: '', last_name: '',
                  organization: '', phone_number: '',
                  email: '', password: '',
                  country: null, city: null,
                  address:'', aboutTour: ''
                })*/
          }
          console.log(res, 'fetch3 =======================================================')
          if(res.data.status === 200) {
            console.log(res, 'fetch3 =======================================================')
            localStorage.setItem('username', res.data.data.user_info.user_name)
            localStorage.setItem('token', res.data.data.user_token)
            navigate('/');
            window.location.reload();
          }
      }catch(err){
          console.log(err, 'ERROR')
      }
  }




    return (
        <div className="auth_reg">  


            {/*1 screen============================================================================= */}
            {switchForm == 1 && 
            
                <Box border='1px' borderColor='gray.200' borderRadius="md" className="auth_reg__formBox">
                        <h3 className='h3'>Create an audio guide is easy!</h3>
                        <h2 className='h2'>Registration</h2>
                      <form className="auth_reg__form" onSubmit={handleSubmit(fetchReg)}>
                        
                          
                            {/*first_name------------------------------------------------ */}
                            <FormControl isInvalid={errors.first_name} className='auth_reg__inputWrapper'>
                                <Input 
                                    {...register("first_name", { required: true, minLength: 1, maxLength: 10 })} 
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
                                    {...register("last_name", { required: true, minLength: 1,  maxLength: 10 })} 
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
                                    {...register("organization", { required: true, minLength: 1,  maxLength: 10 })} 
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
                                      {...register("phone_number", { required: true, pattern: /^[0-9]{7,15}$/ })}
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
                            <div className="auth_reg__btnContainer auth_reg__btnContainer-modify">
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





            {/*2 screen============================================================================= */}
            {switchForm == 2 && 
              
              <Box border='1px' borderColor='gray.200' borderRadius="md" className="auth_reg__formBox">
                  <h3 className='h3 auth_reg__h3'>Tell me more about you</h3>
                  <form className="auth_reg__form" onSubmit={handleSubmit(fetchReg2)}>

                      {/*Select country------------------------------------------------*/}
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
                                                    
                      
                      {/*Select city ------------------------------------------------ */}
                      <FormControl isInvalid={errors.city} className='auth_reg__inputWrapper auth_reg__inputWrapper-modify'>
                          <Select
                            {...register("city")} 
                              placeholder='Select city'  
                              size='lg'
                              errorBorderColor='crimson'
                              onChange={(event) => {handleCity(event.target.selectedIndex)
                              }}> 
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
                    
                    

                      {/*address ------------------------------------------------ */}
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


                      
                      {/*Text ------------------------------------------------ */}
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
                      <div className="auth_reg__btnContainer">
                        
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

       



            {switchForm == 3 && 
              <Box border='1px' borderColor='gray.200' borderRadius="md" className="auth_reg__formBox">
                <div>
                  <h3 className='h3 auth_reg__h3'> License Terms & Conditions</h3>
                    <h4 className='auth_reg__h4'>Basic principles</h4>
                    <ul className="auth_reg__ul">
                        <li>
                          1. Through offering the izi.TRAVEL service, Informap provides museums and
                            other content providers with the necessary applications to create city or
                            museum audio guides independently, such as: a content management 
                            system (CMS), mobile applications, templates and documentation,
                            including instructions and recommendations.
                        </li>
                        <li>
                            2. The content is created independently by the content provider without the 
                              need for Informap's participation.
                        </li>
                        <li>
                            3. The izi.TRAVEL service is offered to the content provider free of charge.
                        </li>
                        <li>
                           4. For the end-users, the content can either be free of charge or
                              require payment. The decision on whether the content is free of charge 
                              or requires payment is made by the content provider. 
                              In the case of content that requires payment, the earnings will be 
                              split between the content provider, Informap and the mobile phone 
                              application developer.
                        </li>
                        <li>
                            5. The content provider has full control over the content: 1) the copyright 
                              of the content belongs entirely to the content provider; 2) the content
                              provider can add, edit or remove content at any point.
                        </li>
                        <li>
                            6. The content provider is entirely responsible for the content (IP rights, 
                              reliability of the information, third party rights violations, 
                              discrimination, etc.). Informap is not responsible for any
                              possible complaints that may arise from third parties concerning the content.
                        </li>
                        <li>
                          7.Informap has the right to moderate the content, by: 1) blocking access,
                            if a violation of third party or government rights is discovered; 2) 
                            recommending that the content provider should adjust the content, 
                            if factual imprecisions or mistakes are discovered.
                        </li>
                        <li>
                          8. Informap has the right to mention the content provider's name or brand,
                              and use the content provider's logo, on commercial material (websites,
                                brochures, presentations, etc.) distributed amongst its clients.
                        </li>
                        <li>
                          9. The License terms for using the izi.TRAVEL service may be changed 
                              periodically by Informap. Users will be informed about any significant 
                              changes that are made to this document.
                        </li>
                        <li>
                           10. Informap cannot be held liable for the possible malfunctioning of the 
                              izi.TRAVEL Service, but agrees to make maximum efforts to prevent and 
                              rectify such malfunctions.
                        </li>
                        <li>
                          11. The License Terms for using the izi.TRAVEL Service may be changed
                            periodically by Informap. Users will be informed about the changes
                            made to the License Terms. The user's continued use of the izi.TRAVEL
                            Service implies its agreement with those changes.
                        </li>
                          
                    </ul>

                    <span className='auth_reg__showText'> 
                        Show the full text of the License Terms & Conditions
                    </span>
                    
                    <div> 
                      <Switch
                        onChange={() => setSwitchSubmitBtn(prevState=>!prevState)} 
                        d='isRequired' 
                        isRequired 
                        size='sm' 
                        className='auth_reg__btnSwitch'/>
                        I agree to the terms and conditions of the license of agreement
                    </div>            
                  
                </div>
                  {/*btn submit ------------------------------------------------ */}
                  <div className="auth_reg__btnContainer">
                        
                        <Button 
                            onClick={()=> setSwitchForm(pervState => pervState - 1)}
                            backgroundColor='#29A9E1' 
                            color="white"
                            _hover={{ bg: '#0070a0' }}>
                                Back
                        </Button>

                        <Button 
                            isLoading={!switchSubmitBtn}
                            spinner={'Submit'}
                            onClick={fetch3}
                            backgroundColor='#29A9E1' 
                            color="white"
                            _hover={{ bg: '#0070a0' }}>
                                Submit
                        </Button>
                    </div>
              </Box>
            }
        



        </div>
        
    )
}

export default Reg;

