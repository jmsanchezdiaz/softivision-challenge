import { useSpreadContext } from "../../customHooks/useSpreadContext";
import { steps } from "../../steps/steps";
import { Step } from "../Step/Step";
import "./StepsList.scss";

interface StepListProps {
  openModal: () => void;
}

export const StepsList = ({ openModal }: StepListProps) => {
  const { candidatesState } = useSpreadContext();
  const { candidatesList } = candidatesState;

  return (
    <div className="steps">
      {steps?.map((step) => {
        return (
          <Step
            key={step}
            openModal={openModal}
            step={step}
            candidatesList={candidatesList}
          />
        );
      })}
    </div>
  );
};
