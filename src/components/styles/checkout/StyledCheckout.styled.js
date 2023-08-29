import styled from 'styled-components';

export const StyledCheckout = styled.div`
  .btn-primary {
    border: none;
    border-radius: 6px;
    background-color: rgba(14, 107, 168, 0.25);
    color: #0e6ba8;
  }

  .checkout .img-caption {
    position: absolute;
    top: 220px;
    left: 40px;
    color: #fff;
  }

  .checkout .img-caption h1 {
    line-height: 1.4;
  }

  .checkout .form-title h3 {
    color: var(--accent-color);
    text-transform: uppercase;
  }

  .btn-danger {
    background-color: var(--accent-color);
  }
  
  .btn-success {
    background: #2BAD3F;
    border: none;
  }
  
  .divider {
    height: 1px;
    background: rgba(117, 121, 127, 0.20);
  }
  
  .total-price p, h5{
    color: var(--accent-color);
    font-weight: 600;
  }
  
  .form-description {
    color: #00072D;
    letter-spacing: 0.5px;
    font-size: 17px;
  }
  
  label {
    color: #00072D;
    letter-spacing: 0.5px;
  }
  

  @media (max-width: 1199px) {
    .checkout {
      background: none;
    }
    .form {
      padding-right: 3rem;
    }
    .col-hide {
      display: none;
    }
  }
`
