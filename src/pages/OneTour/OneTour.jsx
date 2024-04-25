import  React from 'react';
import './style.scss';
import { useParams, Link,  useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, WrapItem,  SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'

import {useSelector, useDispatch} from 'react-redux';

import star from '../../assets/img/star.svg';
import address from '../../assets/img/address.svg';
import timeIcon from '../../assets/img/icon/time.svg';
import coloncaIcon from '../../assets/img/icon/colonca.svg';
import docIcon from '../../assets/img/icon/doc.svg';
import logoIcon from '../../assets/img/icon/logo-icon.png';
import apleIcon from '../../assets/img/icon/app-store.svg';   
import googleIcon from '../../assets/img/icon/google-play.svg';   

//AC
import { logOutThunk } from '../../redux/reducers/Auth.js';
import { useNavigate } from 'react-router-dom';
//i18next
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { LOCALS } from '../../i18n/const.js'




//OneTour =============================================================================
const OneTour = () =>{
 
    //Router-------------------------------------------------------------------------------
    let {id}  = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const city = searchParams.get('city');
    
    //redux==============
    const {authReducer} = useSelector(s=>s)
    const dispatch = useDispatch()



    //otzivi
    let [reviewState, setReviewState] = React.useState({total: 0,  average:0})
    //ora
    let [oraState, setOraState] = React.useState(0)
    //size file
    let [sizeFileState, setSizeFile] = React.useState(0)

    //i18n
    const {t} = useTranslation();








    //tour ----------------------------------------------------------------------------------
    let [tour, setTour] = React.useState(null)
    const fetchTour = async ()=>{
        try{
            const res = await axios.get(`https://18.198.94.122/api/get-tour/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(res.status === 200){
                setTour(res.data.data)
            }
           
        }catch(err){
            navigate('/login');
            dispatch(logOutThunk())
            console.log(err)
        }
    }

    //cityTour------------------------------------------------------------------------------------------
    let [cityTour, setCityTour] = React.useState(null)
    let fetchCoutryTours = async ()=> {
        try{
            let res = await axios.get(`https://18.198.94.122/api/getTourByCityId/${city}`)
            if(res.status === 200){
                let cityData = res.data.data.filter(item => item.id == id)[0];
                setCityTour(cityData)
            }
        }catch(e){

        }
    }

    //otsenca------------------------------------------------------------------------
    const countReviews = ()=>{
        const total = cityTour.review_comments.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.reviews;
        }, 0);
        let average = total / cityTour.review_comments.length;
        setReviewState({...reviewState, total,  average})
    }

    React.useEffect(()=>{
        fetchTour()
        fetchCoutryTours()
    },[])

    
    React.useEffect(()=>{
        if(cityTour){ 
            countReviews()
            oraFunc()
            sizeFileFunc()
         }

    },[cityTour])


    //ora-------------------------------------------------------------------------
    const oraFunc = () => {
        const total = cityTour.place_marker.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.file_duration;
        }, 0);
        const result = Math.floor(total / 60);
        setOraState(result)
    }

    //size File-------------------------------------------------------------------------
    const sizeFileFunc = () => {
        const total = cityTour.place_marker.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.file_size;
        }, 0);
        const result = Math.floor(total / 1048 / 1000);
        setSizeFile(result)
    }




    if(!tour){
        return (
            <Container >
                <Row >
                <Box padding='6' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='300' />
                    <SkeletonText mt='4' noOfLines={10} spacing='4' skeletonHeight='5' />
                </Box>
                </Row>
            </Container>
        )
    }
    return (
        <div className='oneTour'>
            <Container className='oneTour__container' style={{ maxWidth: '1000px' }}>
               
                <Row className="oneTour__top">

                    <Col className="oneTour__left-Container">
                        <img 
                            src={tour.cover_image} 
                            alt={tour.title['en-US']} 
                            className={"oneTour__img"}/>
                    </Col>

                    <Col className="oneTour__right-Container">
                        <h2 className="oneTour__h2">{tour.title[i18next.language]}</h2>
                        <div className="oneTour__icons-container">
                            <div><img src={timeIcon} alt="icon" className='oneTour__icon-time'/>{cityTour && cityTour.estimated_time} hr</div>
                            <div><img src={coloncaIcon} alt="icon"  className='oneTour__icon-colonca'/> {oraState} min</div>
                            <div><img src={docIcon} alt="icon"  className='oneTour__icon-doc'/> {sizeFileState} mb</div>
                        </div>

                        <div className="oneTour__comments">
                            <div className="oneTour__adress">
                                <img src={address} alt="adress icon"/><p>Rotterdam</p>
                            </div>
                            <div className='oneTour__stars'>
                            {reviewState.total !== 0 &&
                               Array.from({ length: reviewState.average }, (_, _id) => (
                                <img key={_id} className="oneTour__icon-Star oneTour__icon-Star-modify" src={star} alt='icon star'/>
                            ))}
                            </div>
                            <span>{cityTour && cityTour.review_comments.length} {t("One_Tour.comments")}</span>
                        </div>

                        <div className='oneTour__downland'>
                            <h4 className="oneTour__h4">{t("One_Tour.Download_app")}</h4>
                            <div>
                                <Link to={'https://play.google.com/store/apps/details?id=com.worldtour.audioguide.world_tour_audio_guide&pcampaignid=web_share'} target="blank">
                                    <img  className='oneTour__downland-googleIcon' src={googleIcon} alt="google play icon"/>
                                </Link>
                                <Link to={'https://apps.apple.com/tt/app/world-tour-audio-guide/id1613490960'} target="blank"> 
                                    <img className='oneTour__downland-appleIcon' src={apleIcon} alt="aplee store icon"/>
                                </Link>
                            </div> 
                        </div>
                    </Col>
                </Row>


                {/*Description ============================================================= */} 
                <Row className="oneTour__description">
                    <Col>
                        <h4 className="oneTour__h2">{t("One_Tour.Summary")}</h4>
                        <p className="oneTour__p">{tour.description[i18next.language]}</p>
                    </Col>
                </Row>


                {/*Producer ============================================================= */} 
                <Row className="oneTour__production">
                    <Col>
                        <h4 className="oneTour__h2">{t("One_Tour.Audio_Producer")}</h4>
                       <img src={logoIcon} alt="logo"/>
                    </Col>
                    <Col>
                        <h4 className="oneTour__h2">{t("One_Tour.Direction")}</h4>
                        <h5 className="oneTour__h5">{t("One_Tour.Address")}</h5>
                        <Link to={'/'}><span className='oneTour__link'>{t("One_Tour.Show_Directions")}</span></Link>
                    </Col>
                </Row>


                {/*Nota ============================================================= */}
                <Row className="oneTour__reviews">
                    <Col>
                        <h4 className="oneTour__h2">{t("One_Tour.Reviews")}  ({cityTour && cityTour.review_comments.length})</h4>
                        <div className='oneTour__reviews-stars oneTour__stars'>
                            <span>{reviewState.total !== 0 && reviewState.average}</span> 
                            {reviewState.total !== 0 &&
                               Array.from({ length: reviewState.average }, (_, _id) => (
                                <img key={_id} className="oneTour__icon-Star oneTour__icon-Star-modify" src={star} alt='icon star'/>
                            ))}
                        </div>
                    </Col> 
                </Row>


                {/*Comentarii ============================================================= */}
                <Row>
                   {cityTour &&
                        cityTour.review_comments.map((item, _id)=>{
                    
                            return (
                                <div className="oneTour__comment" key={_id}>
                                    <div className='oneTour__comment-container'>   
                                        <div className="oneTour__comment-mail">{item?.user?.user_name}</div>
                                        <span className='oneTour__comment-data'>{item.review_time}</span>
                                    </div>
                                    <div className='oneTour__comment-stars  oneTour__stars'>
                                        {Array.from({ length: item.reviews }, (_, _id) => (
                                                <img key={_id} className="oneTour__icon-Star oneTour__icon-Star-modify" src={star} alt='icon star'/>
                                            ))
                                        } 
                                    </div>
                                    <div className="oneTour__comment-message">{item.comment}</div>
                                </div> 
                            )
                   })}
                </Row>


                {/*comment btn============================================================= */}
                {reviewState.total !== 0 &&
                    <Row>
                        <WrapItem>
                            <Link to={`/comments/${cityTour.id}?city=${cityTour.place_location.id}`}>
                                <Button 
                                    className="oneTour__btn-comment"
                                    width="200px"  >Show all the reviews</Button>
                            </Link>
                        </WrapItem>
                    </Row>
                }
               




            </Container> 
        </div>
        
    )
}

export default OneTour;