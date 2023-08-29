import styled from 'styled-components';

export const StyledTopDishes = styled.div`
  .top-dishes {
    margin-top: 12rem;
  }

  .top-dishes-content {
    display: grid;
  }

  .top-dishes-content .slider-arrows {
    justify-self: flex-end;
  }

  .card img {
    border-radius: 50%;
  }

  .card-body {
    width: 13.5rem;
  }

  .card-body h2 {
    font-size: 22px;
    font-weight: 600;
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

  h1 {
    color: #0e6ba8;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  p {
    color: #75797f;
    font-weight: 400;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    .slick-track {
      margin-left: 130px !important;
    }
    .top-dishes-title {
      font-size: 25px !important;
    }
    .top-dishes-info p {
      font-size: 15px;
    }
    .slider-arrows button {
      padding: 5px 10px !important;
    }
  }
`;
