import React  from 'react';
import axios from 'axios';

import './style.scss';
import { useParams,  useSearchParams } from 'react-router-dom';

import {Container,Row, Col} from 'react-bootstrap';
import star from '../../assets/img/star.svg';

import { Button, WrapItem,  SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'




//About--------------------------------------------------------
const Comments = () =>{
    //Router-------------------------------------------------------------------------------
    let {id}  = useParams();
    const [searchParams] = useSearchParams();
    const city = searchParams.get('city');

    //otzivi
    let [reviewState, setReviewState] = React.useState({total: 0,  average:0})

    //tour ----------------------------------------------------------------------------------
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

     const countReviews = ()=>{
        const total = cityTour.review_comments.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.reviews;
        }, 0);
        let average = total / cityTour.review_comments.length;
        setReviewState({...reviewState, total,  average})
    }



    React.useEffect(()=>{
       fetchCoutryTours()
    },[])

    React.useEffect(()=>{
        if(cityTour){
         countReviews()
        }
     },[cityTour])


    console.log(cityTour)

    if(!cityTour){
        return (
            <div className='comentruri-page'>
                <Container className='comentarii'>
                    <Box padding='6' boxShadow='lg' bg='white'>
                        <SkeletonText mt='4' noOfLines={10} spacing='4' skeletonHeight='8' />
                    </Box>
                </Container>
            </div>
        )
    }
    return (
        <div className='comentruri-page'>
            <Container className='comentarii' style={{ maxWidth: '1000px' }}>
                {/*Nota ============================================================= */}
                <Row>
                    <h2 className="comment__h2">{cityTour.name}</h2>
                </Row>
                <Row className="oneTour__reviews">
                    <Col>
                        <h4 className="oneTour__h2">Reviews ({cityTour && cityTour.review_comments.length})</h4>
                        <div className='oneTour__reviews-stars oneTour__stars'>
                            <span>{reviewState.total !== 0 && reviewState.average}</span> 
                            {reviewState.total !== 0 &&
                               Array.from({ length: reviewState.average }, (_, _id) => (
                                <img key={_id} className="oneTour__icon-Star oneTour__icon-Star-modify" src={star} alt='icon star'/>
                            ))}
                        </div>
                    </Col> 
                </Row>
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

            </Container>
        </div>
        
       
    )
}

export default Comments;