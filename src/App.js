import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import JobBoard from './JobBoard';
import Login from './Login';
import InfoBar from './InfoBar';
import Test from './Test';
import Question from './Question';



function App() {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const [test, setTest] = useState(null);

  return (
    <div className="App container-fluid bg-light py-1 pb-0">
      <Router>
        <NavBar showLogin={showLogin} setShowLoygin={setShowLogin} />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/Jobs"> <JobBoard /> </Route>
          <Route exact path="/Test/finish"> <Finish results={results}/> </Route>
          <Route exact path="/Test/:id"> <Test test={test} setTest={setTest} /> </Route>
          <Route exact path="/Test/questions/:num"> {test ? <Question questions={test.questions} /> : null} </Route>
        </Switch>
        <Login showLogin={showLogin} handleClose={handleCloseLogin} />
        {showLogin ? <div class={`modal-backdrop fade ${showLogin ? 'show' : ''}`}></div> : null}
        <InfoBar />
      </Router>
    </div>
  );
}

export default App;
