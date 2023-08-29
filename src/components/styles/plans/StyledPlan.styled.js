import styled from 'styled-components';

export const StyledPlan = styled.div`
  .selection-tabs .selection-btn {
    background: #f7f7f7;
    color: var(--accent-color);
    border-radius: 30px;
    margin-right: 1.3rem;
    padding: 8px 20px;
  }

  .selection-tabs .selection-btn.active {
    background: var(--accent-color);
    color: #fff;
  }

  .add-btn {
    background: none;
  }

  .add-btn span {
    font-weight: 600;
  }

  .cart .cart-caption {
    color: var(--accent-color);
    margin-top: 1rem;
    font-size: 18px;
  }

  .cart .cart-title {
    margin-top: 1.5rem;
    color: #202020;
  }

  .divider {
    background: rgba(0, 0, 0, 0.05);
    margin: 0;
  }

  .trash-icon {
    margin-top: 26px;
  }

  .trash-icon:hover {
    cursor: pointer;
  }
`;
