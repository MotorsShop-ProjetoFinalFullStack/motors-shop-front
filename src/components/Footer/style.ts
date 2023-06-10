import { styled } from "styled-components"

export const FooterStyled = styled.footer`
    background-color: var(--gray-0);
    margin: 0 auto;
    max-width: 1320px;
    width: 100%;        
    height: 90px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 60px 85px 60px;

    p {
        color: var(--gray-10)
    }

    a {
        margin-right: 20px;
        width: 53px;
        height: 50px;
        background-color: var(--gray-1);
            
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
            
    }
    .up{ 
            
        filter: invert(100%);
        width: 25px;
            
    }
`