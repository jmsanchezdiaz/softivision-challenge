import { createContext, useEffect, useReducer } from "react";
import api from "../api";
import { candidatesReducer } from "../reducer/candidatesReducer";

import { Actions, CandidatesContextType } from "../types/types";

export const CandidatesContext = createContext<CandidatesContextType>(
  {} as CandidatesContextType
);

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const CandidatesProvider = ({ children }: ProviderProps) => {
  const [candidatesState, dispatch] = useReducer(candidatesReducer, {
    candidatesList:
      JSON.parse(window.localStorage.getItem("candidatesList") as string) || [],
  });

  useEffect(() => {
    api.candidates.list().then((res) => {
      if (candidatesState.candidatesList.length === 0) {
        dispatch({
          type: Actions.SET_ALL,
          payload: res,
        });
      }
    });
    window.localStorage.setItem(
      "candidatesList",
      JSON.stringify(candidatesState.candidatesList)
    );
  }, [candidatesState, dispatch]);

  const data = {
    candidatesState,
    dispatch,
  };

  return (
    <CandidatesContext.Provider value={data}>
      {children}
    </CandidatesContext.Provider>
  );
};
