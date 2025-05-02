import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Explore from './pages/Explore';
import About from './pages/About';
import Bibliography from './pages/Bibliography';
import './App.css';
import logo from './logo.svg';


export default function App() {
  return (
    <Router>
      <div className="app dark-theme">
        <nav className="navbar">
        <div className="nav-logo">
        <img src={logo} alt="Logo" width="40" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
        Life Expectancy Project
      </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/bibliography">Bibliography</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/bibliography" element={<Bibliography />} />
        </Routes>
      </div>
    </Router>
  );
}
