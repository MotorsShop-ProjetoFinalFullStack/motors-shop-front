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
  padding: 10px 25px;
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
    display: flex;
  }

  .button-login {
    border: none;
    background-color: var(--gray-9);
    color: var(--purple-3);
    font-weight: 700;
    margin-left: 20px;
    font-size: 16px;
    width: max-content;
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

  .space {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .burger-menu {
    height: 100%;
    width: 4em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    align-items: flex-end;
  }

  .burger-bar {
    width: 20px;
    height: 3px;
    background-color: var(--gray-1);
    border-radius: 0.5em;
  }

  .menu {
    width: 50%;
    height: 100vh;
    background-color: rgb(154, 181, 240);
    position: absolute;
    top: 0;
    z-index: -1;
  }

  /* ------------- sliding menu ------------------ */
  .hidden {
    display: none;
  }

  .visible {
    display: inherit;
  }

  /* ----- animations--------- */
  /* clicked */
  .burger-bar.clicked:nth-child(1) {
    transform: rotate(45deg) translate(8px, -1px);
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(2) {
    transform: scale(0);
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(3) {
    transform: rotate(135deg) translate(-5px, -3px);
    transition: ease-out 0.5s;
  }

  /* unclicked */
  .burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    margin-bottom: 2px;
    align-items: flex-end;
  }

  @media (min-width: 370px) {
    h1 {
      font-size: 35px;
    }

    h3 {
      font-size: 30px;
    }
  }

  @media (min-width: 500px) {
    .burger-bar.unclicked {
      display: none;
    }
    .burger-menu {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .div-button {
      display: none;
    }
  }
`;
