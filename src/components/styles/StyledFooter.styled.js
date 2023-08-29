import styled from 'styled-components';

export const StyledFooter = styled.div`
  background: #f4f4f4;

  padding: 22px 0;

  .footer p {
    width: 350px;
    text-align: center;
    color: #00072d;
    font-weight: 400;
    opacity: 0.5;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.231818px;
    mix-blend-mode: normal;
  }

  .footer-links li {
    margin: 0 20px;
  }

  .footer-links li a {
    color: #00072d;
    letter-spacing: -0.204545px;
    font-weight: 400;
  }

  .social-media li {
    margin: 0 15px;
  }

  @media (max-width: 529px) {
    .footer-links li {
      margin: 0 10px !important;
    }
  }
`;
