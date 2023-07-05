import * as S from "./style";
import { useContext } from "react";
import { Context } from "../../context/context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputModalCreate } from "../InputModalCreate";
import { EditAnnouncementData, schemaEditAnnouncement } from "./validator";
import { useUserCar } from "../../hooks/useUserCar";

export const ModalEditAnnouncement = () => {
  const {
    createAdvertiserError,
    setModalEditAnnouncement,
    setModalDeleteAnnouncement,
    idCar,
  }: any = useContext(Context);
  
  const { patchAnnouncement, getUniqueAnnouncement } = useUserCar();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditAnnouncementData>({
    // resolver: yupResolver(schemaEditAnnouncement),
  });
  function submit(formData: EditAnnouncementData) {
    getUniqueAnnouncement(idCar);
    patchAnnouncement(formData, idCar);
    setModalEditAnnouncement(false);
    reset();
  }

  const closeModal = () => {
    setModalEditAnnouncement(false);
  };
  const openModalDelete = () => {
    setModalEditAnnouncement(false);
    setModalDeleteAnnouncement(true);
  };
  return (
    <S.DivModal>
      <div className="modalContent">
        <div className="titleCloseModal">
          <h1>Editar anúncio</h1>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            x
          </button>
        </div>
        <div className="carInfo">
          <p>Informações do veículo</p>
          <form onSubmit={handleSubmit(submit)}>
            <InputModalCreate
              label="Marca"
              placeholder="Digite a marca"
              type="text"
              width50={false}
              register={register}
              toRegister="brand"
            />
            <InputModalCreate
              label="Modelo"
              placeholder="Digite o modelo"
              type="text"
              width50={false}
              register={register}
              toRegister="model"
            />
            <div className="twoInputs">
              <InputModalCreate
                label="Ano"
                placeholder="Ano"
                type="number"
                width50={true}
                register={register}
                toRegister="year"
              />
              <InputModalCreate
                label="Combustível"
                placeholder="Combustível"
                type="text"
                width50={true}
                register={register}
                toRegister="fuel"
              />
            </div>
            <div className="twoInputs">
              <InputModalCreate
                label="Quilometragem"
                placeholder="Quilometragem"
                type="number"
                width50={true}
                register={register}
                toRegister="km"
              />
              <InputModalCreate
                label="Cor"
                placeholder="Cor"
                type="text"
                width50={true}
                register={register}
                toRegister="color"
              />
            </div>
            <div className="twoInputs">
              <InputModalCreate
                label="Preço tabela FIPE"
                placeholder="Preço tabela"
                type="number"
                width50={true}
                register={register}
                toRegister="fipePrice"
              />
              <InputModalCreate
                label="Preço"
                placeholder="Preço"
                type="number"
                width50={true}
                register={register}
                toRegister="price"
              />
            </div>
            <div className="divTextarea">
              <label>Descrição</label>
              <textarea {...register("description")} />
            </div>
            <InputModalCreate
              label="Imagem da capa"
              placeholder="URL imagem"
              type="text"
              width50={false}
              register={register}
              toRegister="image"
            />
            <div className="divErrors">
              <p>{errors.brand?.message}</p>
              <p>{errors.model?.message}</p>
              <p>{errors.year?.message}</p>
              <p>{errors.fuel?.message}</p>
              <p>{errors.km?.message}</p>
              <p>{errors.color?.message}</p>
              <p>{errors.fipePrice?.message}</p>
              <p>{errors.price?.message}</p>
              <p>{errors.description?.message}</p>
              <p>{errors.image?.message}</p>
            </div>
            {createAdvertiserError === true ? (
              <span className="errorCreate">Ops! Algo deu errado</span>
            ) : null}
            <div className="divButtons">
              <button
                className="buttonCancel"
                onClick={() => {
                  openModalDelete();
                }}
              >
                Excluir anúncio
              </button>
              <button type="submit" className="buttonSave">
                Salvar alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </S.DivModal>
  );
};
