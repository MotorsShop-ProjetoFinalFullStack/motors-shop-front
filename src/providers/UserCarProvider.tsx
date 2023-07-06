import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CreateAnnouncementData } from "../components/ModalCreateAdvertiser/validator";
import { User } from "./CarProvider";
import { api } from "../service";
import { useAuth } from "../hooks/useAuth";
import { Context } from "../context/context";

import { EditAnnouncementData } from "../components/ModelEditAnnouncement/validator";

interface UserCarProviderProps {
  children: ReactNode;
}

interface Car {
  id: number;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  fipePrice: number;
  price: number;
  description: string;
  image: string;
  user: User;
}

interface UserCarContextValues {
  allUserCars: Car[];
  modalCreateAdvertiser: boolean;
  setModalCreateAdvertiser: React.Dispatch<React.SetStateAction<boolean>>;
  createAnnouncement: (data: CreateAnnouncementData) => void;
  deleteAnnouncement: (id: number) => void;
  modalSuccess: boolean;
  setModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  createAdvertiserError: boolean;
  setCreateAdvertiserError: React.Dispatch<React.SetStateAction<boolean>>;
  patchAnnouncement: (
    formData: EditAnnouncementData,
    id: number
  ) => Promise<void>;
  getUniqueAnnouncement: (id: number) => Promise<any | undefined>;
  modalDetail: boolean;
  carDetailId: string;
  openModalDetail: (id: string) => void;
  closeModalDetail: () => void
}

export const UserCarContext = createContext<UserCarContextValues>(
  {} as UserCarContextValues
);

export const UserCarProvider = ({ children }: UserCarProviderProps) => {
  const { login } = useAuth();

  const { setModalDeleteAnnouncement, setModalEditAnnouncement }: any =
    useContext(Context);

  const [allUserCars, setAllUserCars] = useState<Car[]>([]);

  const [modalCreateAdvertiser, setModalCreateAdvertiser] =
    useState<boolean>(false);
  const [modalSuccess, setModalSuccess] = useState<boolean>(false);

  const [createAdvertiserError, setCreateAdvertiserError] =
    useState<boolean>(false);

  const [modalDetail, setModalDetail] = 
    useState<boolean>(false)

  const [carDetailId, setCarDetailId] = 
    useState<string>("")

  const [carSelected, setCarSelected] = useState<Car | null>(null);

  const openModalDetail = (id: string) => {
    setModalDetail(true)
    setCarDetailId(id)
  }

  const closeModalDetail = () => {
    setModalDetail(false)
    setCarDetailId("")
  }

  const createAnnouncement = async (data: CreateAnnouncementData) => {
    const dataToRegister = {
      brand: data.brand,
      model: data.model,
      year: `${data.year}-02-02`,
      fuel: data.fuel,
      km: parseInt(data.km),
      color: data.color,
      fipePrice: parseInt(data.fipePrice),
      price: parseInt(data.fipePrice),
      description: data.description,
      image: data.image,
    };

    const token: string | null = localStorage.getItem("@Token");

    try {
      await api.post("/announcements", dataToRegister, {
        headers: { authorization: `Bearer ${token}` },
      });

      setModalSuccess(true);
    } catch (err) {
      setCreateAdvertiserError(true);
    }
  };

  const getAllUserCars = async () => {
    const token: string | null = localStorage.getItem("@Token");

    if (!token) {
      return null;
    }

    try {
      const requestUserAnnouncements = await api.get("/announcements/users", {
        headers: { authorization: `Bearer ${token}` },
      });

      const userCars: Car[] = requestUserAnnouncements.data;

      setAllUserCars(userCars);
      setCreateAdvertiserError(false);
    } catch (err) {
      setCreateAdvertiserError(true);
    }
  };
  async function deleteAnnouncement(id: number) {
    try {
      await api.delete(`announcements/${id}`);
      await getAllUserCars();
      setTimeout(() => {
        setModalDeleteAnnouncement(false);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }
  async function getUniqueAnnouncement(id: number) {
    try {
      const request = await api.get(`announcements/unique/${id}`);

      const requestData: Car = request.data;

      setCarSelected(requestData);
    } catch (err) {
      console.log(err);
    }
  }
  async function patchAnnouncement(formData: EditAnnouncementData, id: number) {
    const data = {
      brand:
        formData.brand !== null &&
        formData.brand !== undefined &&
        formData.brand !== ""
          ? formData.brand
          : carSelected?.brand,
      model:
        formData.model !== null &&
        formData.model !== undefined &&
        formData.model !== ""
          ? formData.model
          : carSelected?.model,
      year:
        formData.year !== null &&
        formData.year !== undefined &&
        formData.year !== ""
          ? `${formData.year}-01-01`
          : carSelected?.year,

      fuel:
        formData.fuel !== null &&
        formData.fuel !== undefined &&
        formData.fuel !== ""
          ? formData.fuel
          : carSelected?.fuel,
      km:
        formData.km !== null && formData.km !== undefined && formData.km !== ""
          ? parseInt(formData.km)
          : carSelected?.km,
      color:
        formData.color !== null &&
        formData.color !== undefined &&
        formData.color !== ""
          ? formData.color
          : carSelected?.color,
      fipePrice:
        formData.fipePrice !== null &&
        formData.fipePrice !== undefined &&
        formData.fipePrice !== ""
          ? parseInt(formData.fipePrice)
          : carSelected?.fipePrice,
      price:
        formData.price !== null &&
        formData.price !== undefined &&
        formData.price !== ""
          ? parseInt(formData.price)
          : carSelected?.price,
      description:
        formData.description !== null &&
        formData.description !== undefined &&
        formData.description !== ""
          ? formData.description
          : carSelected?.description,
      image:
        formData.image !== null &&
        formData.image !== undefined &&
        formData.image !== ""
          ? formData.image
          : carSelected?.image,
    };
    console.log(data);
    try {
      await api.patch(`announcements/${id}`, data);
      getAllUserCars();

      setTimeout(() => {
        setModalEditAnnouncement(false);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUserCars();
  }, [login, modalSuccess]);

  return (
    <UserCarContext.Provider
      value={{
        allUserCars,
        modalCreateAdvertiser,
        setModalCreateAdvertiser,
        createAnnouncement,
        deleteAnnouncement,
        modalSuccess,
        setModalSuccess,
        createAdvertiserError,
        setCreateAdvertiserError,
        patchAnnouncement,
        getUniqueAnnouncement,
        modalDetail,
        carDetailId,
        openModalDetail,
        closeModalDetail
      }}
    >
      {children}
    </UserCarContext.Provider>
  );
};
