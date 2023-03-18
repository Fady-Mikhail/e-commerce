
import './Slider.css'
import main_photo from '../images/main.jpg'
import women_photo from '../images/women.jpg'
import jewlery_photo from '../images/jewelry.jpg'
import men_photo from '../images/men.jpg'
import electronics_photo from '../images/electronics.jpg'

function Slider() {
    return (

        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current={+true} aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={main_photo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={women_photo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={jewlery_photo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={men_photo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={electronics_photo} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden={+true}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden={+true}></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>

    )
}

export default Slider;
