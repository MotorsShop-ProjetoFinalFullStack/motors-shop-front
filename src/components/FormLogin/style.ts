import { styled } from "styled-components";

export const Form = styled.form`
  width: 90%;
  border: 44px solid var(--gray-10);
  border-top: 44px solid var(--gray-10);
  border-left: 15px solid var(--gray-10);
  border-right: 15px solid var(--gray-10);
  border-bottom: 44px solid var(--gray-10);
  background-color: var(--gray-10);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 800px) {
    max-width: 400px;
  }
  .Entrar {
    background-color: var(--azul-1);
    color: var(--gray-10);
  }
  .Cadastro {
    border: 1px solid var(--gray-4);
  }
  .FPassword {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-3);
    cursor: pointer;
  }
  & > button {
    border-radius: 4px;
    width: 90%;
    height: 48px;
    background-color: transparent;
    border: transparent;
    font-size: 16px;
    font-weight: 600;
  }
  & > span {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  & > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > input {
      height: 48px;
      border: 2px solid var(--gray-7);
      border-radius: 4px;
    }
    & > label {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    & > h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
