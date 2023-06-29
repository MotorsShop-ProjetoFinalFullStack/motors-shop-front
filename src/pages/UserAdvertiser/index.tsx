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
      <button onClick={() => setModalEditAddressState(true)}></button>
      <Footer />
      {modalCreateAdvertiser ? <ModalCreateAdvertiser /> : null}
      {modalEditProfileState && <ModalEditProfile />}
      {modalEditAddressState && <ModalEditAddress />}
    </UserAdvertiserStyled>
  );
};
