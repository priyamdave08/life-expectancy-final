import React from 'react';

export default function Insights() {
  const featureImpact = [
    'GDP per capita',
    'Schooling years',
    'Immunization coverage',
    'HIV/AIDS prevalence',
    'BMI',
    'Alcohol consumption',
  ];

  const countryHighlight = `Sub-Saharan African countries showed the most variability in life expectancy, highlighting health disparities.`;

  const trendData = {
    labels: ['2000', '2003', '2006', '2009', '2012', '2015'],
    datasets: [
      {
        label: 'Predicted Global Life Expectancy',
        data: [67.5, 68.2, 69.1, 70.0, 70.6, 71.4],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const modelPerformance = {
    description: "The AI model achieved a high R² score, indicating strong predictive accuracy.",
  };

  return (
    <div className="insights-page">
      <h1>📊 Insights from the Model</h1>

      <section>
        <h2>📈 Model Performance</h2>
        <p>{modelPerformance.description}</p>
      </section>

      <section>
        <h2>🌍 Key Predictive Features</h2>
        <ul>
          {featureImpact.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🌐 Regional Insight</h2>
        <p>{countryHighlight}</p>
      </section>

      <section>
        <h2>📉 Trend Overview</h2>
        <p>Predicted life expectancy has shown a steady increase globally over the past two decades.</p>
      </section>
    </div>
  );
}
