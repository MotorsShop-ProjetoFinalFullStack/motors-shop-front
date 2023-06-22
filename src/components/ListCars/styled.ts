import styled from "styled-components"

export const ListCarsStyled = styled.ul`
    width: 100%;
    margin-top: 71px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    gap: 12px;
    overflow-x: auto;

    @media(min-width: 700px) {
        margin-bottom: 71px;
        flex-wrap: wrap;
        gap: 71px;
    }
`