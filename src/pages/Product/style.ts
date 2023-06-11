import { styled } from "styled-components";

export const HeaderStyled = styled.header`
    margin: 0 auto;
    
    width: 100%;
    height: 80px;
    background-color: var(--gray-10);
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-left: 60px;
    }

    .divHead {
        margin-right: 60px;
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
        font-size: 16px;
        color: var(--gray-2);
        font-weight: bold;
    }

    


`

export const MainStyled = styled.main`

    

    width: 100%;
    height: 100%;
    background-color: var(--gray-7);
    position: fixed;
    z-index: -3;   
    overflow: auto;

    

    .divBg {
        background-color: var(--azul-1);
        width: 100%;
        height: 576px;
        position: absolute;
        z-index: -2;
    }

    

    .divSections {
        max-width: 1237px;
        margin: 40px auto;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @media(max-width: 1191px){
            justify-content: center;
        
        }
        
    }

    .fistSection, .thirdSection {
        margin-bottom: 20px;
        width: 100%;
        max-width: 752px;
        display:flex;
        flex-direction: column;
        gap: 20px;
    }

    .secondSection {
        width: 100%;
        max-width: 440px;
        display:flex;
        flex-direction: column;
        gap: 20px;
    }

    .productImg {
        
        height: 355px;        
        background-color: var(--gray-10);
        border-radius: 4px;

        img {
            width: 752px;
            height: 100%;
            overflow: auto;

            @media(max-width:653px){
                width: 100%;
            }
        }
    }

    .productInfo {      

        background-color: var(--gray-10);
        border-radius: 4px;
        padding: 20px 35px;

        display: flex;
        flex-direction: column;
        gap: 30px;

        h2 {
            font-size: var(--title-2-font-size);
            font-weight: var(--title-weight-bold);
            padding: 20px 0
        }

        .kmAndPrice{
            display: flex;
            justify-content:space-between;
            align-items: center;

            p{
                color: var(--gray-1);
                font-size: var(--title-3-font-size);
                font-weight: bold;
            }
            @media(max-width: 490px){
                flex-direction: column;
                align-items: start;
                gap: 35px;
            }
        }

        .kmAndYear {
            display: flex;
            gap: 10px;

            p {
                color: var(--azul-1);
                font-size: 14px;
                font-weight: bold;
                padding: 6px 10px;
                background-color: var(--gray-50);
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


    }

    .productDescription{        
        
        background-color: var(--gray-10);
        border-radius: 4px;
        padding: 35px 35px;

        display: flex;
        flex-direction: column;
        gap: 30px;

        h2{
            font-size: var(--title-2-font-size);
            font-weight: var(--title-weight-bold);
            
        }
        p {
            font-size: var(--headline-font-size);
            line-height: 30px;
        }
    }

    .productImgs {
        width: 100%;
        max-width: 440px;
        height: 371px;
        
        background-color: var(--gray-10);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        gap: 25px;

        p {
            margin: 35px 35px 0 35px;
            font-size:20px;
            font-weight: bold;
        }

        .divImgs{
            margin: 10px 35px 20px 35px;
            display:flex;
            flex-wrap:wrap;
            gap: 20px;
            justify-content:space-between;
            overflow: auto;
        }

        img {
            width: 108px;
            height: 108px;
            background-color: var(--gray-7)
        }
    }

    .userInfo {
        margin-bottom: 20px;
        width: 100%;
        max-width: 440px;
        height: 371px;
        
        background-color: var(--gray-10);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;

        .nameLetters{
            margin-top: 35px;
            font-size: 36px;
            color: #ffffff;
            background-color: var(--azul-1);
            border-radius: 50%;
            padding: 34px 27px;            
        }
        .nameComplete {
            font-size:20px;
            font-weight: bold;
        }

        .userDescription {
            margin: 0 45px;
            align-self: center;
            line-height: 25px;            
        }

        button {
            background-color: var(--gray-0);
            color: var(--gray-10);
            padding: 12px 28px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    .coments {        
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

        .userComents {
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
            background-color: var(--pink-1);
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

        .commentDate {
            font-size: var(--title-4-font-size);
            color: var(--gray-3)
        }

        .commentText {
            font-size: 14px;
            color: var(--gray-2);
            line-height: 20px;
        }
    }

    .doComents {
        background-color: var(--gray-10);
        border-radius: 4px;
        padding: 35px;

        display: flex;
        flex-direction: column;
        gap: 20px;

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

    }



   


`

