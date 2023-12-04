import React from 'react';
import Router from './Router';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
