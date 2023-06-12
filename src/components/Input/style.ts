import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 6px;
  }
  input::placeholder {
    color: var(--gray-3);
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  border: 1.5px solid var(--gray-7);
  border-radius: 4px;
  align-items: center;
  padding: 0px 16px;

  
`;
