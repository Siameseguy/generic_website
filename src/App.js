import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/pages/homepage/HomePage'
import LoginPage from './components/pages/LoginPage'
import AboutPage from './components/pages/about/AboutPage'
import FaqPage from './components/pages/faq/FaqPage'
import CharityPage from './components/pages/charity/CharityPage'
import PacnodePage from './components/pages/pacnode/PacnodePage'
//import logo from './logo.svg';
//import './App.css';

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/faq" component={FaqPage} />
    <Route path="/charity" component={CharityPage} />
    <Route path="/pacnode-explorer" component={PacnodePage} />
    <Route path="/login" component={LoginPage} />
  </div>
)

export default App
