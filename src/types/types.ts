import React from "react";

export interface CandidateType {
  id: string;
  name: string;
  step:
    | "Entrevista inicial"
    | "Entrevista técnica"
    | "Oferta"
    | "Asignación"
    | "Rechazo";
  comments: string;
}
export type ReducerState = {
  candidatesList: CandidateType[];
};

export interface CandidatesContextType {
  candidatesState: ReducerState;
  dispatch: React.Dispatch<ActionType>;
}

export enum Actions {
  ADD = "ADD - CANDIDATE",
  UPDATE = "UPDATE - CANDIDATE",
  SET_ALL = "SET ALL- CANDIDATES",
}

export type ActionType =
  | { type: Actions.ADD; payload: CandidateType }
  | {
      type: Actions.UPDATE;
      payload: {
        id: string;
        nextStep: CandidateType["step"];
      };
    }
  | { type: Actions.SET_ALL; payload: CandidateType[] };
