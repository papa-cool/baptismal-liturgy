import './App.css';
import Board from './board.jsx';
import { v4 as uuidv4 } from 'uuid';

var userId = uuidv4();

function App() {
  return (
    <div className="App">
      <Board userId={ userId } />
    </div>
  );
}

export default App;
