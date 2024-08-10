import { useEffect, useState } from "react";

const ChoicesMC = ({choices, results, setResults, idx}) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const updateResults = (currentAnswer) => {
    let temp = JSON.parse(JSON.stringify(results));
    temp.answers[idx] = currentAnswer;
    setResults(temp)
  };

  useEffect(() => {
    if(results.answers[idx]) setSelectedChoice(results.answers[idx].answer_id);
    else setSelectedChoice(null);
  }, [choices, idx]);


  useEffect(() => {
    //TODO: send results to the server
    console.log(results);
  }, [results]);


  return (
    <div className="ChoicesMC container-fluid">
      <form>
        {
          choices.map((choice, index) => (
            <div key={index} className="form-check">
              <input className="form-check-input" type="radio" name="choice" id={`${choice.id}`} checked={selectedChoice === choice.id} onClick={() => { updateResults({"answer_id": choice.id}); setSelectedChoice(choice.id); }} />
              <label className="form-check-label" htmlFor={`${choice.id}`}>{choice.body}</label>
            </div>
          ))
        }
      </form>
    </  div>
  );
}
 
export default ChoicesMC;