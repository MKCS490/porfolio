import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer';
import './app.css'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
