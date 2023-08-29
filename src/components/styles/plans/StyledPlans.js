import styled from 'styled-components';

export const StyledPlans = styled.div`
  .plans-title h2 {
    color: var(--accent-color);
    font-weight: 600;
    text-transform: uppercase;
  }

  .plans-title {
    margin-bottom: 2rem;
  }

  .plans-title p {
    color: #75797f;
    font-size: 17px;
  }

  .btn-danger {
    border: 1px solid var(--accent-color);
    border-radius: 16px;
    color: var(--accent-color);
    box-shadow: 0 10px 15px 0 rgba(1, 115, 153, 0.2);
    background: transparent;
  }

  .text-green {
    color: #2bad3f;
    font-weight: 600;
  }

  .text-yellow {
    color: #e8c50b;
    font-weight: 600;
  }

  .text-red {
    color: var(--accent-color);
    font-weight: 600;
  }

  .page-item .arrow-left {
    background: var(--accent-color);
  }

  .page-item .arrow-right {
    background: #0e6ba8;
  }

  .page-link:focus {
    box-shadow: none;
  }

  @media (max-width: 767px) {
    .plans-content {
      margin: auto;
    }
  }
`;
