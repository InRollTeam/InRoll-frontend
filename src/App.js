import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import InfoBar from './InfoBar';
import Home from './Home';
import JobBoard from './JobBoard';


function App() {
  return (
    <div className="App container-fluid bg-light py-1">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/Jobs"> <JobBoard /> </Route>
        </Switch>
        <InfoBar />
      </Router>
    </div>
  );
}

export default App;
