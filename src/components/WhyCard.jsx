import React from "react";

function WhyCard({ title, text, icon }) {
  return (
    <div className="why-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default WhyCard;
