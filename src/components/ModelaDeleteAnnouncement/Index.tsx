import { useContext } from "react";
import * as S from "./style";
import { Context } from "../../context/context";
import { useUserCar } from "../../hooks/useUserCar";

export const ModalDeleteAnnouncement = () => {
  const { setModalDeleteAnnouncement, idCar }: any = useContext(Context);
  const { deleteAnnouncement } = useUserCar();
  const closeModal = () => {
    setModalDeleteAnnouncement(false);
  };
  const deleteAnnouncementPermanently = () => {
    deleteAnnouncement(idCar);
  };

  return (
    <S.DivModal>
      <div className="divGlobal">
        <div className="divHeader">
          <p>Excluir anúncio</p>
          <button
            id="ButClose"
            onClick={() => {
              closeModal();
            }}
          >
            x
          </button>
        </div>
        <div className="divArticle">
          <h3>Tem certeza que deseja remover este anúncio?</h3>
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
        </div>
        <div className="buttons">
          <button
            className="button-cancel"
            onClick={() => {
              closeModal();
            }}
          >
            Cancelar
          </button>
          <button
            className="button-delete"
            onClick={() => {
              deleteAnnouncementPermanently();
            }}
          >
            Sim, excluir anúncio
          </button>
        </div>
      </div>
    </S.DivModal>
  );
};
