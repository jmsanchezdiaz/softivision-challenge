import { CandidateType } from "../../types/types";
import CandidateItem from "../CandidateItem/CandidateItem";

interface CandidatesListProps {
  stepCandidates: CandidateType[];
}

const CandidatesList = ({ stepCandidates }: CandidatesListProps) => {
  return (
    <>
      {stepCandidates?.map((candidate) => {
        return <CandidateItem key={candidate.id} candidate={candidate} />;
      })}
    </>
  );
};

export default CandidatesList;
