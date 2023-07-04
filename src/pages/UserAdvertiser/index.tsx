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

export const UserAdvertiser = () => {

  const { modalCreateAdvertiser } = useUserCar();

  const {
    modalEditProfileState,
    modalEditAddressState,
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
      <ToastContainer autoClose={2000} />
    </UserAdvertiserStyled>
  );
};
