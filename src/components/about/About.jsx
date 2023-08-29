import { motion } from 'framer-motion';
import { StyledAbout } from '../styles/about/StyledAbout';
import AboutImg from '../../assets/about-1.png';

function About() {
  return (
    <StyledAbout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="about"
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h2>Haqqımızda</h2>
              <p className="about-title">
                Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
                ullamcorper .
              </p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6 g-md-4 g-sm-4 g-4">
              <img src={AboutImg} alt="The About Image" className="w-100" />
            </div>
            <div className="col-xl-6 col-lg-6 g-md-4 g-sm-4 g-4">
              <img src={AboutImg} alt="The About Image" className="w-100" />
            </div>
          </div>
        </div>
        <div className="container mt-7 mb-8">
          <div className="row align-items-center">
            <div className="col-3">
              <h3 className="">Biz nə edirik?</h3>
            </div>
            <div className="col-9">
              <p className="about-content">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
              <p className="about-content">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledAbout>
  );
}

export default About;
