import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

  let handleClick = (e) => {
    const element = e.target;
    if(element.classList.contains("unclicked"))
    {
      const elements = document.querySelectorAll(".login-type");
      for(let elem of elements)
      {
        elem.classList.toggle("unclicked");

      }
    }
  } 

  return (
    <div className="Login">
    < div className="login-container">
      <div className="login-block">
        <button className="login-type" onClick={handleClick}>Candidates</button>  
        <button className="login-type unclicked" onClick={handleClick}>Companies</button>  
      </div>
      <div className="login-block login-block-bottom">
        <form>
          <div className="login-input-group">
            <input type="email" className="login-text"/>
            <label>mail</label>
          </div>
          <div className="login-input-group">
            <input type="password" className="login-text"/>
            <label>password</label>
          </div>
          <div className="login-buttons">
            <button className="login-button login-button-left">Create Account</button>
            <button className="login-button login-button-right">Continue</button>
          </div>
          <Link to="/forgot" className="forgot">Forgot your credentials?</Link>
        </form>
      </div>
    </div>
    </div>
  );
}
 
export default Login;