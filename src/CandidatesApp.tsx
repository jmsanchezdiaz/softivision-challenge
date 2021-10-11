import { useModal } from "./customHooks/useModal";
import { FormModal } from "./components/FormModal/FormModal";
import { StepsList } from "./components/StepsList/StepsList";
import { Header } from "./components/Header/Header";
import "./main.scss";

export const CandidatesApp = () => {
  const { isOpenModal, openModal, closeModal } = useModal();

  return (
    <div className="candidates-app">
      <Header />
      <StepsList openModal={openModal} />
      {isOpenModal && <FormModal closeModal={closeModal} />}
    </div>
  );
};
