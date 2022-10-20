import React, { Component } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';

function App() {
  return (
    <div className="App">
     <ClickCounterTwo/>
     <HoverCounterTwo/>
    </div>
  );
}

export default App;
