import React  from 'react';
import './style.scss';
import axios from 'axios';
import {Container,Row, Col} from 'react-bootstrap';

import aboutImage from '../../assets/img/about.jpg';
import authorImg from '../../assets/img/Author.jpg'





//Countries--------------------------------------------------------
const Countries = () =>{

    let [county, setCountry] = React.useState(null)

    const fetchData = async ()=>{
        try{
            let res = await axios.get('https://18.198.94.122/api/getCitiesWithTour')
            if(res.status == 200) {
                console.log(res.data.data)
                setCountry(res.data.data)
            }
            
        }catch(err){
            console.log(err)
        }
       
    }

    React.useEffect(()=>{
        fetchData()
    },[])


    if(!county){
        return <h1>Loading...</h1>
    }
    return (
        <div className='countries'>
            <Container className=''>
                <Row>
                    <Col className=''>
                       {county.map((item, _id)=>(
                            <div key={_id}>
                                {item.country}
                            </div>))
                       }
                    </Col>
                </Row>
            </Container>
        </div>
        
       
    )
}

export default Countries;