import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg justify-content-center bg-light container-fluid">
      <div class="container-xl row justify-content-between">
          <Link to="/jobs" class="nav-link col-3 col-md-2 p-1 fs-5 fw-bolder text-center">Job Board</Link>
          <Link to="/" class="nav-link col-3 col-md-2 p-1 fs-4 fw-bold text-center">InRoll</Link>
          <Link to="/Login" class="btn btn-outline-primary col-3 col-md-2 p-1 fs-5 fw-bolder rounded text-center">Login</Link>
      </div>
    </nav>
  );
}
 
export default NavBar;
