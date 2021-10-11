import { useContext } from "react";
import { CandidatesContext } from "../CandidatesProvider/CandidatesProvider";

export const useSpreadContext = () => {
  const context = useContext(CandidatesContext);
  return { ...context };
};
