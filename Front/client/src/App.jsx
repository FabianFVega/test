import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrincipalList from './elements/principal';
import Navbar from './elements/nav'; 
import ItemDetail from '../src/elements/details';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
    <Navbar />
    <div className="container mt-4 justify-content-center align-items-center p-0">
      <Routes>
        <Route path="/" element={<PrincipalList />} />
        <Route path="/comic/:id" component={ItemDetail} />
        
      </Routes>
    </div>
  </Router>
  );
};

export default App;
