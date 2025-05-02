import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ScatterController
} from 'chart.js';
import { Line, Scatter, Bar } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ScatterController
);

export default function Explore() {
  const lifeExpectancyTrend = {
    labels: ['2000', '2003', '2006', '2009', '2012', '2015'],
    datasets: [
      {
        label: 'Global Life Expectancy (years)',
        data: [67.3, 68.1, 69.2, 70.0, 70.8, 71.4],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74,222,128,0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const gdpScatter = {
    datasets: [
      {
        label: 'GDP vs Life Expectancy',
        data: [
          { x: 400, y: 55 },
          { x: 1200, y: 60 },
          { x: 5000, y: 68 },
          { x: 12000, y: 74 },
          { x: 25000, y: 78 },
          { x: 40000, y: 82 },
        ],
        backgroundColor: 'rgba(59,130,246,0.6)',
      },
    ],
  };

  const hivBar = {
    labels: ['Botswana', 'South Africa', 'Nigeria', 'USA', 'Germany', 'Japan'],
    datasets: [
      {
        label: 'HIV Prevalence (%) vs Life Expectancy',
        data: [
          { x: 24.8, y: 50 },
          { x: 18.9, y: 56 },
          { x: 3.1, y: 60 },
          { x: 0.3, y: 78 },
          { x: 0.1, y: 81 },
          { x: 0.1, y: 84 },
        ],
        parsing: {
          xAxisKey: 'x',
          yAxisKey: 'y'
        },
        backgroundColor: 'rgba(239,68,68,0.6)'
      }
    ]
  };

  return (
    <div className="page">
      <div className="section">
        <h1>📊 Explore Life Expectancy Trends</h1>
        <p>
          This section explores key global health and development trends using visualized data from 2000 to 2015. These insights highlight how macro-level indicators such as GDP, education, and disease prevalence correlate with national life expectancy.
        </p>
      </div>

      <div className="section">
        <h2>🌍 Global Life Expectancy Over Time</h2>
        <p>
          Life expectancy has increased steadily over the past 15 years due to advancements in healthcare, disease control, and global public health policy. This trend chart shows the global average based on WHO reports.
        </p>
        <Line data={lifeExpectancyTrend} options={{
          plugins: {
            legend: { labels: { color: '#ffffff' } },
            title: { display: true, text: 'Global Life Expectancy (2000–2015)', color: '#ffffff' }
          },
          scales: {
            x: { ticks: { color: '#ffffff' }, grid: { color: '#333' } },
            y: { ticks: { color: '#ffffff' }, grid: { color: '#333' } }
          }
        }} />
      </div>

      <div className="section">
        <h2>💰 GDP vs Life Expectancy</h2>
        <p>
          Economic strength plays a critical role in public health outcomes. Countries with higher GDP per capita often demonstrate significantly higher life expectancy. The following scatter plot illustrates this correlation.
        </p>
        <Scatter data={gdpScatter} options={{
          plugins: {
            legend: { labels: { color: '#ffffff' } },
            title: { display: true, text: 'GDP per Capita vs Life Expectancy', color: '#ffffff' }
          },
          scales: {
            x: {
              title: { display: true, text: 'GDP per Capita (USD)', color: '#ffffff' },
              ticks: { color: '#ffffff' },
              grid: { color: '#333' }
            },
            y: {
              title: { display: true, text: 'Life Expectancy (years)', color: '#ffffff' },
              ticks: { color: '#ffffff' },
              grid: { color: '#333' }
            }
          }
        }} />
      </div>

      <div className="section">
        <h2>🦠 HIV Prevalence Impact</h2>
        <p>
          One of the most destructive variables in life expectancy during the early 2000s was the HIV/AIDS epidemic. Countries with high prevalence rates experienced sharp declines in population health. This chart demonstrates how HIV correlates with suppressed life expectancy.
        </p>
        <Bar data={hivBar} options={{
          plugins: {
            legend: { labels: { color: '#ffffff' } },
            title: { display: true, text: 'HIV Rate vs Life Expectancy', color: '#ffffff' }
          },
          scales: {
            x: {
              title: { display: true, text: 'HIV Prevalence (%)', color: '#ffffff' },
              ticks: { color: '#ffffff' },
              grid: { color: '#333' }
            },
            y: {
              title: { display: true, text: 'Life Expectancy (years)', color: '#ffffff' },
              ticks: { color: '#ffffff' },
              grid: { color: '#333' }
            }
          }
        }} />
      </div>

      <div className="section">
        <h2>📌 Regional Case Study: Rwanda vs Switzerland</h2>
        <p>
          Rwanda and Switzerland provide two extremes in life expectancy trends. In 2000, Rwanda was recovering from genocide and widespread disease, with a life expectancy under 50. Through public health reforms, foreign aid, and immunization programs, it rose to over 64 by 2015.
        </p>
        <p>
          Switzerland, by contrast, has consistently maintained a life expectancy above 80 years, supported by one of the world's strongest healthcare systems, high GDP per capita, and excellent education infrastructure. These nations show how policy and investment shape demographic health outcomes.
        </p>
      </div>
    </div>
  );
}
