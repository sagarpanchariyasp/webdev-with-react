import React from "react";
import WhyCard from "./WhyCard";

import whyCardData from "./whyCardData";

function WhyReact() {
  return (
    <section id="why-react" style={{ padding: "2rem 0" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem", color: "#00d8ff" }}>
        Why Choose React for Your Next Project?
      </h2>
      <div className="why-card-container">
        {whyCardData.map((data, index) => (
          <WhyCard key={index} title={data.title} text={data.text} icon={data.icon} />
        ))}
      </div>
    </section>
  );
}

export default WhyReact;
