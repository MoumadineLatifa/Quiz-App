
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Jokes from './pages/Jokes';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quotes">Quotes</Link></li>
          <li><Link to="/jokes">Jokes</Link></li>
        </ul>
      </nav>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
