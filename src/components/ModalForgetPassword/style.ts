import { styled } from "styled-components";

export const DivModal = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 80px 0;

  .divGlobal {
    margin: 0 auto;
    width: 90%;
    height: 65%;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  .divHeader {
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: var(--gray-1);
      font-weight: 600;
    }

    button {
      background-color: #ffffff;
      border: transparent;
      font-size: 22px;
      font-weight: 500;
      color: var(--gray-3);
    }
  }
  .divForm {
    padding: 5%;
    input {
      margin: 0 auto;
      margin-bottom: 20px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

      width: 100%;
      height: 48px;
      box-sizing: border-box;
      border: 1.5px solid var(--gray-3);
      border-radius: 4px;
      align-items: center;
      padding: 0px 16px;
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
  @media (min-width: 750px) {
    .divGlobal {
      width: 450px;
      height: 250px;
    }
  }
`;
