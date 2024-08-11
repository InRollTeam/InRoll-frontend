import { useState } from "react";
import AddChoices from "./AddChoices";

const AddQuestions = ( {questions, setQuestions} ) => {
  
  const updateQuestion = (body, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], body: body };
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.push({ body: "" });
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  }


  return (
    <div className="AddQuestion container-md d-flex flex-column">
      <div className="accordion">
        {
          questions.map((question, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button 
                  className="accordion-button bg-light-subtle" 
                  type="button" 
                  onClick={() => {
                    const elem = document.getElementById(`collapse-${index}`);
                    elem.classList.toggle("show");
                  }}>
                  question - {index}
                </button>
              </h2>

              <div id={`collapse-${index}`} className="accordion-collapse collapse show">
                <div className="accordion-body d-flex flex-column bg-light">

                  <button className="btn btn-danger align-self-end m-0" type="button" onClick={() => deleteQuestion(index)}> <i class="bi bi-trash"></i> </button>

                  <div className="container-md bg-light">
                    <label htmlFor={`question-body-${index}`} className="form-label m-0"> Question </label>
                    <textarea className="form-control m-0" id={`question-body-${index}`} rows="3" onChange={(e) => {updateQuestion(e.target.value, index)}}/>
                  </div>
                  {
                    questions ? 
                    <AddChoices questions={questions} setQuestions={setQuestions} index={index} /> :
                    null
                  }

                </div>
              </div>
            </div>
          ))
        }
      </div>

      <button type="button" className="btn text-light fs-2 align-self-center" onClick={addQuestion}><i class="bi bi-plus-square-fill"></i></button>

    </div>
  );

}
 
export default AddQuestions;