import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { StyledHero } from '../styles/home/Hero.styled';
import HeroImg from '../../assets/hero-img.png';

function Hero() {
  return (
    <StyledHero>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        section className="hero">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="hero-content">
                <h1 className="hero-title">
                  Siz Yemək Fikirləşməyin Biz Sizin Üçün Hazırlayarıq
                </h1>
                <p className="hero-description">
                  Sizin həyat və büdcənizə uyğun yemək planları
                </p>
                <Link to="/about" className="btn btn-blue">
                  Haqqımızda
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <img src={HeroImg} alt="" className="hero-image" />
            </div>
          </div>
        </div>
      </motion.div>
    </StyledHero>
  );
}

export default Hero;
