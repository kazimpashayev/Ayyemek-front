import styled from 'styled-components';

export const StyledContact = styled.div`
  
  .contact-page {
    border-radius: 50px;
  }
  
  
  .contact-method {
    width: 583px;
    height: 151px;
    border-radius: 8px;
    border: 1px solid #E8E8E8;
    background: #FFF;
    padding: 0 38px;
  }

  .contact-icon {
    width: 60px;
    height: 60px;
    background: #0e6ba8;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-danger {
    border-radius: 10px;
    background: #F75C03;
    box-shadow: 0px 6px 16px 0px rgba(247, 92, 3, 0.06);
  }
  
  .contact-title {
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: var(--accent-color);
  }
  
  .contact-title p {
    margin-top: 1rem;
    color: var(--text-color);
  }
  
  .accent-color {
    color: var(--accent-color);
  }

  .second-color {
    color: #0E6BA8;
  }

  input {
    width: 600px;
    height: 50px;
  }

  @media (max-width: 1399px) {
    input {
      width: 100% !important;
    }

    .contact-method {
      width: 100% !important;
      margin-top: 1rem !important;
    }
  }
}


@media (max-width: 1199px) {
  input {
    width: 100% !important;
  }
`;
