import { useEffect, useState } from "react";

const ChoicesMC = ({choices, results, setResults, idx}) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const updateResults = (currentAnswer) => {
    let temp = JSON.parse(JSON.stringify(results));
    temp.answers[idx] = currentAnswer;
    setResults(temp)
  };

  useEffect(() => {
    if(results.answers[idx]) setSelectedChoice(results.answers[idx].index);
    else setSelectedChoice(null);
  }, [choices, idx]);


  useEffect(() => {
    console.log(results);
  }, [results]);


  return (
    <div className="ChoicesMC container-fluid">
      <form>
        {
          choices.map((choice, index) => (
            <div key={index} className="form-check">
              <input className="form-check-input" type="radio" name="choice" id={`choice${index}`} checked={selectedChoice === index} onClick={() => {updateResults({"index":index, "answer_id": choice.id});setSelectedChoice(index);}} />
              <label className="form-check-label" htmlFor={`choice${index}`}>{choice.body}</label>
            </div>
          ))
        }
      </form>
    </  div>
  );
}
 
export default ChoicesMC;