import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from "./components/Welcome"
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet heroName="Batman" name="Bruce" ><p>This is Batman Children</p></Greet>
      <Welcome name="Bruce" heroName="Batman"/>
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
