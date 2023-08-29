import styled from 'styled-components';

export const StyledLogin = styled.div`
  .btn-primary {
    border: none;
    border-radius: 6px;
    background-color: rgba(14, 107, 168, 0.25);
    color: #0e6ba8;
  }

  .login .img-caption {
    position: absolute;
    top: 220px;
    left: 40px;
    color: #fff;
  }

  .login .img-caption h1 {
    line-height: 1.4;
  }

  .login .form-title h3 {
    color: var(--accent-color);
    text-transform: uppercase;
  }

  .login .form-title label {
    color: #75797f;
  }

  @media (max-width: 767px) {
    .logo {
      margin: 0 !important;
    }
    .form {
      padding: 0 !important;
    }
    .form-title {
      padding: 0 !important;
      text-align: center;
    }
    .redirect {
      margin: 1rem 1rem !important;
    }
  }
`;
