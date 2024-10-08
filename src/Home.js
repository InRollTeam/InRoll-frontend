import { Link } from "react-router-dom/cjs/react-router-dom.min";
import placeHolder from './images/placeHolderCorpo.png';
import './css/styles.css';

const Home = () => {
  return (
    <div className="Home container-fluid justify-content-center align-items-center row bg-light py-5">
      <div class="card col-9 col-md-5 bg-light border-light">
        <div class="card-body justify-content-start">
          <h5 class="card-title my-5 py-2 fs-1">Helping Companies Recruit Better</h5>
          <p class="card-text my-5 py-2 fs-5">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,.</p>
          <Link to="test_user/Test/demo" class="btn btn-outline-primary my-5 fs-5">Try our demo</Link>
        </div>
      </div>
      
      <img className="col-4 rounded-pill overflow-hidden m-5 d-none d-md-block" src={placeHolder} alt="Logo" />
    </div>
    
  );
}
 
export default Home;
