import styled from "styled-components"

export const HomeMainStyled = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    
    .filterSectionMobile{
        position: fixed;
        top: 0;
        background-color: white;
        width: 100%;
        height: 100%;
        padding: 10px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 49px;
    }

    .divButtonClose{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .divButtonClose h3{
        font-size: var(--headline-font-size);
        font-weight: 600;
    }

    .divButtonClose button{
        background-color: white;
        border: transparent;
        color: var(--gray-3);
        font-size: var(--title-2-font-size);
    }

    .divButtonClose button:hover{
        color: var(--gray-1);
    }

    .backToListCars{
        width: 279px;
        padding: 14px;
        background-color: var(--azul-1);
        border: 1px solid var(--azul-1);
        border-radius: 5px;
        font-size: var(--headline-font-size);
        color: var(--gray-10);
    }

    .backToListCars:hover{
        background-color: var(--purple-3);
    }

    .filterButton{
        width: 279px;
        padding: 14px;
        background-color: var(--azul-1);
        border: 1px solid var(--azul-1);
        border-radius: 5px;
        font-size: var(--headline-font-size);
        color: var(--gray-10);
    }

    .filterButton:hover{
        background-color: var(--purple-3);
    }

    .filterSectionDesktop{
        display: none;
    }

    @media(min-width: 450px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        max-width: 1450px;
        margin: 0 auto;

        .filterSectionDesktop{
            display: block;
        }

        .filterSectionMobile{
            display: none;
        }

        .filterButton{
            display: none;
        }
    }
    
`