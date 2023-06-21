import styled from "styled-components"

export const CardCarStyled = styled.li`
    width: 312px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .divImage{
        width: 100%;
        background-color: var(--gray-7);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .divImage img {
        width: 262px;
        height: 152px;
        object-fit: contain;
    }

    .divContent{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 20px;
    }

    h3{
        color: var(--gray-1);
        font-size: var(--title-3-font-size);
        font-weight: 600;
    }

    p{
        color: var(--gray-2);
        font-size: 14px;
    }

    .divUser{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .divUser h4{
        width: 36px;
        text-align: center;
        border-radius: 50%;
        padding: 10px;
        background-color: var(--azul-1);
        color: var(--gray-10);
    }

    .divUser h5{
        color: var(--gray-2);
        font-size: 14px;
    }

    .divTagsPrice{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .divTags{
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .divTags span{
        background-color: #EDEAFD;
        padding: 8px;
        border-radius: 5px;
        color: var(--azul-1);
        font-size: 14px;
        font-weight: 500;
    }

`