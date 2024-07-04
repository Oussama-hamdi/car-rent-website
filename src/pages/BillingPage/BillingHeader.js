import React from "react";
import "./BillingHeader.css";

function BillingHeader({ title, text, showSteps }) {
  return (
    <div className="billing-header">
      <div className="header">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {showSteps && (
        <div className="step">
          <p>Step 1 of 4</p>
        </div>
      )}
    </div>
  );
}

export default BillingHeader;
