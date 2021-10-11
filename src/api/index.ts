import { CandidateType } from "../types/types";
import candidates from "./candidates.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  candidates: {
    list: (): Promise<CandidateType[]> =>
      Promise.resolve(candidates as CandidateType[]),
  },
};
