import styled from 'styled-components';

export const StyledHero = styled.div`
  @media (max-width: 768px) {
    .hero-content h1 {
      width: inherit !important;
      font-size: 25px;
    }

    .hero-content {
      margin: 0;
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .hero-image {
      width: 345px;
      margin: 0 !important;
    }
  }

  @media (max-width: 1200px) {
    .hero-image {
      width: 400px;
    }
  }

  .hero-image {
    margin-left: 50px;
  }

  .hero-content .hero-title {
    letter-spacing: 0.08em;
    font-weight: 600;
    color: #0e6ba8;
    line-height: 48.41px;
    text-transform: uppercase;
  }

  .hero-content .hero-description {
    margin: 15px 0 30px 0;
    color: #f75c03;
  }

  .btn-blue {
    padding: 7px 35px;
    background-color: transparent;
    border: 2px solid #0e6ba8;
    border-radius: 12px;
    color: #0e6ba8;
    font-weight: 600;
  }
`;
