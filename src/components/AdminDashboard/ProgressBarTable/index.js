import React from "react";
import { ProgressBar } from "react-bootstrap";

const ProgressBarTable = ({ starNumber, progrssBarNumber }) => {
  return (
    <div className="progress-table">
      <p className="progress-text">{starNumber} Stars</p>
      <div className="progress-bar-container">
        <ProgressBar now={progrssBarNumber} variant="warning" />
      </div>
      <p className="progress-text">{progrssBarNumber} %</p>
    </div>
  );
};

export default ProgressBarTable;
