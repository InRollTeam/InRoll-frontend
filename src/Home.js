import './Home.css';
import { Link } from 'react-router-dom';
import pic from './images/placeHolderCorpo.png';

const Home = () => {
  return (
    <div className="Home">
      <div className="home-container">
        <div className="home-container-c home-container-left">
          <h1 className='home-left'>Helping Companies Recruit Better</h1>
          <p className='home-left'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
          <Link to='/demo' className='home-left'>Try our demo</Link>
        </div>
        <div className="home-container-c home-container-right">
          <img src={pic}/>
        </div>
      </div>
    </div>
  );
}
 
export default Home;