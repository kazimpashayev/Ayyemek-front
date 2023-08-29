import styled from 'styled-components';

export const StyledOverview = styled.div`
  margin-top: 4rem;

  .process-overview-title h1 {
    color: #0e6ba8;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .process-overview-title p {
    color: #75797f;
    font-size: 18px;
    font-weight: 400;
  }

  .process-overview-image {
    position: relative;
    height: 486px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  .process-overview .step {
    text-align: center;
  }

  .process-overview .step-number {
    color: rgba(247, 92, 3, 0.37);
    font-size: 35px;
    font-weight: 600;
  }

  .process-overview .step-title {
    font-weight: 600;
    font-size: 22px;
  }


`;
