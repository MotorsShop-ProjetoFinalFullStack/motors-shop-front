import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  label {
    margin-left: 5%;
    margin-bottom: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-1);
  }
  input::placeholder {
    color: var(--gray-3);
  }
`;

export const Input = styled.input`
  margin: 0 auto;
  margin-bottom: 20px;

  width: 90%;
  height: 48px;
  box-sizing: border-box;
  border: 1.5px solid var(--gray-7);
  border-radius: 4px;
  align-items: center;
  padding: 0px 16px;
`;
