import { styled } from "styled-components";

export const RegisterStyled = styled.div`
  main {
    margin-top: 3%;
    margin-bottom: 3%;

    .DivForm {
      margin: 0 auto;
      background-color: red;
      width: 80%;

      h2 {
        padding-top: 5%;
        margin-left: 10%;
        margin-bottom: 32px;
        font-family: "Lexend";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #000000;
      }
      h3 {
        margin-left: 5%;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
      }
      p {
        margin-left: 5%;
      }

      form {
        background-color: var(--gray-10);
        margin: 0 auto;
        width: 80%;

        /* .InputDuplo {
          margin: 0 auto;
          display: flex;
          width: 40%;
        } */

        .ButtonsAccontType {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 12px 28px;
          gap: 10px;
        }

        .ButtonsAccontType button {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 0px;
          color: #0b0d0d;
          background-color: var(--gray-4);
          box-sizing: border-box;
          height: 48px;
          border: 1.5px solid var(--gray-4);
          border-radius: 4px;
        }

        .ButtonsAccontType button.active {
          color: #ffffff;
          background-color: var(--azul-1);
          border: 1.5px solid var(--azul-1);
        }
        .butFinal {
          box-sizing: border-box;
          width: 80%;
          height: 48px;
          border: 1.5px solid var(--azul-1);
          border-radius: 4px;
          background: var(--azul-1);

          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 0px;
          color: #ffffff;
        }
      }

      @media (min-width: 600px) {
        /* padding: 44px, 48px, 44px, 48px; */
        width: 441px;
      }
      @media (min-width: 601px) and (max-width: 1024px) {
        width: 441px;
      }
      @media (min-width: 1025px) {
        width: 441px;
      }
    }
  }
`;
