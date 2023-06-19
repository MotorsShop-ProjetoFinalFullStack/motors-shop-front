import { styled } from "styled-components";

export const LoginStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--gray-8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 100%;
  }

  .messageError{
    font-size: 14px;
    color: red;
    font-weight: 400;
  }
`;
