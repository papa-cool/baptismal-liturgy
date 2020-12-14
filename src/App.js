import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Board from './board.jsx';
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/admin/:id' component={() => <Board admin={ true } />} />
          <Route path='/admin' component={() => <Board admin={ true } />} />
          <Route path='/user/:id' component={() => <Board admin={ false } />} />
          <Route>
            <Redirect to={{ pathname: "/user/" + uuidv4() }}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
