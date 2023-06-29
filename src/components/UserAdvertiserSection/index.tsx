import { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { usePublicUser } from "../../hooks/usePublicUser";
import { useUserCar } from "../../hooks/useUserCar";
import { UserAdvertiserSectionStyled } from "./styled";
import { Context } from "../../context/context";

interface UserAdvertiserSectionProps {
  isPublic: boolean;
}

export const UserAdvertiserSection = ({
  isPublic,
}: UserAdvertiserSectionProps) => {
  const { user } = useAuth();
  const { setModalCreateAdvertiser } = useUserCar();
  const { publicUser } = usePublicUser();
  const { setModalEditProfileState }: any = useContext(Context);

  const getNameUser = (name: string) => {
    if (name) {
      return `${name[0]}${name[1]}`;
    }

    return "??";
  };

  return (
    <UserAdvertiserSectionStyled>
      <div className="divBlue"></div>
      <div className="divWhite"></div>
      {isPublic ? (
        <div className="divUserContent">
          <div className="divUserDetail">
            <h2>{getNameUser(publicUser.name)}</h2>
            <div>
              <h3>{publicUser.name}</h3>
              <span>{publicUser.typeUser}</span>
            </div>
            <p>{publicUser.description}</p>
          </div>
        </div>
      ) : (
        <div className="divUserContent">
          <div className="divUserDetail">
            <h2 onClick={() => setModalEditProfileState(true)}>
              {getNameUser(user.name)}
            </h2>
            <div>
              <h3>{user.name}</h3>
              <span>{user.typeUser}</span>
            </div>
            <p>{user.description}</p>
          </div>
          <button
            onClick={() => {
              setModalCreateAdvertiser(true);
            }}
          >
            Criar anúncio
          </button>
        </div>
      )}
    </UserAdvertiserSectionStyled>
  );
};
