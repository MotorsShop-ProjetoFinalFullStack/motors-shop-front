import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  label {
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: 1.5px solid var(--gray-3);
  border-radius: 4px;
  align-items: center;
  padding: 0px 16px;
`;
