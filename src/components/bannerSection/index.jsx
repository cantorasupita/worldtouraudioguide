import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';

//i18n
import { useTranslation } from 'react-i18next';




//----------------------------------------------------------------------------------------
const BannerSection = () => {

    //i18n
    const {t} = useTranslation();

    return (
        <section className="banner-section">
            <Container>
                <Row className='banner-section__row'>
                    <div className="banner-section__col">
                        
                        <p className="subtitle-h1">{t("Home_page.h1_subtitle")}</p>
                        <h1 className="title-h1">{t("Home_page.h1")}</h1>
                        <div className="banner-section__search-container">
                            <input 
                                className="banner-section__search-inp"
                                type="text" 
                                placeholder={t("Home_page.search_input")}/>
                            <button 
                                className="banner-section__search-btn"
                                name="search">{t("Home_page.search_btn")}</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        
    )
}



export default BannerSection;