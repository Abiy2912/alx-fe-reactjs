// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';



const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Counter />
      
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
      
    </div>
  );
};

export default App;
