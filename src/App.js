import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Customers from './customers';
import Dashboard from './Dashboard';
import TransactionChart from './chart';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="customer/:id" element={<TransactionChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
