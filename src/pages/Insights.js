// src/pages/Insights.js
import React from 'react';

export default function Insights() {
  return (
    <div>
      <h1>🔍 Key Insights from the Model</h1>
      <p>After training a linear regression model on WHO data (2000–2015), the top predictors were:</p>
      <ul>
        <li>🧠 <strong>Schooling:</strong> Higher education years = longer life</li>
        <li>💉 <strong>Immunization:</strong> Access to vaccines boosts population longevity</li>
        <li>💸 <strong>GDP:</strong> Strong economic health = better access to care</li>
        <li>📉 <strong>HIV Prevalence:</strong> Major negative impact on life expectancy</li>
      </ul>
      <p>The model achieved an R² score of <strong>0.82</strong> using scikit-learn.</p>
    </div>
  );
}
