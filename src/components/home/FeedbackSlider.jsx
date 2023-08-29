import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledFeedback } from '../styles/home/StyledFeedback.styled';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import UserImg from '../../assets/avatar.svg';

function FeedbackSlider() {
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
    slidesToShow: 2,
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
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
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
    <StyledFeedback>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feedback-slider">
              <div className="feedback-slider-title d-flex flex-column align-items-center">
                <h1>Onlar Daİm Bİzİ Seçİr</h1>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
              <div className="dividers mt-4 mb-3 d-flex justify-content-between">
                <div className="divider-left d-flex">
                  <div></div>
                  <div className="divider-rounded"></div>
                  <div className="divider-rounded"></div>
                  <div className="divider-rounded"></div>
                </div>
                <div className="divider-main mt-1"></div>
                <div className="arrows d-flex">
                  <div
                    onClick={handlePrevSlide}
                    className="arrow arrow-left me-3"
                  >
                    <FaLongArrowAltLeft
                      size={20}
                      style={{ verticalAlign: 'top' }}
                    />
                  </div>
                  <div onClick={handleNextSlide} className="arrow arrow-right">
                    <FaLongArrowAltRight
                      size={20}
                      style={{ verticalAlign: 'top' }}
                    />
                  </div>
                </div>
              </div>
              <Slider ref={sliderRef} {...settings}>
                <div className="card card-feedback">
                  <span className="feedback-description">
                    Donec pellentesque turpis sit dolor nisi, purus. Eget
                    laoreet eget nec. Donec pellentesque turpis sit dolor nisi,
                    purus. Eget laoreet eget nec. Eget laoreet eget nec. Donec
                    pellentesque turpis sit dolor nisi, purus. .
                  </span>
                  <div className="card-body">
                    <div className="profile">
                      <div className="profile-avatar">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="profile-info">
                        Fidan Valiyeva
                        <p className="info-text">Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-feedback">
                  <span className="feedback-description">
                    Donec pellentesque turpis sit dolor nisi, purus. Eget
                    laoreet eget nec. Donec pellentesque turpis sit dolor nisi,
                    purus. Eget laoreet eget nec. Eget laoreet eget nec. Donec
                    pellentesque turpis sit dolor nisi, purus. .
                  </span>
                  <div className="card-body">
                    <div className="profile">
                      <div className="profile-avatar">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="profile-info">
                        Fidan Valiyeva
                        <p className="info-text">Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-feedback">
                  <span className="feedback-description">
                    Donec pellentesque turpis sit dolor nisi, purus. Eget
                    laoreet eget nec. Donec pellentesque turpis sit dolor nisi,
                    purus. Eget laoreet eget nec. Eget laoreet eget nec. Donec
                    pellentesque turpis sit dolor nisi, purus. .
                  </span>
                  <div className="card-body">
                    <div className="profile">
                      <div className="profile-avatar">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="profile-info">
                        Fidan Valiyeva
                        <p className="info-text">Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </StyledFeedback>
  );
}

export default FeedbackSlider;
