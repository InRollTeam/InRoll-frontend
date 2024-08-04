import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ChoicesMC from './ChoicesMC';

const Question = ({ questions, results, setResults }) => {
  const { num } = useParams();
  const questionIndex = parseInt(num);
  const [currentAnswer, setCurrentAnswer] = useState(null)

  return (
    <div className="Question container-sm m-5 p-5 align-self-center">
      <div className="card">
        <div className="card-header">Question {questionIndex + 1}</div>
        <div className="card-body">
          <p className="card-text">{questions[questionIndex].body}</p>
          {
            questions[questionIndex].question_type === "MC"
            ? <ChoicesMC choices={questions[questionIndex].choices} results={results} setResults={setResults} idx={questionIndex} />
            : null
          }
          <div className="container-lg d-flex justify-content-between my-4 px-5 row">
            <Link to={`${questionIndex-1}`} 
                  className={`btn btn-primary text-light col-4 col-lg-2 ${questionIndex === 0 && "disabled"}`}>
                    Previous
            </Link>
            {
              questionIndex < questions.length-1 ?
              <Link to={`${questionIndex+1}`} className="btn btn-primary text-light col-4 col-lg-2"> Next </Link> :
              <Link to={`#`} className="btn btn-primary text-light col-sm-4 col-lg-2"> Finish </Link>             
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
