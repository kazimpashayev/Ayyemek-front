import styled from 'styled-components';

export const StyledRegister = styled.div`
  .btn-primary {
    border: none;
    border-radius: 6px;
    background-color: rgba(14, 107, 168, 0.25);
    color: #0e6ba8;
  }

  .register .img-caption {
    position: absolute;
    top: 220px;
    left: 40px;
    color: #fff;
  }

  .register .img-caption h1 {
    line-height: 1.4;
  }

  .register .form-title {
    color: var(--accent-color);
    text-transform: uppercase;
  }

  .btn-danger {
    background-color: var(--accent-color);
  }

  @media (max-width: 768px) {
    .redirect {
      margin: 1rem 1rem !important;
    }
    .logo {
      margin: 0 !important;
    }
    .form {
      padding: 0 !important;
      margin-top: 1.5rem !important;
    }
    .form-title {
      padding: 0 !important;
      text-align: center;
    }
    .hero {
      margin-top: 1rem !important;
    }
  }
`;
