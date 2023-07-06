import { useContext, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListUserCars } from "../../components/ListUserCars";
import { ModalCreateAdvertiser } from "../../components/ModalCreateAdvertiser";
import { ModalEditProfile } from "../../components/ModalEditProfile";
import { UserAdvertiserSection } from "../../components/UserAdvertiserSection";
import { useUserCar } from "../../hooks/useUserCar";
import { UserAdvertiserStyled } from "./styled";
import { Context } from "../../context/context";
import { ModalEditAddress } from "../../components/ModalEditAddress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalEditAnnouncement } from "../../components/ModelEditAnnouncement";
import { ModalDeleteAnnouncement } from "../../components/ModelaDeleteAnnouncement/Index";
import { ModalDetailsAnnouncement } from "../../components/ModalDetailsAnnouncement";
export const UserAdvertiser = () => {
  const { 
    modalCreateAdvertiser, 
    modalDetail 
  } = useUserCar();

  const {
    modalEditProfileState,
    modalEditAddressState,
    modalEditAnnouncement,
    modalDeleteAnnouncement,
    setModalEditProfileState,
    setModalEditAddressState,
    routeProtection,
  }: any = useContext(Context);

  useEffect(() => {
    routeProtection();
  }, []);

  return (
    <UserAdvertiserStyled>
      <Header type={"dashboard"} />
      <UserAdvertiserSection isPublic={false} />
      <ListUserCars />
      <Footer />
      {modalCreateAdvertiser ? <ModalCreateAdvertiser /> : null}
      {modalEditProfileState && <ModalEditProfile />}
      {modalEditAddressState && <ModalEditAddress />}
      {modalEditAnnouncement && <ModalEditAnnouncement />}
      {modalDeleteAnnouncement && <ModalDeleteAnnouncement />}
      {modalDetail ? <ModalDetailsAnnouncement/> : null}
      <ToastContainer autoClose={2000} />
    </UserAdvertiserStyled>
  );
};
