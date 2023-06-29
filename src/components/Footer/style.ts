import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--gray-0);
  margin: 0 auto;

  width: 100%;
  padding: 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  img {
    margin-left: 60px;
    @media (max-width: 600px) {
      margin: 0;
    }
  }

  p {
    color: var(--gray-10);
  }

  div {
    margin-right: 60px;
    width: 53px;
    height: 50px;
    background-color: var(--gray-1);

    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      margin: 0;
    }
  }
  .up {
    margin-right: 60px;
    filter: invert(100%);
    width: 25px;
    @media (max-width: 600px) {
      margin: 0;
    }
  }
`;
