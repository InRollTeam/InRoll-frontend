import { useEffect } from "react";

const Login = ({ showLogin, handleClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => { if(event.key === 'Escape') handleClose();};
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);
  
  return (
    <div class={`Login modal fade ${showLogin ? 'show d-block' : ''}`} tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-light-subtle">
          <div class="modal-header justify-content-between">
            <h5 class="modal-title">Login!</h5>
            <button type="button" class="btn btn-outline-danger close" onClick={handleClose} aria-label="Close">X</button>
          </div>
          <div class="modal-body bg-light">
            <form className="d-flex-column justify-content-between">
              <div class="form-group">
                <label for="login-email">Email address</label>
                <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="login-password">Password</label>
                <input type="password" class="form-control" id="login-password" placeholder="Password"/>
              </div>
                <div class="container-fluid row justify-content-between p-3 mt-3">
                  <div class="form-group form-check col-4">
                    <input type="checkbox" class="form-check-input" id="login-remember-check"/>
                    <label class="form-check-label" for="login-remember-check">Remember me</label>
                  </div>
                  <button type="submit" class="btn btn-primary col-4 text-light">Submit</button>
                </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-light" onClick={handleClose}>You don't have an account?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
