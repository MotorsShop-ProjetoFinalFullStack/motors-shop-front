import { styled } from "styled-components";

export const ModalHeaderStyled = styled.div`
  animation: animate__backInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */

  position: absolute;
  top: 48px;
  width: 100%;
  background-color: white;
  left: 0;
  justify-content: center;
  z-index: 1;

  .button-login {
    display: block;
    color: var(--gray-2);
    margin-bottom: 25px;
  }

  .button-register {
    margin: 0 auto;
    width: 90%;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .logout {
    background: none;
    border: 3px solid var(--azul-2);
    border-radius: 6px;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;
