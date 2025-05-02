// src/pages/Explore.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Explore() {
  const lineData = {
    labels: ['2000', '2005', '2010', '2015', '2020'],
    datasets: [
      {
        label: 'Global Average Life Expectancy',
        data: [67.5, 68.9, 70.2, 71.4, 72.6],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ['Norway', 'Japan', 'Switzerland', 'India', 'Nigeria'],
    datasets: [
      {
        label: 'Life Expectancy (2020)',
        data: [82.5, 84.2, 83.6, 69.5, 54.3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="page">
      <div className="section">
        <h1>📈 Explore the Data</h1>
        <p>
          This page presents detailed data visualizations and breakdowns of life expectancy trends
          across countries, time periods, and health/income factors. All data used is sourced from
          the WHO Global Health Observatory, the World Bank, and the United Nations Statistical
          Division.
        </p>
      </div>

      <div className="section">
        <h2>🌐 Global Trend Over Time</h2>
        <Line data={lineData} options={{ responsive: true }} />
        <p>
          Over the past two decades, the global average life expectancy has increased due to
          advancements in immunization coverage, maternal health, and economic development.
          However, inequalities persist by region.
        </p>
      </div>

      <div className="section">
        <h2>🏆 Country Comparisons</h2>
        <Bar data={barData} options={{ responsive: true }} />
        <p>
          The gap between developed and developing nations is striking. Nations like Japan and
          Norway benefit from universal healthcare and high education levels. In contrast, countries
          like Nigeria face challenges from limited health infrastructure and political instability.
        </p>
      </div>

      <div className="section">
        <h2>📊 GDP vs Life Expectancy</h2>
        <p>
          GDP per capita is positively correlated with life expectancy, but the strength of that
          relationship varies. Some nations achieve high longevity with low GDP through strong
          preventive care programs, like Cuba and Vietnam.
        </p>
      </div>

      <div className="section">
        <h2>📚 Education & Literacy Rates</h2>
        <p>
          Education, particularly of women, is one of the strongest predictors of population health.
          Countries with average schooling above 10 years tend to report significantly lower infant
          mortality and higher life expectancy.
        </p>
        <ul>
          <li>South Korea: Improved from 6.2 years in 1980 to 13.3 years by 2020</li>
          <li>India: Disparities in rural education slow progress</li>
          <li>Sub-Saharan Africa: Lowest global female literacy rates</li>
        </ul>
      </div>

      <div className="section">
        <h2>🏥 Health Expenditure Trends</h2>
        <p>
          Countries that spend over 9% of GDP on health often achieve better longevity, but spending
          must be efficient. The US, despite spending over 17% of GDP, lags behind OECD peers in
          life expectancy due to inequality and chronic disease rates.
        </p>
      </div>

      <div className="section">
        <h2>🧪 Epidemiological Case Insights</h2>
        <ul>
          <li>
            <strong>Lesotho:</strong> Life expectancy dropped due to HIV/AIDS, but rose after ART
            access in 2010
          </li>
          <li>
            <strong>Japan:</strong> High salt intake offset by longevity due to social health access
          </li>
          <li>
            <strong>Bangladesh:</strong> Rapid gains with minimal resources through vaccination
            campaigns
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>🌍 Regional Insights Summary</h2>
        <ul>
          <li>
            <strong>Europe:</strong> Aging population driving up healthcare needs; consistent high
            life expectancy
          </li>
          <li>
            <strong>Africa:</strong> Under-5 mortality, malaria, and low female literacy are major
            constraints
          </li>
          <li>
            <strong>Asia:</strong> Large disparities between Southeast Asia and Central Asia
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>📌 Final Thoughts</h2>
        <p>
          Life expectancy is a multidimensional indicator. While income plays a role, education,
          immunization coverage, sanitation, and cultural norms all interact to shape the health of
          populations. Reducing inequality and improving access to education remains essential.
        </p>
      </div>
    </div>
  );
}
