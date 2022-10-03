import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from "./components/Welcome"
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman"><p>This is Batman Children</p></Greet>
      <Welcome name="Bruce" heroName="Batman"/>
      <Hello/>
      <Message/>
    </div>
  );
}

export default App;
