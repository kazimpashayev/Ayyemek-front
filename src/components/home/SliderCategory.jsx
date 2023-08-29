import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGetPlansQuery } from '../../store';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { StyledSlide } from '../styles/home/StyledSlide.styled';

function SliderCategory() {
  const sliderRef = useRef(null);
  const { data: plans } = useGetPlansQuery();

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
    slidesToShow: 3,
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
          dots: true,
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
    <StyledSlide>
      <section className="plans">
        <div className="container">
          <div className="category mt-5">
            <div className="category-content d-flex justify-content-between align-items-center mb-4">
              <Link to="/plans" className="category-all">
                Hamısına bax
              </Link>
              <div className="category-info">
                <h1 className="category-title text-center">Kateqoriya</h1>
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
              {plans?.map((category) => (
                <div key={category.id} className="card border-0">
                  <img
                    src={`src/assets/${category.plan_img}`}
                    alt={category.title}
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h2
                      className={`text-center ${
                        category.title === 'Ekonom'
                          ? 'text-green'
                          : category.title === 'Gold'
                          ? 'text-yellow'
                          : category.title === 'Premium'
                          ? 'text-red'
                          : ''
                      }`}
                    >
                      {category.title}
                    </h2>

                    <p className="text-center">{category.description}</p>

                    <Link
                      className="btn btn-danger w-75"
                      to={`/plan/${category.id}`}
                    >
                      Ətraflı
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </StyledSlide>
  );
}

export default SliderCategory;
