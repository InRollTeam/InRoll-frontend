import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Test = ({test, setTest, results, setResults}) => {

  const { test_id, user_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //alttaki çağrı düzeltilmeli
        const response = await axios.get(`/api/tests/${test_id}`);
        
        setTest(response.test);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);

        //alttaki setTest() silinecek server kurulunca
        setTest
        (
          {
            "id": "test_001",
            "name": "Sample Test",
            "body": "This is a sample test designed to demonstrate the JSON structure.",
            "time": "10",
            "questions": [
              {
                "id": "q1",
                "body": "What is the capital of France?",
                "question_type" : "MC",
                "choices": [
                  {
                    "id": "c1",
                    "body": "Paris",
                    "is_true": true
                  },
                  {
                    "id": "c2",
                    "body": "London",
                    "is_true": false
                  },
                  {
                    "id": "c3",
                    "body": "Berlin",
                    "is_true": false
                  }
                ]
              },
              {
                "id": "q2",
                "body": "Which planet is known as the Red Planet?",
                "question_type" : "MC",
                "choices": [
                  {
                    "id": "c1",
                    "body": "Earth",
                    "is_true": false
                  },
                  {
                    "id": "c2",
                    "body": "Mars",
                    "is_true": true
                  },
                  {
                    "id": "c3",
                    "body": "Jupiter",
                    "is_true": false
                  }
                ]
              },
              {
                "id": "q3",
                "body": "What is the largest ocean on Earth?",
                "question_type" : "MC",
                "choices": [
                  {
                    "id": "c1",
                    "body": "Atlantic Ocean",
                    "is_true": false
                  },
                  {
                    "id": "c2",
                    "body": "Indian Ocean",
                    "is_true": false
                  },
                  {
                    "id": "c3",
                    "body": "Pacific Ocean",
                    "is_true": true
                  }
                ]
              }
            ]
          }
        )
      }
    };

    fetchData();
  }, [test_id]);

  useEffect(() => {
    setResults({"test_id": test_id,
                "user_id": user_id,
                "answers": new Array(test ? test.questions.length : 0)})
  }, [test_id, user_id, test])

  if (loading) return <p>Loading...</p>;

  //alttaki satır geri eklenmeli (veya düzgün bir error sayfası ayarlanabilir)
  //if (error) return <p>Error: {error.message}</p>;
  if(test == null) return(<></>)
  return (
    <div className="Test container-fluid p-5 row d-flex flex-column justify-content-center">

      <h1 className="text-center m-3">{test.name}</h1>

      <p className="text-center m-3" style={{ whiteSpace: 'pre-line' }}>{test.body}</p>

      <div className="row justify-content-center m-3">
            <p className="col-4 text-center fw-bold">Test duration: {test.time} minutes</p>
            <p className="col-4 text-center fw-bold">Number of questions: {test.questions.length}</p>
      </div>

      <div className="d-flex flex-column align-self-center col-5">
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="test-kvkk-check"/>
          <label className="form-check-label" for="test-kvkk-check"><Link to="/KVKK">KVKK</Link>'yı okudum ve kabul ediyorum.</label>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="test-gizlilik-check"/>
          <label className="form-check-label" for="test-gizlilik-check"><Link to="/GPVK">Gizlilik Politikası ve Veri Kullanımı</Link>nı okudum ve kabul ediyorum.</label>
        </div>
      </div>

      <Link to={`questions/0`} className="btn btn-primary text-light align-self-center col-4 col-md-3 col-lg-2 m-5">Start The Test</Link>
      
    </div>
  );
}
 
export default Test;