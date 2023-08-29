import styled from 'styled-components';

export const StyledSlide = styled.div`
  h1 {
    color: #0e6ba8;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  p {
    color: #75797f;
    font-weight: 400;
  }

  .text-green {
    color: #2bad3f;
    font-weight: 600;
    font-size: 28px;
  }

  .text-yellow {
    color: #e8c50b;
    font-weight: 600;
    font-size: 28px;
  }

  .text-red {
    color: #f75c03;
    font-weight: 600;
    font-size: 28px;
  }

  .category-all {
    color: #00072d;
  }

  .card-body {
    width: 20rem;
  }

  .btn-danger {
    background-color: transparent;
    color: #f75c03;
    border: 1px solid #f75c03;
    border-radius: 12px;
  }

  .btn-secondary {
    background-color: #f75c03;
    border: none;
  }

  .slick-track {
    margin-left: 30px !important;
  }

  @media (min-width: 1200px) {
    .slick-track {
      margin-left: 60px !important;
    }
  }

  @media (max-width: 767px) {
    .slick-track {
      margin-left: 80px !important;
    }
    .category-title {
      font-size: 25px !important;
    }
    .slider-arrows {
      display: flex;
    }
    .slider-arrows button {
      padding: 5px 10px;
    }
    .category-all {
      font-size: 14px;
      margin-top: 15px;
    }
    .category-info p {
      font-size: 15px;
    }
  }
`;
