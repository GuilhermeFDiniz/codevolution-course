import React, { Component } from 'react';
import './App.css';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import RefsDemo from './components/RefsDemo';




function App() {
  return (
    <div className="App">
      <FRParentInput/>
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
    </div>
  );
}

export default App;
