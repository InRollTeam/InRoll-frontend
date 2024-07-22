import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import JobBoard from './JobBoard';
import Login from './Login';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <div className="App container-fluid bg-light py-1">
      <Router>
        <NavBar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/Jobs"> <JobBoard /> </Route>
        </Switch>
        <Login showLogin={showLogin} handleClose={handleCloseLogin} />
        {showLogin ? <div class={`modal-backdrop fade ${showLogin ? 'show' : ''}`}></div> : null}
      </Router>
    </div>
  );
}

export default App;
