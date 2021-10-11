import { FormEvent } from "react";
import { useForm } from "../../customHooks/useForm";
import { Actions } from "../../types/types";
import { steps } from "../../steps/steps";
import { Modal } from "../Modal/Modal";
import { useSpreadContext } from "../../customHooks/useSpreadContext";

interface FormData {
  name: string;
  comments: string;
}

interface FormModalProps {
  closeModal: () => void;
}

const FormModal = ({ closeModal }: FormModalProps) => {
  const { dispatch } = useSpreadContext();
  const { name, comments, handleChange, resetForm } = useForm<FormData>({
    name: "",
    comments: "",
  });

  const addCandidate = () => {
    dispatch({
      type: Actions.ADD,
      payload: {
        id: Date.now().toString(),
        name: name,
        comments: comments,
        step: steps[0],
      },
    });
  };

  const completeSubmit = () => {
    addCandidate();
    closeModal();
    resetForm();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length > 0) completeSubmit();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="modal__content">
        <h1>Nuevo candidato</h1>
        <form onSubmit={handleSubmit} className="modal__form" action="">
          <label htmlFor="name">Nombre:</label>
          <input
            value={name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
          />

          <label htmlFor="comments">Comentarios:</label>
          <input
            value={comments}
            onChange={handleChange}
            type="text"
            id="comments"
            name="comments"
          />

          <button className="modal__button">Añadir</button>
        </form>
      </div>
    </Modal>
  );
};

export { FormModal };
