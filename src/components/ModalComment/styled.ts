import styled from "styled-components"

export const ModalCommentStyled = styled.div`
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
        justify-content: space-between;
        height: 50%;
        overflow-y: auto;
    }

    .divTitleCloseModal{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .divTitleCloseModal h1{
        color: var(--azul-1);
        font-size: 22px;
        font-weight: 600;
    }

    .divTitleCloseModal button{
        background-color: var(--gray-8);
        border: transparent;
        font-size: 22px;
        font-weight: 500;
        color: var(--gray-1);
    }

    .divTitleCloseModal button:hover{
        color: var(--gray-3);
    }

    p{
        font-size: 22px;
        font-weight: 500;
        color: var(--gray-1);
        text-align: center;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    textarea{
        width: 100%;
        height: 100px;
        padding: 10px;
    }

    .divButtons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    .divButtons button{
        padding: 10px;
        border: 2px solid var(--gray-1);
        border-radius: 5px;
        background-color: var(--gray-1);
        color: var(--gray-10);
        font-size: 16px;
        font-weight: 500;
    }

    .divButtons button:hover{
        background-color: var(--gray-6);
        color: var(--gray-1);
    }

    @media(min-width: 750px) {
        display: flex;
        justify-content: center;

        .modalContent{
            width: 35%;
        }
    }
`