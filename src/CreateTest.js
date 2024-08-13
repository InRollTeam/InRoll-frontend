import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AddQuestions from "./AddQuestions";
import axios from "axios";

const CreateTest = () => {
  const { recruiter_id } = useParams(null);
  const [duration, setDuration] = useState('');
  const [untilDate, setUntilDate] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [questions, setQuestions] = useState([])
  const [testId, setTestId] = useState(null)

  const [test, setTest] = useState({
    recruiter: recruiter_id,
    duration: duration,
    until_date: untilDate,
    title: title,
    body: body,
    questions: questions,
  });

  useEffect(() => {
    setTest({
      recruiter: recruiter_id,
      duration: duration,
      until_date: untilDate,
      title: title,
      body: body,
      questions: questions,
    });
  }, [recruiter_id, duration, untilDate, title, body, questions]);

  const saveTest = () => {
    console.log(test);
    if(testId == null) {
      axios.post('http://localhost:8000/api/tests/', test)
        .then(response => {
          //console.log('Success:', response.data);
          setTestId(response.data.id);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    else {
      console.log(test)
      axios.put(`http://localhost:8000/api/tests/${testId}/`, test)
        .then(response => {
          console.log('Success:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="CreateTest container-md p-5 my-5 d-flex flex-column bg-secondary rounded">
        <div className="container-md py-3">
          <label htmlFor="test-name" className="form-label"> Title </label>
          <input type="text" className="form-control" id="test-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="container-md py-3">
          <label htmlFor="test-body" className="form-label"> Test Info </label>
          <textarea className="form-control" id="test-body" rows="6" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>

        <div className="container-md py-3 d-flex flex-row row justify-content-center">
          <div className="container-md py-3 m-3 col-4">
            <label htmlFor="test-duration" className="form-label"> Duration </label>
            <textarea className="form-control" id="test-duration" rows="1" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </div>
          <div className="container-md py-3 m-3 col-4">
            <label htmlFor="test-date" className="form-label"> Last Date </label>
            <textarea className="form-control" id="test-date" rows="1" value={untilDate} onChange={(e) => setUntilDate(e.target.value)} />
          </div>
        </div>

        <div className="container-md py-3 d-flex flex-column">
          <AddQuestions questions={questions} setQuestions={setQuestions} />
        </div>

        <button type="button" className="btn fs-3 align-self-center btn-outline-light" onClick={saveTest}>SAVE <i class="bi bi-floppy-fill"></i></button>
    </div>
  );
}

 
export default CreateTest;