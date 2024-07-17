import { useState } from 'react';
import './JobBoard.css'
import { Link } from 'react-router-dom';

import { BsChevronDown, BsSearch } from "react-icons/bs";


const JobBoard = () => {

  let jobGenerator = (img, title, firm, location, id) => {
      return {
        img: img,
        title : title,
        firm : firm,
        location : location,
        id : id
      }
    };

  const [jobs, setJobs] = useState([
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 0),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 1),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 2),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 3),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 4),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 5),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 6),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 7),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 8),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 9),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 10),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 11),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 12),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 13),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 14),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 15),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 16),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 17),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 18),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 19),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 20),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 21),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 22),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 23),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 24),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 25),
    jobGenerator("", "Summer Intern", "summarify", "Istanbul", 26),
  ]);


  const [tags, setTags] = useState(["HTML", "CSS", "JavaScript", "C++", "C", "Python", "UI/UX", "Backend", "Frontend"]);
  const [visibleTags, setVisibleTags] = useState(tags.slice(0, 3));


  let handleClick = (e) => {
    const element = document.querySelector(".tags");
    element.classList.toggle("tags-expanded");
    if(element.classList.contains("tags-expanded")) setVisibleTags(tags);
    else setVisibleTags(tags.slice(0, 3));
  }; 

  return (
    <div className="JobBoard">
      <h1>Job Board</h1>
      <div className="JobBoard-selection">
        <div className='tags'>
          <button className='tag-button' onClick={handleClick}>others <BsChevronDown className="tag-down-arrow" /></button>
          {visibleTags.map((tag) => (
            <input type="button" value={tag} className="tag-button"/>
          ))}
        </div>
        <div className="job-search-group">
          <input type="text" className='job-search'/>
          <BsSearch className="job-search-icon"/>
        </div>
      </div>
      <div className="JobBoard-job-collection">
        {
          jobs.map((job) => (
            <Link to={`/job/${job.id}`} className="JobBoard-job" key={job.id}>
              <div className="JobBoard-img-container"></div>
              <div className="JobBoard-job-info">
                <h2> {job.title} </h2>
                <p className='JobBoard-firm'> {job.firm} </p>
                <p className="JobBoard-location"> {job.location} </p>            
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
 
export default JobBoard;