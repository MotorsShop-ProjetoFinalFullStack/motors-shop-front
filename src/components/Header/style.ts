import { styled } from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  margin: 0 auto;
  background-color: var(--gray-9);
  border-bottom: 2px solid var(--gray-6);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .flex {
    display: flex;
    align-items: baseline;
    background: linear-gradient(90deg, #0b0d0d -30.61%, #4529e6 100.99%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-right: 8px;
  }

  h3 {
    font-size: 25px;
    font-weight: 600;
  }

  .div-button {
    border-left: solid var(--gray-6) 2px;
    padding: 12px 0px;
  }

  .button-login {
    border: none;
    background-color: var(--gray-9);
    color: var(--purple-3);
    font-weight: 700;
    margin-left: 20px;
    font-size: 16px;
  }

  .button-register {
    background-color: var(--gray-9);
    border: 2px solid var(--gray-4);
    padding: 10px 18px;
    border-radius: 4px;
    margin-left: 15px;
    font-weight: 600;
    font-size: 16px;
  }

  .div-dashboard {
    border-left: solid var(--gray-6) 2px;
    padding: 12px 0px;
    display: flex;
    align-items: center;
  }

  .img {
    background: black;
    border-radius: 34px;
    width: 27px;
    height: 27px;
    margin: 0px 6px 0px 20px;
  }

  @media (min-width: 370px) {
    h1 {
      font-size: 35px;
    }

    h3 {
      font-size: 30px;
    }
  }
`;
