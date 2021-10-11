import { MouseEvent } from "react";
import "./Modal.scss";

interface ModalProps {
  closeModal: (event: MouseEvent<HTMLElement>) => void;
  children: JSX.Element | JSX.Element[];
}

export const Modal = ({ closeModal, children }: ModalProps) => {
  const handlePropagation = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <div id="container" className="modal" onClick={closeModal}>
      <div onClick={handlePropagation}>{children}</div>
    </div>
  );
};
