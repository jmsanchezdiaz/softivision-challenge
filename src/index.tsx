import React from "react";
import ReactDOM from "react-dom";
import { CandidatesApp } from "./CandidatesApp";
import { CandidatesProvider } from "./CandidatesProvider/CandidatesProvider";

ReactDOM.render(
  <React.StrictMode>
    <CandidatesProvider>
      <CandidatesApp />
    </CandidatesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
