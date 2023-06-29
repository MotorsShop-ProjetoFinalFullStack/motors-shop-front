import { styled } from "styled-components";

export const UserAdvertiserSectionStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .divBlue {
    width: 100%;
    padding: 10px;
    background-color: var(--azul-1);
    height: 280px;
  }

  .divWhite {
    width: 100%;
    padding: 10px;
    background-color: var(--gray-8);
    height: 280px;
  }

  .divUserContent {
    margin: 50px 0;
    max-width: 1240px;
    background-color: white;
    position: absolute;
    top: 10px;
    width: 90%;
    padding: 40px;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .divUserDetail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .divUserDetail h2 {
    background-color: var(--azul-1);
    padding: 30px;
    border-radius: 50%;
    font-size: 36px;
    font-weight: 500;
    color: var(--gray-10);
  }

  .divUserDetail div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .divUserDetail h3 {
    color: var(--gray-1);
    font-size: 20px;
    font-weight: 600;
  }

  .divUserDetail span {
    padding: 8px;
    background-color: #edeafd;
    border-radius: 4px;
    color: var(--azul-1);
    font-size: 14px;
    font-weight: 500;
  }

  .divUserDetail p {
    font-size: var(--headline-font-size);
    font-weight: 400;
    line-height: 28px;
  }

  button {
    width: 45%;
    padding: 8px;
    border: 2px solid var(--azul-1);
    background-color: var(--gray-10);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    color: var(--azul-1);
    margin-right: 10px;
  }

  button:hover {
    color: var(--gray-10);
    background-color: var(--azul-1);
  }

  @media (min-width: 450px) {
    .divUserContent {
      top: 45px;
    }

    button {
      width: 150px;
      padding: 12px;
    }
  }
`;
