// Home.js
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>🌍 AI-Powered Life Expectancy Prediction</h1>
      <p>This full-stack React site explores how socio-economic and health indicators affect life expectancy around the world.</p>

      <h2>🔍 Study Summary</h2>
      <p>
        Life expectancy is driven by access to healthcare, GDP, education, immunization, and lifestyle. Using a machine learning model with 18 predictors and data from 190+ countries (2000–2015), this project surfaced key global insights.
      </p>

      <h2>📈 What You’ll Find</h2>
      <ul>
        <li><strong>Explore:</strong> Visualizations of trends by country, GDP, HIV rates, and more</li>
        <li><strong>Insights:</strong> Key takeaways from the ML model + predictions</li>
        <li><strong>About:</strong> Tech stack + author</li>
        <li><strong>Bibliography:</strong> Sources used in the study</li>
      </ul>
    </div>
  );
}
