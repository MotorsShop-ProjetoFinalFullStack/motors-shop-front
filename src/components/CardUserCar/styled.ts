import { styled } from "styled-components"

export const CardUserCarStyled = styled.li`
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

    .divImage img{
        width: 262px;
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

    .divButtons{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .divButtons button{
        padding: 10px;
        font-size: 14px;
        font-weight: 600;
        border: 2px solid var(--gray-1);
        border-radius: 4px;
        background-color: var(--gray-8);
        color: var(--gray-1);
    }

    .divButtons button:hover{
        color: var(--gray-10);
        background-color: var(--gray-1);
    }
`