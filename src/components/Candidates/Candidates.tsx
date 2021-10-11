import { CandidateType } from "../../types/types";
import CandidatesList from "../CandidatesList/CandidatesList";
import "./Candidates.scss";

interface CandidatesProps {
  candidatesList: CandidateType[];
  step: string;
}

export const Candidates = ({ candidatesList, step }: CandidatesProps) => {
  const stepCandidates = candidatesList?.filter(
    (candidate) => candidate.step === step
  );

  return (
    <>
      <div className="candidates">
        {stepCandidates.length > 0 ? (
          <CandidatesList stepCandidates={stepCandidates} />
        ) : (
          <p className="candidates__placeholder">No hay candidatos</p>
        )}
      </div>
    </>
  );
};
