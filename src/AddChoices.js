import { useEffect } from "react";

const AddChoices = ( {questions, setQuestions, index} ) => {

  useEffect(()=>{
    const updatedQuestions = [...questions];
    if(!updatedQuestions[index].choices) updatedQuestions[index].choices = [];
    setQuestions(updatedQuestions);
  }, [])

  const updateChoice = (body, choiceIndex) => {
    const updatedQuestions = [...questions];
    if(!updatedQuestions[index].choices) updatedQuestions[index].choices = [];
    updatedQuestions[index].choices[choiceIndex] = { ...updatedQuestions[index].choices[choiceIndex], body: body };
    setQuestions(updatedQuestions);
  };


  const addChoice = () => {
    const updatedQuestions = [...questions];
    if(!updatedQuestions[index].choices) updatedQuestions[index].choices = [];
    updatedQuestions[index].choices.push({ "body": "" });
    setQuestions(updatedQuestions);
  };

  const deleteChoice = (choiceIndex) => {
    const updatedQuestions = [...questions];
    if(!updatedQuestions[index].choices) updatedQuestions[index].choices = [];
    updatedQuestions[index].choices.splice(choiceIndex, 1);
    setQuestions(updatedQuestions);
  }

  return (
    <div className="AddChoices container-sm mt-3">

      {
        questions[index].choices ?
        questions[index].choices.map((choice, choiceIndex) => (
            <div key={choiceIndex} className="container-fluid">
              <div className="container-md bg-light d-flex flew-row m-1">
                <button className="btn btn-danger align-self-end m-1" type="button" onClick={() => deleteChoice(choiceIndex)}> <i class="bi bi-trash"></i> </button>
                <textarea className="form-control m-0" id={`choice-body-${choiceIndex}`} rows={1} onChange={(e) => {updateChoice(e.target.value, choiceIndex)}}/>
              </div>
            </div>
          )) :
          null
      }    
  
      <button type="button" className="btn text-secondary mt-3 fs-2 align-self-center" onClick={addChoice}><i class="bi bi-plus-square-fill"></i></button>
    </div>
  );
}
 
export default AddChoices;