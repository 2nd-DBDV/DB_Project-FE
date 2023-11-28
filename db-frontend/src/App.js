import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch를 Routes로 수정
import Home from './pages/Home';
import Stations from './pages/Stations';
import BikeInfo from './pages/BikeInfo';
import OpinionBoard from './pages/OpinionBoard';
import Membership from './pages/Membership';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/bike_info" element={<BikeInfo/>} />
          <Route path="/opinionBoard" element={<OpinionBoard/>} />

          <Route path="/membership" element={<Membership/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
