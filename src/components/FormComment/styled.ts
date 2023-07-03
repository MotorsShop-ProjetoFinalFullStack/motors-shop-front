import styled from "styled-components"

export const FormCommentStyled = styled.div`
    background-color: var(--gray-10);
    border-radius: 4px;
    padding: 35px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .divHead {
        display: flex;
        align-items: center;
        gap: 20px; 
    }
    .commentLetter {
        background-color: var(--green-3);
        color: #ffffff;
        font-size: 14px;
        border-radius: 50%;
        padding: 10px;
    }

    .commentName {
        font-size: 14px;
        color: var(--gray-1);
        font-weight: bold;
    }

    #addComments {
        padding: 35px;
        font-size: 16px;
        border: 1px solid var(--gray-7);
    }

    .divSubmit {
        display: flex;
        justify-content: space-between;

        @media(max-width: 490px){
            flex-direction: column;
            align-items:self-start;                
            gap: 20px;
        }

    }

    .divResponses {
        display: flex;
        align-items: center;
        gap: 15px;

        @media(max-width: 426px){
            flex-wrap: wrap;
        }
            
        p {
            background-color: var(--gray-7);
            padding: 6px;
            max-height: 12px;
            font-size: var(--title-4-font-size);
            color: var(--gray-3);
            border-radius: 24px;
            cursor: pointer;
        }   

    }

    button {
        background-color: var(--azul-1);
        color: var(--gray-10);
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        font-size:14px;
        cursor: pointer;
        align-self: self-start;
    }

    .paragraphIsNotLogged{
        font-size: 18px;
        color: var(--gray-1);
        font-weight: 600;
    }
`