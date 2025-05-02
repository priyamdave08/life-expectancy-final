const featureImpact = [
    'GDP per capita',
    'Schooling years',
    'Immunization coverage',
    'HIV/AIDS prevalence',
    'BMI',
    'Alcohol consumption',
  ];
  
  const countryHighlight = `Sub-Saharan African countries showed the most variability in life expectancy, heavily influenced by HIV/AIDS prevalence and immunization rates. In contrast, European countries tended to cluster around higher life expectancy with stronger education and healthcare infrastructure.`;
  
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
  
  return (
    <div className="insights-page">
      <h1>📊 Insights from the Model</h1>
      
      <section>
        <h2>📈 Model Performance</h2>
        <p>{modelPerformance.description}</p>
      </section>
  
      <section>
        <h2>🔍 Key Predictors of Life Expectancy</h2>
        <ul>
          {featureImpact.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
  
      <section>
        <h2>🌍 Global Patterns & Highlights</h2>
        <p>{countryHighlight}</p>
      </section>
  
      <section style={{ marginTop: '40px' }}>
        <h2>📉 Predicted Trend Visualization</h2>
        <Line data={trendData} />
      </section>
    </div>
  );
  