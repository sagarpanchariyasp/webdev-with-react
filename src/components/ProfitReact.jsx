// ProfitReact.jsx
import React from 'react';
import profitData from './profitData';

const ProfitReact = () => {
  return (
    <section className="profit-section">
      <h2>What Makes React Stand Out?</h2>
      <div className="profit-list">
        {profitData.map((item, index) => (
          <div key={index} className="profit-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfitReact;
