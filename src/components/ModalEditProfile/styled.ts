import styled from "styled-components";

export const ModalEditProfileStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;

  .white {
    margin-top: 40px;
    background-color: white;
    width: 50%;
    min-width: 300px;
    height: max-content;
    padding: 20px;
    border-radius: 8px;
    max-width: 420px;
    height: 400px;
    overflow-x: auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
  }

  .span-info {
    margin: 10px 0px;
  }

  .test {
    margin: 20px 0px;
  }

  .div-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .button-cancel {
    color: var(--gray-1);
    padding: 10px 15px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
  }

  .button-delete {
    color: var(--alert-1);
    background-color: var(--alert-2);
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
  }

  .button-confirm {
    margin-left: 15px;
    background-color: var(--purple-3);
    color: white;
    padding: 10px 15px;
    font-size: 14px;
    border: none;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px auto;
  }

  .button-close {
    border: none;
    font-size: 18px;
    color: var(--gray-3);
  }

  @media (min-width: 782px) {
    .button-confirm {
      margin: 0;
    }
  }
`;
