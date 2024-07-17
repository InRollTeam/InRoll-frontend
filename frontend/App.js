import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';

import Home from './Home';
import Login from './Login';
import JobBoard from './JobBoard';
//import Info from './Info';


function App() {
  //<NavBar />

    //<Route exact path="/"> <Home /> </Route>
    //<Route exact path="/Login"> <Login /> </Route>


  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/Login"> <Login /> </Route>
            <Route path="/JobBoard"> <JobBoard /> </Route>
          </Switch>
        </div>
      </div>    
    </Router>
  );
  //<Info />
}

export default App;
