import styled from 'styled-components';

export const StyledFAQ = styled.div`
  margin-top: 7rem;

  .accordion-header .accordion-button {
    font-weight: 600;
  }

  .faq-title p {
    color: #75797f;
    font-size: 18px;
  }

  .accordion-item {
    border: none;
  }

  .accordion-body {
    border: none;
    border-bottom: 1px solid rgba(136, 150, 166, 0.21);
  }

  .accordion-body {
    color: #f75c03;
  }

  .accordion-button {
    border: none;
    background: #fff;
  }

  @media (max-width: 767px) {
    .faq-title {
      text-align: center;
    }
    .faq-title h1 {
      font-size: 25px;
    }
    .faq-title p {
      font-size: 15px;
    }
  }
`;
