import styled from "styled-components"

export const CardCommentStyled = styled.li`
    display: flex;
    justify-content: space-between;

    .divContent{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .divHead {
        display: flex;
        align-items: center;
        gap: 20px;    
    }

    .divButtons{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .divButtons button{
        background-color: var(--gray-10);
        border: transparent;
    }

    .divButtons img{
        width: 20px;
    }

    .commentLetter {
        width: 32px;
        background-color: var(--pink-1);
        color: #ffffff;
        font-size: 14px;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .commentName {
        font-size: 14px;
        color: var(--gray-1);
        font-weight: bold;
    }

    .commentDate {
        font-size: var(--title-4-font-size);
        color: var(--gray-3)
    }

    .commentText {
        font-size: 14px;
        color: var(--gray-2);
        line-height: 20px;
    }
`