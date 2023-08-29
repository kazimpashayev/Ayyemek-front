import styled from 'styled-components';

export const StyledAbout = styled.div`

  .about h2 {
    text-transform: uppercase;
    color: #f75c03;
    font-weight: 600;
  }

  .about .about-title {
    color: #797979;
    font-size: 18px;
  }

  .about .about-content {
    color: #797979;
    font-size: 22px;
  }

  .about h3 {
    color: #0e6ba8;
    font-weight: 600;
  }

  @media (max-width: 1400px) {
    .img-right {
      display: none;
    }
  }
`;
