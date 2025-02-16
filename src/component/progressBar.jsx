import React from "react";

const stepTitles = {
  1: "Ticket Selection",
  2: "Attendee Details",
  3: "Confirm & Get Ticket",
};

const ProgressBar = ({ currentStep, totalSteps }) => {
  const safeCurrentStep = Math.max(0, Math.min(currentStep, totalSteps));
  const progressPercentage =
    totalSteps > 0 ? (safeCurrentStep / totalSteps) * 100 : 0;

  return (
    <div className="ticketbar">
      <div className="ticket-header">
        <h2 className="ticket-title">
          {stepTitles[safeCurrentStep] || "Step Progress"}
        </h2>

        <span className="step">
          Step {safeCurrentStep}/{totalSteps}
        </span>
      </div>
      <div
        className="ticket-progress-bar"
        role="progressbar"
        aria-valuenow={safeCurrentStep}
        aria-valuemin={0}
        aria-valuemax={totalSteps}
      >
        <div
          className="progress"
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
