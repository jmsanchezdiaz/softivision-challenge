import { FormEvent, useState } from "react";
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
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
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
    if (name.length >= 3 && comments.length < 100 && name.length < 100) {
      setIsError(false);
      completeSubmit();
    } else if (comments.length > 100 && name.length > 100) {
      setIsError(true);
      setErrorMessage("Excediste los caracteres maximos");
    } else {
      setIsError(true);
      setErrorMessage("Debes completar los caracteres minimos");
    }
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
            minLength={3}
            maxLength={100}
            required
          />

          <label htmlFor="comments">Comentarios:</label>
          <input
            value={comments}
            onChange={handleChange}
            type="text"
            id="comments"
            name="comments"
            maxLength={100}
          />

          {isError && <span style={{ color: "red" }}>{errorMessage}</span>}
          <button className="modal__button">Añadir</button>
        </form>
      </div>
    </Modal>
  );
};

export { FormModal };
