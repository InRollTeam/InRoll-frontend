import { useEffect } from "react";

import { BrowserRouter as Router } from 'react-router-dom';

const SignIn = () => (
  <div className="form-container sign-in-container" style={{ width: '50%', padding: '20px' }}>
    <div className="form-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <h2>Sign In</h2>
      <button className="btn btn-outline-primary fw-bold" onClick={() => document.querySelector('.form-container').style.transform = 'translateX(-50%)'}>Sign Up</button>
    </div>
    <form>
      <div className="mb-3">
        <label htmlFor="signin-email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="signin-email" placeholder='E-Mail'/>
      </div>
      <div className="mb-3">
        <label htmlFor="signin-password" className="form-label">Password</label>
        <input type="password" className="form-control" id="signin-password" placeholder='Password'/>
      </div>
      <div className='mb-3'>
        <a href="#">Forget Your Password?</a>
      </div>
      <button type="submit" className="btn btn-outline-primary">Sign In</button>
    </form>
  </div>
);

const SignUp = () => (
  <div className="form-container sign-up-container" style={{ width: '50%', padding: '20px' }}>
    <div className="form-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <h2>Sign Up</h2>
      <button className="btn btn-outline-primary fw-bold" onClick={() => document.querySelector('.form-container').style.transform = 'translateX(0)'}>Sign In</button>
    </div>
    <form>
      <div className="mb-3">
        <label htmlFor="signup-name" className="form-label">Name</label>
        <input type="text" className="form-control" id="signup-name" placeholder='Name'/>
      </div>
      <div className="mb-3">
        <label htmlFor="signup-email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="signup-email" placeholder='E-mail'/>
      </div>
      <div className="mb-3">
        <label htmlFor="signup-password" className="form-label">Password</label>
        <input type="password" className="form-control" id="signup-password" placeholder='Password'/>
      </div>
      <button type="submit" className="btn btn-outline-primary">Sign Up</button>
    </form>
  </div>
);

const Login = ({ showLogin, handleClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => { if(event.key === 'Escape') handleClose();};
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);
  
  return (
    <div class={`Login modal fade ${showLogin ? 'show d-block' : ''}`} tabindex="-1" role="dialog" aria-hidden="true">
      <Router>
      <div className="container-box rounded" style={{ background: 'linear-gradient(to right, #e2e2e2, #c9d6ff)', width: '700px', overflow: 'hidden', position: 'relative', margin: '100px auto'}}>
        <div className="form-container" style={{ display: 'flex', width: '200%', transition: 'transform 0.5s ease-in-out' }}>
          <SignIn />
          <SignUp />
        </div>
      </div>
      
    </Router>
    </div>
  );
};

export default Login;
