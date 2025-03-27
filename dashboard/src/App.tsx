import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from './routing/AppRouting';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRouting />
      </Router>
    </div>
  );
}

export default App;
