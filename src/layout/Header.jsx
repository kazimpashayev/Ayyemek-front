import { TopHeader } from '../components/styles/TopHeader.styled';
import { ContainerFluid } from '../components/styles/ContainerFluid.styled';
import { Navbar } from '../components/styles/Navbar.styled';
import { NavLink, Link } from 'react-router-dom';
import Vector from '../assets/Vector.png';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/icons/user_1.svg';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import AuthUser from '../components/auth/AuthUser';

function Header() {
  const { token, logout, user } = AuthUser();
  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };

  return (
    <>
      <TopHeader>
        <ContainerFluid>
          <div className="header-contact">
            <p>Zəng üçün</p>
            <p>
              <img src={Vector} alt="icon" />
              +99412 409 40 98
            </p>
            <p>+99412 409 40 98</p>
            <p>
              <svg
                width="22"
                height="16"
                viewBox="0 0 28 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <g id="Group 37834">
                    <path
                      id="Vector"
                      d="M3.33986 0.271765C1.95234 0.55174 0.923017 1.62635 0.708919 3.00975C0.671863 3.2362 0.663629 4.63608 0.671863 8.30046C0.688332 13.7188 0.671863 13.3277 0.910665 13.9699C1.18241 14.6987 1.98527 15.5016 2.71403 15.7733C3.36045 16.0162 2.72227 15.9998 11.2039 15.9998C19.6855 15.9998 19.0473 16.0162 19.6937 15.7733C20.4266 15.5016 21.2253 14.7028 21.4971 13.9699C21.7359 13.3318 21.7235 13.6982 21.7235 8.11518C21.7235 3.45442 21.7153 2.96858 21.6535 2.74213C21.5341 2.3057 21.4147 2.03396 21.213 1.72516C20.7436 1.00876 20.1384 0.576443 19.2326 0.300586C19.0267 0.234709 18.3762 0.230592 11.3068 0.222358C5.06912 0.21824 3.55807 0.226475 3.33986 0.271765ZM18.9155 1.58929C19.6278 1.77457 20.1795 2.32217 20.3648 3.03034C20.4183 3.24444 20.4266 3.89909 20.4266 8.07812C20.4266 11.1702 20.4101 12.9571 20.3854 13.1012C20.2825 13.6406 19.8748 14.1964 19.4014 14.4517C18.8949 14.7193 19.4343 14.7028 11.2039 14.7028C4.71091 14.7028 3.69806 14.6946 3.4922 14.6411C2.77991 14.4558 2.22819 13.9082 2.04292 13.2C1.95234 12.8377 1.94822 3.39678 2.04292 3.03858C2.22819 2.33452 2.77167 1.77869 3.46749 1.59341C3.80923 1.50283 18.5656 1.49871 18.9155 1.58929Z"
                      fill="#EBE6E6"
                    />
                    <path
                      id="Vector_2"
                      d="M3.68997 2.90273C3.52116 2.97684 3.34823 3.18682 3.31529 3.35974C3.24942 3.7303 3.17119 3.63972 5.49333 5.96186L7.64255 8.1152L5.49333 10.2644C3.16707 12.5989 3.2453 12.5001 3.31941 12.8789C3.35647 13.0806 3.6035 13.3277 3.80525 13.3647C4.18404 13.4388 4.08523 13.5171 6.4156 11.1908L8.56894 9.04159L9.73001 10.2027C10.7346 11.2032 10.9158 11.3637 11.0517 11.3884C11.4181 11.4584 11.4181 11.4543 12.678 10.2027L13.8391 9.04159L15.9924 11.1908C18.3228 13.5171 18.224 13.4388 18.6027 13.3647C18.8045 13.3277 19.0515 13.0806 19.0886 12.8789C19.1627 12.5001 19.2409 12.5989 16.9147 10.2644L14.7654 8.1152L16.9147 5.96186C19.2409 3.63148 19.1627 3.7303 19.0886 3.35151C19.0515 3.14976 18.8045 2.90273 18.6027 2.86567C18.2157 2.79156 18.4422 2.59393 14.6707 6.35712L11.204 9.82387L7.75372 6.37771C5.8186 4.44259 4.25815 2.91096 4.19227 2.88626C4.03582 2.82862 3.84231 2.83685 3.68997 2.90273Z"
                      fill="#EBE6E6"
                    />
                  </g>
                </g>
              </svg>
              <span>info@ay-yemek.az</span>
            </p>
          </div>
          <div className="header-social">
            <span>Bizi izləyin:</span>
            <ul className="d-flex social-links">
              <li className="me-3">
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="me-3">
                <a href="">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="me-3">
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </ContainerFluid>
      </TopHeader>
      <Navbar>
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
              <img src={Logo} alt="" width="250" />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <NavLink to="/">
                    <img src={Logo} alt="" width="150" />
                  </NavLink>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav nav-links justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Ana səhifə
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      Haqqımızda
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/plans">
                      Paketlər
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contacts">
                      Əlaqə
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto pe-5 d-flex align-items-center nav-profile">
                  {user ? (
                    <li className="nav-item dropdown user-dropdown me-2">
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center user-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={Avatar} alt="" width="24" className="me-2 " />{' '}
                        {user.lastname} {user.name}
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/dashboard/profile"
                          >
                            Profil məlumatlarım
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <span
                            role="button"
                            className="dropdown-item"
                            onClick={logoutUser}
                          >
                            Çıxış et
                          </span>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <>
                      <div className="nav-item">
                        <Link className="nav-link me-2" to="/login">
                          Daxil ol
                        </Link>
                      </div>
                      <div className="nav-item">
                        <Link
                          className="nav-link btn-orange me-3"
                          to="/register"
                        >
                          Qeydiyyat
                        </Link>
                      </div>
                    </>
                  )}

                  <li className="nav-item me-2">
                    <div className="nav-item dropdown dropdown-language">
                      <a
                        className="nav-link fs-6"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        AZ
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            EN
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Navbar>
    </>
  );
}

export default Header;
