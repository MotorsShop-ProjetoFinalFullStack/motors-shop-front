import { styled } from "styled-components";

export const ListUserCarsStyled = styled.ul`
  display: flex;
  padding: 100px 20px;
  align-items: center;
  gap: 30px;
  overflow-x: auto;

  @media (min-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 88%;
    margin: 0 auto;
  }
`;
