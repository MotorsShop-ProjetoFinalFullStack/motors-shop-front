import styled from "styled-components"

export const ModalDetailsAnnouncementStyled = styled.div`
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
        height: 100%;
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

    .divImage{
        width: 100%;
        background-color: var(--gray-6);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .divImage img{
        width: 300px;
    }

    .details{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .details h1{
        font-size: 22px;
        color: var(--gray-1);
        font-weight: 600;
    }

    .contentDetails{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
    }

    .description{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .description h1{
        font-size: 22px;
        color: var(--gray-1);
        font-weight: 600;
    }

    .descriptionContent{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
    }

    p{
        font-size: 16px;
        font-weight: 500;
        color: var(--gray-2);
    }

    span{
        font-weight: 600;
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