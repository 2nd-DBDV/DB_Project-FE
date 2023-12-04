import React from 'react';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Stations from './pages/Stations';
import BikeInfo from './pages/BikeInfo';
import OpinionBoard from './pages/Board/OpinionBoard';
import Membership from './pages/Membership';
import SeniorSignup from './pages/SeniorSignup';
import UserBoard from './pages/Board/UserBoard';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/bike_info" element={<BikeInfo/>} />
        <Route path="/opinionBoard" element={<OpinionBoard/>} />

        <Route path="/membership" element={<Membership/>} />
        <Route path="/senior_signup" element={<SeniorSignup/>} />

        <Route path="/userboard" element={<UserBoard/>} />
    </Routes>
  );
}

export default Router;