import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';


const BannerSection = () => {
    return (
        <section className="banner-section">
            <Container>
                <Row className='banner-section__row'>
                    <div className="banner-section__col">
                        
                        <p className="subtitle-h1">Listen to your world</p>
                        <h1 className="title-h1">Tours in 13 languages around the world</h1>
                        <div className="banner-section__search-container">
                            <input 
                                className="banner-section__search-inp"
                                type="text" 
                                placeholder='Listen to your world'/>
                            <button 
                                className="banner-section__search-btn"
                                name="search">Search</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        
    )
}



export default BannerSection;