// src/pages/About.js
import React from 'react';

export default function About() {
  return (
    <div>
      <h1>👨‍💻 About This Project</h1>
      <p>
        This project was created to explore the intersection of data science and public health by analyzing what factors most influence life expectancy worldwide.
      </p>
      <h2>🛠️ Tech Stack</h2>
      <ul>
        <li>Frontend: React.js with Chart.js and Tailwind-inspired styling</li>
        <li>Data Analysis: Python (pandas, scikit-learn)</li>
        <li>Deployment: Vercel with GitHub integration</li>
        <li>Dataset: WHO/UN Life Expectancy (2000–2015)</li>
      </ul>
      <h2>👤 Author</h2>
      <p>
        I’m Priyam Dave, a high school student passionate about data science, AI, and making research accessible. I plan to study Statistics and Data Science in college.
      </p>
    </div>
  );
}
