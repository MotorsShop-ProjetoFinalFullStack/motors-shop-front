import styled from "styled-components"

export const ListCommentsStyled = styled.ul`
    background-color: var(--gray-10);
    border-radius: 4px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    h2 {
        font-size: var(--title-2-font-size);
        font-weight: var(--title-weight-bold);
    }
`