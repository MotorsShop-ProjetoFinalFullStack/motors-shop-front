import { useAuth } from "../../hooks/useAuth"
import { useUserCar } from "../../hooks/useUserCar"
import { UserAdvertiserSectionStyled } from "./styled"


export const UserAdvertiserSection = () => {

    const {user} = useAuth()
    const {setModalCreateAdvertiser} = useUserCar()

    const getNameUser = (name: string) => {
        if(name){
            return `${name[0]}${name[1]}`
        }

        return "??"
    }

    return (
        <UserAdvertiserSectionStyled>
            <div className="divBlue">

            </div>
            <div className="divWhite">

            </div>
            <div className="divUserContent">
                <div className="divUserDetail">
                    <h2>{getNameUser(user.name)}</h2>
                    <div>
                        <h3>{user.name}</h3>
                        <span>{user.typeUser}</span>
                    </div>
                    <p>{user.description}</p>
                </div>
                <button onClick={()=>{setModalCreateAdvertiser(true)}}>Criar anúncio</button>
            </div>
        </UserAdvertiserSectionStyled>
    )

}