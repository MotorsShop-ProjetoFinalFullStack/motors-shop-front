import { styled } from "styled-components";

export const RegisterStyled = styled.div`
  .test {
    display: flex;
    input {
      width: 90%;
    }
  }

  .flex-column {
    flex-direction: column;
    p {
      margin-bottom: 8px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: var(--gray-1);
    }
    select {
      width: 100%;
      height: 48px;
      box-sizing: border-box;
      border: 1.5px solid var(--gray-3);
      border-radius: 4px;
      align-items: center;
      padding: 0px 16px;
    }
  }

  main {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: var(--gray-6);
    padding: 20px 0px 60px 0px;

    form {
      display: flex;
      flex-direction: column;
      background-color: var(--gray-10);
      margin: 0 auto;
      width: 90%;
      max-width: 400px;
      padding: 44px 48px;
      border-radius: 4px;

      h2 {
        padding-top: 10px;
        margin-bottom: 32px;
        font-weight: 500;
        font-size: 24px;
        color: #000000;
      }
      h3 {
        margin-bottom: 13px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
      }

      .h3Info {
        margin-bottom: 20px;
      }

      p {
      }

      .ButtonsAccontType {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0px;
      }

      #buttonRight {
        margin-left: 10px;
      }

      .ButtonsAccontType button {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 0px;
        color: #0b0d0d;
        background-color: var(--gray-4);
        box-sizing: border-box;
        height: 48px;
        border: 1.5px solid var(--gray-4);
        border-radius: 4px;
        width: 45%;
        max-width: 125px;
      }

      .ButtonsAccontType button.active {
        color: #ffffff;
        background-color: var(--azul-1);
        border: 1.5px solid var(--azul-1);
      }
      .butFinal {
        box-sizing: border-box;
        width: 100%;
        height: 48px;
        border: 1.5px solid var(--azul-1);
        border-radius: 4px;
        background: var(--azul-1);
        margin: 0 auto;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
        color: #ffffff;
      }
    }
  }
`;
