import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './board.jsx';
import { v4 as uuidv4 } from 'uuid';

var userId = uuidv4();

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/admin' component={() => <Board admin={ true } />} />
          <Route component={() => <Board userId={ userId } />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
