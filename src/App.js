// 예시: App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 다른 경로에 대한 라우팅 설정 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
