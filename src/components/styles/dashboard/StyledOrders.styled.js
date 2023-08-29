import styled from 'styled-components';

export const StyledOrders = styled.div`
  .side-menu {
    margin: 0;
  }

  .orders-content {
    text-align: center;
  }

  .orders-content h4 {
    margin-top: 30px;
    margin-bottom: 16px;
  }

  .orders-content .content-footer label {
    display: block;
    margin-top: 10px;
    font-size: 13px;
  }

  .orders-content h4 {
    font-weight: 600;
  }

  .orders-content p {
    color: #797979;
  }

  @media (max-width: 768px) {
    .orders-content {
      padding: 2rem 1rem !important;
    }
  }
`;
