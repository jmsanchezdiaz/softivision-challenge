import { useSpreadContext } from "../../customHooks/useSpreadContext";
import { steps } from "../../steps/steps";
import { Actions, CandidateType } from "../../types/types";
import "./CandidateItem.scss";

interface CandidateItemProps {
  candidate: CandidateType;
}
const CandidateItem = ({ candidate }: CandidateItemProps) => {
  const { dispatch } = useSpreadContext();

  const goBack = () => {
    const actualStepIndex = steps.indexOf(candidate?.step);
    const previousStep = steps[actualStepIndex - 1] ?? candidate?.step;
    dispatch({
      type: Actions.UPDATE,
      payload: {
        id: candidate.id,
        nextStep: previousStep as CandidateType["step"],
      },
    });
  };
  const goNext = () => {
    const actualStepIndex = steps.indexOf(candidate?.step);
    const nextStep = steps[actualStepIndex + 1] ?? candidate?.step;
    dispatch({
      type: Actions.UPDATE,
      payload: {
        id: candidate.id,
        nextStep: nextStep as CandidateType["step"],
      },
    });
  };

  return (
    <div className="candidate">
      <div className="candidate__info">
        <p className="candidate__name">{candidate.name}</p>
        <p className="candidate__comments">{candidate.comments}</p>
      </div>
      <div className="candidate__controls">
        <button onClick={goBack} className="candidate__control--back">
          {"<"}
        </button>
        <button onClick={goNext} className="candidate__control--next">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CandidateItem;
