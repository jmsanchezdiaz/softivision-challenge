import { CandidateType } from "../../types/types";
import { Candidates } from "../Candidates/Candidates";
import "./Step.scss";

interface StepProps {
  step: CandidateType["step"];
  candidatesList: CandidateType[];
  openModal: () => void;
}

export const Step = ({ step, candidatesList, openModal }: StepProps) => {
  return (
    <section className={`${step} step`}>
      <h1 className="step__title">{step}</h1>

      <Candidates candidatesList={candidatesList} step={step} />

      {step === "Entrevista inicial" && (
        <button onClick={openModal} className="step__add">
          Añadir Candidato
        </button>
      )}
    </section>
  );
};
