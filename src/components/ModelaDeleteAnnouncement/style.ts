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
    height: 70%;
    background-color: #ffffff;
    border-radius: 8px;
    .buttons {
      margin-left: 8%;
      display: flex;
      gap: 3%;
      .button-cancel {
        background-color: var(--gray-6);
        color: var(--gray-2);
        padding: 10px 15px;
        font-weight: 600;
        border-radius: 4px;
        border: none;
        cursor: pointer;
      }
      .button-delete {
        background-color: var(--alert-2);
        color: var(--alert-1);
        padding: 10px 15px;
        font-weight: 600;
        border-radius: 4px;
        border: none;
        cursor: pointer;
      }
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

  @media (min-width: 500px) {
    .divGlobal {
      width: 540px;
      height: 290px;
      .buttons {
        margin-left: 45%;
        display: flex;
        gap: 3%;
        .button-cancel {
          background-color: var(--gray-6);
          color: var(--gray-2);
          padding: 10px 15px;
          font-weight: 600;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
        .button-delete {
          background-color: var(--alert-2);
          color: var(--alert-1);
          padding: 10px 15px;
          font-weight: 600;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;
