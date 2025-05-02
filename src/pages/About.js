import React from 'react';

export default function About() {
  return (
    <div className="about-page dark-theme">
      <h1>📘 About This Project</h1>
      <p>
        This data science project was developed to explore global disparities in life expectancy.
        Inspired by real-world challenges in public health and policy, our platform combines
        visual storytelling, advanced machine learning, and accessible design to educate and engage users.
      </p>

      <h2>🎯 Goals</h2>
      <ul>
        <li>Raise awareness about health inequality through global datasets</li>
        <li>Use statistical and machine learning tools to uncover trends</li>
        <li>Encourage students and researchers to build upon our findings</li>
      </ul>

      <h2>🔧 Tools & Technologies</h2>
      <ul>
        <li>React.js for UI development</li>
        <li>Chart.js and Recharts for interactive graphs</li>
        <li>Python (Scikit-learn) for model training (pre-processed)</li>
        <li>GitHub & Vercel for hosting and deployment</li>
      </ul>

      <p>
        Developed by a passionate high school student exploring the intersection of
        data science, health policy, and global development.
      </p>
    </div>
  );
}

