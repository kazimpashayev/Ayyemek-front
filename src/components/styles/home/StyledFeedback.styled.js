import styled from 'styled-components';

export const StyledFeedback = styled.div`
  margin-top: 7rem;

  .divider-main {
    width: 1130px;
    height: 1px;
    background-color: #00072d;
  }

  .divider-left div:first-child {
    background-color: red;
    width: 17px;
    height: 8px;
    border-radius: 3px;
  }

  .divider-rounded {
    background-color: #f75c03;
    width: 8px;
    height: 8px;
    margin-left: 5px;
    opacity: 0.5;
    border-radius: 3px;
  }

  .arrows {
    margin-top: -5px;
    cursor: pointer;
  }

  .arrows .arrow:hover {
    color: var(--accent-color);
  }

  .feedback-slider-title h1 {
    color: #0e6ba8;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .feedback-slider-title p {
    color: #75797f;
    font-size: 18px;
  }

  .card .feedback-description {
    color: rgba(0, 0, 0, 0.6);
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    padding: 0 30px;
  }

  .card-body {
    padding-left: 35px;
  }

  .profile {
    position: relative;
  }

  .card-body .profile-avatar::before {
    content: '';
    position: absolute;
    top: 8px;
    left: -25px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-image: url('../src/assets/fidan-gr.svg');
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .card-body .profile {
    display: flex;
    align-items: center;
  }

  .card-body .profile .profile-info {
    margin-left: 15px;
    position: relative;
    top: 10px;
  }

  .card-body .profile .profile-info .info-text {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
  }

  .slick-track {
    margin: 1rem 0 1rem 0;
  }

  .card-feedback {
    box-shadow: 10px 10px 36px -33px rgba(0, 0, 0, 1);
  }

  @media (max-width: 767px) {
    .feedback-slider-title h1 {
      font-size: 25px;
    }
    .feedback-slider-title p {
      font-size: 15px;
    }
    .divider-main {
      width: 70%;
    }
  }
`;
