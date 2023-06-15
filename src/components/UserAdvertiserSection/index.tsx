import { UserAdvertiserSectionStyled } from "./styled"


export const UserAdvertiserSection = () => {

    return (
        <UserAdvertiserSectionStyled>
            <div className="divBlue">

            </div>
            <div className="divWhite">

            </div>
            <div className="divUserContent">
                <div className="divUserDetail">
                    <h2>SL</h2>
                    <div>
                        <h3>Samuel Leão</h3>
                        <span>Anunciante</span>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <button>Criar anúncio</button>
            </div>
        </UserAdvertiserSectionStyled>
    )

}