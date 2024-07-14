import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-link"> <Link to='/JobBoard' className="NavBar-link-c NavBar-job">Job Board</Link> </div>
      <div className="NavBar-link"> <Link to='/' className="NavBar-link-c NavBar-home">InRoll</Link> </div>
      <div className="NavBar-link"> <Link to='/Login' className="NavBar-link-c NavBar-login">Log in</Link> </div>
    </div>
  );
}
 
export default NavBar;
