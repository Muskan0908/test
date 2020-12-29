import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';

import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/test/">
            <Welcome/>
          </Route>
          <Route exact path="/test/home" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
