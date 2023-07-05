import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCars } from "../../components/ListCars";
import { UserAdvertiserSection } from "../../components/UserAdvertiserSection";
import { PublicUserAdvertiserStyled } from "./styled";
import { Context } from "../../context/context";
import { ModalEditAnnouncement } from "../../components/ModelEditAnnouncement";

export const PublicUserAdvertiser = () => {
  return (
    <PublicUserAdvertiserStyled>
      <Header type={"login"} />
      <UserAdvertiserSection isPublic={true} />
      <main>
        <div className="contentPublicPage">
          <h2>Anúncios</h2>
          <ListCars isPublic={true} />
        </div>
      </main>
      <Footer />
    </PublicUserAdvertiserStyled>
  );
};
