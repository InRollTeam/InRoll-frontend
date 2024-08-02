import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Question = ({ questions }) => {
  const { num } = useParams();
  const questionIndex = parseInt(num);

  return (
    <div className="Question container-m m-5 p-5 ">
      <div className="card">
        <div className="card-header">
          Question {questionIndex + 1}
        </div>
        <div className="card-body">
          <p className="card-text">{questions[questionIndex].body}</p>
          <form>
            {questions[questionIndex].choices.map((choice, index) => (
              <div key={index} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="choice"
                  id={`choice${index}`}
                />
                <label className="form-check-label" htmlFor={`choice${index}`}>
                  {choice.body}
                </label>
              </div>
            ))}
          </form>
          <div className="d-flex justify-content-between mt-4">
            {
              questionIndex > 0 ?
              <Link to={`/Test/questions/${questionIndex-1}`} className="btn btn-primary"> Previous </Link> :
              null
            }
            {
              questionIndex < questions.length-1 ?
              <Link to={`/Test/questions/${questionIndex+1}`} className="btn btn-primary"> Next </Link> :
              <Link to={`/Test/finish`} className="btn btn-primary"> Finish </Link>             
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
