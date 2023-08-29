import styled from 'styled-components';

export const Navbar = styled.div`
  nav {
    background-color: #fff !important;
  }

  nav .nav-link.active {
    border-bottom: 2px solid var(--accent-color);
  }

  .dropdown-language {
    background-color: transparent;
    color: #00072d;
    border: 1px solid #f75c03;
    border-radius: 11px;
    text-align: center;
  }

  a {
    font-size: 18px;
  }

  .btn-orange {
    background-color: #f75c03;
    color: #ffffff;
    box-shadow: 0px 8px 23px rgba(14, 107, 168, 0.11);
    padding: 0.8rem 2rem !important;
    border-radius: 16px;
  }

  .navbar-brand {
    margin-top: -8px;
  }

  .navbar .nav-links .nav-item {
    padding: 0 15px;
  }

  .navbar .nav-item .nav-link {
    font-size: 18px;
  }

  .navbar-toggler {
    border: 0;
    margin-top: 15px;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .offcanvas-end {
    transition: 0.2s ease !important;
  }

  .navbar-nav.nav-links {
    position: absolute;
    left: 50%;
    transform: translate(-40%, 0);
  }

  .user-dropdown .dropdown-menu a {
    font-size: 16px !important;
  }

  .user-dropdown .dropdown-menu li {
    --bs-dropdown-link-active-bg: var(--accent-color);
  }

  .user-dropdown .user-link {
    color: #0e6ba8 !important;
  }

  @media (max-width: 768px) {
    .dropdown-language {
      padding: 0px 8px;
      margin-top: 5px;
    }
  }
`;
