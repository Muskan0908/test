import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';

import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
