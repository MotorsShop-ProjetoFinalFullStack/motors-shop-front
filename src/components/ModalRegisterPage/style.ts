import { styled } from "styled-components";

export const DivMoodal = styled.div`
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
    #ButLogin {
      margin-left: 5%;
      width: 135px;
      height: 38px;
      border-radius: 4px;
      border: 1px solid var(--azul-1);
      background-color: var(--azul-1);
      color: #ffffff;
    }
  }

  .divHeader {
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
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
  .divArticle {
    padding: 5%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h3 {
      color: var(--gray-1);
      font-weight: 600;
    }
    p {
      color: var(--gray-4);
      font-weight: 500;
    }
  }

  @media (min-width: 750px) {
    .divGlobal {
      width: 540px;
      height: 290px;
    }
  }
`;
