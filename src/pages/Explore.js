// Explore.js
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
  ScatterController
} from 'chart.js';
import { Line, Scatter } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  ScatterController
);

const Explore = () => {
  const lineData = {
    labels: ['2000', '2003', '2006', '2009', '2012', '2015'],
    datasets: [
      {
        label: 'Global Life Expectancy',
        data: [67.3, 68.2, 69.1, 69.8, 70.4, 71],
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54,162,235,0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#ffffff' } },
      title: {
        display: true,
        text: 'Global Life Expectancy Trend (2000–2015)',
        color: '#ffffff',
        font: { size: 18 }
      }
    },
    scales: {
      x: { ticks: { color: '#ffffff' }, grid: { color: '#333' } },
      y: { ticks: { color: '#ffffff' }, grid: { color: '#333' } }
    },
  };

  const scatterData = {
    datasets: [
      {
        label: 'GDP vs. Life Expectancy (Sample)',
        data: [
          { x: 500, y: 60 },
          { x: 1000, y: 65 },
          { x: 5000, y: 70 },
          { x: 10000, y: 75 },
          { x: 20000, y: 78 },
          { x: 40000, y: 82 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
    ],
  };

  const scatterOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#ffffff' } },
      title: {
        display: true,
        text: 'GDP per Capita vs. Life Expectancy',
        color: '#ffffff',
        font: { size: 18 }
      }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'GDP per Capita (USD)',
          color: '#ffffff'
        },
        ticks: { color: '#ffffff' },
        grid: { color: '#333' }
      },
      y: {
        title: {
          display: true,
          text: 'Life Expectancy (years)',
          color: '#ffffff'
        },
        ticks: { color: '#ffffff' },
        grid: { color: '#333' }
      }
    },
  };

  return (
    <div>
      <h2>🌍 Explore the Data</h2>
      <p>This page visualizes trends in life expectancy and GDP across various countries and time periods.</p>

      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <Line data={lineData} options={lineOptions} />
      </div>

      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <Scatter data={scatterData} options={scatterOptions} />
        <div className="section">
  <h2>📌 Regional Case Study: Rwanda vs. Switzerland</h2>
  <p>
    In 2000, Rwanda's life expectancy was just under 50 years due to limited healthcare, high HIV/AIDS prevalence, and post-conflict recovery. By 2015, aggressive immunization campaigns and international health investment raised it to over 64 years.
  </p>
  <p>
    Switzerland, by contrast, maintained life expectancy above 81 years throughout the period, with strong GDP, universal healthcare, and preventative medicine.
  </p>
  <p>
    This contrast highlights the influence of sustained policy efforts and healthcare access on improving life expectancy even in low-income nations.
  </p>
</div>

      </div>
    </div>
  );
};

export default Explore;
