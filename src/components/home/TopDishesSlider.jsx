import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { StyledTopDishes } from '../styles/home/StyledTopDishes.styled';
import PizzaImg from '../../assets/pizza.png';
import BurgerImg from '../../assets/burger.png';
import NoodlesImg from '../../assets/noodles.png';
import SandiwchImg from '../../assets/sub-sandiwch.png';
import SteakImg from '../../assets/steak.png';

function TopDishesSlider() {
  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3300,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledTopDishes>
      <section className="top-foods">
        <div className="container">
          <div className="top-dishes">
            <div className="top-dishes-content  mb-4">
              <div className="top-dishes-info">
                <h1 className="top-dishes-title text-center">
                  Sevİlən Yeməklərİmİz
                </h1>
                <p className="text-center">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
              </div>
              <div className="slider-arrows">
                <button
                    onClick={handlePrevSlide}
                    className="btn btn-light mx-2 border-0"
                >
                  <FaArrowLeft />
                </button>
                <button onClick={handleNextSlide} className="btn btn-secondary">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              <div className="card border-0">
                <img className="" src={PizzaImg} alt="dish" />
                <div className="card-body">
                  <h2 className="text-center">Pizza</h2>
                </div>
              </div>
              <div className="card border-0">
                <img src={BurgerImg} alt="dish" />
                <div className="card-body">
                  <h2 className="text-center">Burger</h2>
                </div>
              </div>
              <div className="card border-0">
                <img src={NoodlesImg} alt="dish" />
                <div className="card-body">
                  <h2 className="text-center">Noodles</h2>
                </div>
              </div>
              <div className="card border-0">
                <img src={SandiwchImg} alt="dish" />
                <div className="card-body">
                  <h2 className="text-center">Sub-sandiwch</h2>
                </div>
              </div>
              <div className="card border-0">
                <img src={SteakImg} alt="dish" />
                <div className="card-body">
                  <h2 className="text-center">Steak</h2>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </StyledTopDishes>
  );
}

export default TopDishesSlider;
