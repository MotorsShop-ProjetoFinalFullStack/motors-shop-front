import {styled, css} from "styled-components"

export const InputModalCreateStyled = styled.div<{$widthHalf?: boolean}>`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;

    ${props => props.$widthHalf && 
        css`
            width: 48%;
        `
    }

    label{
        font-size: 14px;
        font-weight: 500;
        color: var(--gray-1);
    }

    input{
        padding: 12px 10px;
        border: 2px solid var(--gray-6);
        border-radius: 4px;
        font-size: 14px;
        background-color: var(--gray-8);
    }
`