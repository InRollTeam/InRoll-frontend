import { Link } from "react-router-dom/cjs/react-router-dom.min";

const JobBoard = () => {
  return (
    <div className="JobBoard container-fluid py-5 justify-content-center row" style={{ background: "linear-gradient(to right, #e2e2e2, #c9d6ff)"}}>
      <div class="card col-10 col-md-6 py-5">
        <div class="card-body d-flex flex-column text-center py-3 py-md-5">
          <h5 class="card-title fs-1 my-5">Coming Soon!</h5>
          <p class="card-text fs-5 my-2">This page is currently under construction!</p>
          <p class="card-text fs-5 my-2">Follow our social media accounts to stay tuned for new features!</p>
          <Link to="/" class="btn btn-outline-dark container-sm my-5 py-3">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
 
export default JobBoard;
