import { Link } from 'react-router-dom';
import { StyledFooter } from '../components/styles/StyledFooter.styled';
import Logo from '../assets/logo.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <StyledFooter className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer d-flex flex-column  align-items-center justify-content-center">
              <img style={{ marginLeft: '6rem' }} src={Logo} alt="logo" />
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul className="footer-links d-flex mt-3">
                <li className="list-unstyled">
                  <Link className="text-decoration-none" to="/">
                    Ana səhifə
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link className="text-decoration-none" to="/packets">
                    Paketlər
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link className="text-decoration-none" to="/about">
                    Haqqımızda
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link className="text-decoration-none" to="/contact">
                    Əlaqə
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link className="text-decoration-none" to="/">
                    FAQs
                  </Link>
                </li>
              </ul>
              <ul className="social-media d-flex mt-3">
                <li className="list-unstyled">
                  <a href="">
                    <FaFacebookF color="#F75C03" size={21} />
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="">
                    <FaTwitter color="#F75C03" size={21} />
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="">
                    <FaInstagram color="#F75C03" size={21} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
