import { Link } from "react-router-dom";

const NavBar = ({ showLogin, setShowLogin }) => {

  return (
    <nav className="navbar navbar-expand-lg justify-content-center bg-light container-fluid">
      <div className="container-xl row justify-content-between">
        <Link to="/jobs" className="nav-link col-3 col-md-2 p-1 fs-5 fw-bolder text-center">Job Board</Link>
        <Link to="/" className="nav-link col-3 col-md-2 p-1 fs-4 fw-bold text-center">InRoll</Link>
        <button 
          className="btn btn-outline-primary col-3 col-md-2 p-1 fs-5 fw-bolder rounded text-center" 
          onClick={() => setShowLogin((prevShowLogin) => !prevShowLogin)}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
