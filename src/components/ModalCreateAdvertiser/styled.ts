import { styled } from "styled-components"

export const ModalCreateAdvertiserStyled = styled.div`
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    padding: 80px 0;

    .modalContent{
        background-color: var(--gray-8);
        border: 1px solid var(--gray-8);
        border-radius: 5px;
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 17px;
        height: 100%;
        overflow-y: auto;
    }

    .titleCloseModal{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .titleCloseModal h1{
        color: var(--gray-1);
        font-size: var(--headline-font-size);
        font-weight: 600;
    }

    .titleCloseModal button{
        background-color: var(--gray-8);
        border: transparent;
        font-size: 22px;
        font-weight: 500;
        color: var(--gray-3);
    }

    .titleCloseModal button:hover{
        color: var(--gray-1);
    }

    .carInfo{
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .carInfo p{
        font-size: 14px;
        font-weight: 500;
        color: var(--gray-1);
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .twoInputs{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .divErrors{
        padding: 3px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        width: 100%;
    }

    .divErrors p{
        font-size: 14px;
        color: red;
        font-weight: 400;
    }

    .divTextarea{
        display: flex;
        flex-direction: column;
        gap: 7px;
        width: 100%;
    }

    .divTextarea label{
        font-size: 14px;
        font-weight: 500;
        color: var(--gray-1);
    }

    .divTextarea textarea{
        padding: 12px 10px;
        border: 2px solid var(--gray-6);
        border-radius: 4px;
        font-size: 14px;
        background-color: var(--gray-8);
    }

    .divButtons{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
    }

    .buttonCancel{
        padding: 12px;
        font-size: 16px;
        font-weight: 600;
        background-color: var(--gray-6);
        border: 1px solid var(--gray-6);
        border-radius: 4px;
        color: var(--gray-2);
    }

    .buttonCancel:hover{
        color: var(--gray-8);
        background-color: var(--gray-3);
        border: 1px solid var(--gray-3);
    }

    .buttonCreate{
        padding: 12px 20px;
        font-size: 16px;
        font-weight: 600;
        background-color: #B0A6F0;
        border: 1px solid #B0A6F0;
        border-radius: 4px;
        color: #EDEAFD;
    }

    @media(min-width: 750px) {
        display: flex;
        justify-content: center;

        .modalContent{
            width: 35%;
        }
    }
`