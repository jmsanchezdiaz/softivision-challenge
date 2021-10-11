import { Actions, ActionType, ReducerState } from "../types/types";

export const candidatesReducer = (state: ReducerState, action: ActionType) => {
  switch (action.type) {
    case Actions.ADD:
      return {
        ...state,
        candidatesList: [...state.candidatesList, action.payload],
      };
    case Actions.UPDATE:
      return {
        ...state,
        candidatesList: [
          ...state.candidatesList.map((candidate) => {
            if (candidate.id === action.payload.id) {
              return {
                ...candidate,
                step: action.payload.nextStep,
              };
            }
            return candidate;
          }),
        ],
      };
    case Actions.SET_ALL:
      return {
        ...state,
        candidatesList: action.payload,
      };
    default:
      return state;
  }
};
