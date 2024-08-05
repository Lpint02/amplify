import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Parenzo from './Parenzo';
import Cruciani from './Cruciani';
import Spatalino from './Spatalino';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parenzo" element={<Parenzo />} />
        <Route path="/cruciani" element={<Cruciani />} />
        <Route path="/spatalino" element={<Spatalino />} />
      </Routes>
    </Router>
  );
}

export default App;

