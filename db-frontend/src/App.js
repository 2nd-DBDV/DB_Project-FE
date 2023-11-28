import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch를 Routes로 수정
import Header from './components/Header';
import Home from './pages/Home';
import Stations from './pages/Stations';
import BikeInfo from './pages/BikeInfo';
import OpinionBoard from './pages/OpinionBoard';
import Membership from './pages/Membership';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/bike_info" element={<BikeInfo/>} />
          <Route path="/opinionBoard" element={<OpinionBoard/>} />

          <Route path="/membership" element={<Membership/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
