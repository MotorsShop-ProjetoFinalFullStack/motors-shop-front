import { styled } from "styled-components";

export const ListUserCarsStyled = styled.ul`
  display: flex;
  padding: 100px 20px;
  align-items: center;
  gap: 30px;
  overflow-x: auto;

  @media (min-width: 450px) {
    margin: 0 auto;
    max-width: 1350px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 20px;
    padding-bottom: 50px;
  }
`;
