import React from 'react';
import './Insights.css';

export default function Insights() {
  return (
    <div className="page">
      <div className="section">
        <h1>📊 Modeling Life Expectancy: Machine Learning Analysis</h1>
        <p>
          This page provides a full overview of the model developed to analyze global life expectancy.
          Using data from over 190 countries, our project applied multivariate regression models
          (including linear regression, Huber Regressor, and tree-based models) to predict life expectancy
          based on variables such as income, education, mortality, and disease prevalence.
        </p>
      </div>

      <div className="section">
        <h2>🧪 Modeling Methodology</h2>
        <ul>
          <li><strong>Data Source:</strong> WHO and UN datasets from 2000–2015</li>
          <li><strong>Features:</strong> GDP, schooling years, HIV/AIDS rate, child mortality, immunization, mortality indicators, health spending</li>
          <li><strong>Approach:</strong> Linear regression, Huber Regressor (best performance), Random Forest (nonlinear baseline)</li>
          <li><strong>Accuracy:</strong> R² ≈ 0.88, MAE ≈ ±2.8 years</li>
          <li><strong>Validation:</strong> Time-based split (train on 2000–2012, test on 2013–2015)</li>
        </ul>
      </div>

      <div className="section">
        <h2>📌 Key Predictors and Impacts</h2>
        <ul>
          <li><strong>Adult/Child Mortality Rates:</strong> Direct impact on life expectancy; dominant predictors</li>
          <li><strong>Income Index:</strong> Higher income increases predicted life span significantly</li>
          <li><strong>Years of Schooling:</strong> Each year adds 0.4–0.7 years to longevity</li>
          <li><strong>HIV/AIDS Prevalence:</strong> Lowers expectancy sharply in Sub-Saharan Africa</li>
          <li><strong>Child Thinness:</strong> Proxy for chronic malnutrition and developmental risk</li>
        </ul>
      </div>

      <div className="section">
        <h2>🌍 Country Examples</h2>
        <ul>
          <li><strong>South Korea:</strong> Rose from 52 to 84 (1950–2020) due to massive education and health reforms</li>
          <li><strong>Lesotho:</strong> Life expectancy remains below 55 due to HIV prevalence and limited infrastructure</li>
          <li><strong>Russia:</strong> Male expectancy dropped during 1990s, recovered via alcohol regulation and health policy</li>
          <li><strong>Cuba:</strong> High life expectancy despite low GDP—thanks to proactive public health systems</li>
        </ul>
      </div>

      <div className="section">
        <h2>⚠️ Error Analysis</h2>
        <p>
          The model underperforms in countries with sudden conflict or disaster (e.g., Syria, Ukraine).
          It also struggles when nations experience rapid transitions (COVID-19, regime change).
        </p>
      </div>

      <div className="section">
        <h2>🧠 Feature Summary</h2>
        <ul>
          <li><strong>Adult Mortality:</strong> Inversely related—higher death rates reduce longevity</li>
          <li><strong>Schooling:</strong> Positively correlated with health knowledge and access</li>
          <li><strong>HIV/AIDS:</strong> High prevalence = lower life span</li>
          <li><strong>Spending:</strong> Only helpful when equitably distributed</li>
          <li><strong>Alcohol Use:</strong> Moderate = neutral, excess = detrimental (especially in men)</li>
        </ul>
      </div>

      <div className="section">
        <h2>📉 Model Results</h2>
        <ul>
          <li><strong>R² Score (Huber):</strong> 0.882</li>
          <li><strong>MAE (Huber):</strong> 2.73 years</li>
          <li><strong>Reliability:</strong> Model predicts within ±2.7 years for 85% of countries</li>
        </ul>
        <p>
          This makes our model a strong tool for international health agencies and policy forecasting.
        </p>
      </div>

      <div className="section">
        <h2>🌐 Key Country Insights</h2>
        <ul>
          <li><strong>South Korea:</strong> Life expectancy increased due to universal education and healthcare</li>
          <li><strong>Lesotho:</strong> HIV/AIDS prevalence suppresses long-term improvement</li>
          <li><strong>Russia:</strong> Health outcomes worsened post-1990, but rebounded with policy reforms</li>
          <li><strong>Cuba:</strong> High outcomes achieved via preventative care model</li>
        </ul>
      </div>

      <div className="section">
        <h2>🧩 Feature Impact Summary</h2>
        <ul>
          <li><strong>Adult Mortality:</strong> Strongest negative predictor</li>
          <li><strong>Education:</strong> Adds multiple years to life expectancy</li>
          <li><strong>HIV/AIDS:</strong> Devastating impact on youth and women in developing regions</li>
          <li><strong>Alcohol & Tobacco:</strong> Shortens life in a dose-dependent pattern</li>
          <li><strong>Health System Investment:</strong> Most impactful when combined with equity</li>
        </ul>
      </div>

      <div className="section">
        <h2>📎 Model Limitations</h2>
        <ul>
          <li>Pre-COVID dataset does not account for pandemic impact</li>
          <li>No mental health or pollution metrics</li>
          <li>Underreporting in low-income countries causes bias</li>
        </ul>
      </div>

      <div className="section">
        <h2>🚀 Future Directions</h2>
        <ul>
          <li>Update with WHO 2020–2024 post-COVID datasets</li>
          <li>Model regional disparities in maternal/child health</li>
          <li>Explore causal inference (e.g., IV regression)</li>
          <li>Include gender-specific mortality modeling</li>
        </ul>
      </div>

      <div className="section">
        <h2>📚 Summary & Conclusions</h2>
        <p>
          Global life expectancy is shaped by a constellation of interconnected variables:
          disease burden, access to education, health equity, economic policy, and international support.
        </p>
        <p>
          Our model shows that predictive algorithms, when trained on quality data, can provide actionable insights 
          for both global health governance and local intervention strategies.
        </p>
      </div>

      <footer className="section">
        <p><em>Data derived from WHO, UN, and Gapminder repositories. Analysis conducted in Python (pandas, scikit-learn) and rendered using React.</em></p>
      </footer>
    </div>
  );
}

