import { styled } from 'styled-components';

export const TopHeader = styled.div`
  width: 100%;
  height: 52px;
  background-color: #f75c03;
  padding-top: 17px;
  line-height: 18.15px;

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .header-contact p {
    margin-left: 20px;
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
  }

  img {
    margin: 0 5px 3px 0;
  }

  .header-social span {
    margin-right: 10px;
    margin-top: 1.3px;
    color: #ffffff;
  }

  .header-social .social-links {
    list-style: none;
    padding: 0;
  }

  .header-social .social-links li a {
    color: #fff;
    font-size: 18px;
  }


`;
