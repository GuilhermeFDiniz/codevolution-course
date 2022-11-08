
import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

  return (
    <div className="App">
      <Status status={'loading'} />
    </div>
  );
}

export default App;
