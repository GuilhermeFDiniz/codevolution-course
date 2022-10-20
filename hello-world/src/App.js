import React, { Component } from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import CounterThree from './components/CounterThree';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <CounterThree render={(count, incrementCount)=> <ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
      <CounterThree render={(count, incrementCount)=> <HoverCounterTwo count={count} incrementCount={incrementCount}/>}/>
     {/* <ClickCounterTwo/>
     <HoverCounterTwo/>
     <User render={ (isLoggedIn) =>  isLoggedIn ? 'Guilherme' : 'Guest'}/> */}
    </div>
  );
}

export default App;
