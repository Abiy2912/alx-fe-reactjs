// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Abiy" age="32" bio="Loves coding" />
      <Footer />
    </div>
  );
};

export default App;
