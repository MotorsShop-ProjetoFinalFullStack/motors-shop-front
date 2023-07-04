import styled from "styled-components"

export const FilterCarSectionStyled = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    overflow-y: auto;
    gap: 30px;

    .firstDiv{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .firstDiv h2{
        font-size: 26px;
        font-weight: 600;
        color: var(--grey-1);
    }

    .divList{
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 0 10px;
        width: 272px;
    }

    .inputsFilter{
        display: flex;
        gap: 10px;
        padding: 0 10px;
        width: 272px;
        padding-bottom: 20px;
    }

    input{
        width: 80px;
        text-align: center;
        padding: 11px 10px 10px 23px;
        background-color: var(--gray-5);
        border: 2px solid var(--gray-5);
        font-size: 16px;
        font-weight: 600;
        color: var(--gray-3);
    }

    input::placeholder{
        font-size: 16px;
        font-weight: 600;
        color: var(--gray-3);
    }

    .firstDiv button{
        background-color: white;
        border: transparent;
        display: flex;
        align-items: flex-start;
        font-size: 16px;
        color: var(--gray-3);
        width: fit-content;
    }

    .firstDiv button:hover{
        color: var(--gray-2);
    }

    .clearFilter{
        display: none;
    }

    @media(min-width: 700px) {
        width: fit-content;
        margin: 100px 0;
        align-items: center;

        .clearFilter{
            display: block;
            width: 260px;
            padding: 14px;
            background-color: var(--azul-1);
            border: 1px solid var(--azul-1);
            border-radius: 5px;
            font-size: var(--headline-font-size);
            color: var(--gray-10);
        }

        .clearFilter:hover{
            background-color: var(--purple-3);
        }
    }
`