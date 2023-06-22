import { styled } from "styled-components"

export const SectionHomeCarStyled = styled.section`
    width: 100%;
    position: relative;

    .sectionImg{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sectionContent{
        width: 100%;
        height: 522px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        position: absolute;
        top: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    }

    .sectionContent h1{
        color: var(--gray-10);
        font-size: 40px;
        font-weight: 700;
    }

    .sectionContent p{
        color: var(--gray-10);
        font-size: 28px;
    }

    @media(max-width: 700px){
        .sectionContent{
            padding: 50px 10px 0 10px;
            justify-content: flex-start;
            height: 300px;
        }

        img{
            max-width: 700px;
        }

        .sectionContent h1{
            font-size: 26px;
        }

        .sectionContent p{
            font-size: 18px;
            text-align: center;
        }
    }
`