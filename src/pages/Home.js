import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="home-page dark-theme">
      <header className="home-header">
        <h1>🌍 Global Life Expectancy Insights</h1>
        <p>
          Welcome to our interactive data science platform exploring global life expectancy.
          Dive into country-level trends, socioeconomic impacts, and machine learning-based predictions.
        </p>
      </header>

      <section className="home-section">
        <h2>🔍 Explore the Data</h2>
        <p>
          Our <Link to="/explore">Explore</Link> page offers interactive visualizations of life expectancy vs. GDP, highlighting global health disparities and economic patterns.
        </p>
      </section>

      <section className="home-section">
        <h2>📊 Data Science Insights</h2>
        <p>
          On the <Link to="/insights">Insights</Link> page, you’ll find a deep dive into our machine learning models, predictor analysis, and policy implications based on real-world data.
        </p>
      </section>

      <section className="home-section">
        <h2>🧠 Project Mission</h2>
        <p>
          Our mission is to make complex global health data understandable and actionable.
          We aim to support public policy, education, and awareness through data-driven storytelling.
        </p>
      </section>

      <section className="home-section">
        <h2>📚 Cited Sources</h2>
        <p>
          Visit the <Link to="/bibliography">Bibliography</Link> to explore our full list of WHO, UN, and academic data sources that power our analysis.
        </p>
      </section>
    </div>
  );
}
