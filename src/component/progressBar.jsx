import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="ticketbar">
      <div className="ticket-header">
        <span className="step">Step {currentStep}/{totalSteps}</span>
      </div>
      <div className="ticket-progress-bar">
        <div
          className="progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
