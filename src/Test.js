import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/placeholder/${id}`);
        
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);

        //alttaki setData() silinecek server kurulunca
        setData({
          "id"        : id,
          "name"      : `Summarify-${id}`,
          "body"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu tellus, molestie ac scelerisque vitae, porta vitae lacus. Mauris bibendum tellus turpis, et mattis ligula molestie commodo. Cras tristique risus a volutpat bibendum. Aliquam tristique elit quis tellus blandit, vitae rutrum nisi mattis. Maecenas eget tellus justo. Nunc sit amet libero ac quam maximus posuere. Vestibulum eget nisi congue, commodo nisl a, congue magna. Ut interdum urna vel eros lobortis, vel interdum quam dictum. Aliquam imperdiet, tellus eu egestas aliquam, quam justo tempor leo, sed feugiat ligula felis ut nisi. Integer ac ullamcorper augue. Nam gravida ante at dolor vulputate, quis laoreet ipsum pulvinar. Fusce posuere aliquet justo. Curabitur elementum tempus leo, in fringilla mauris tincidunt ut. Maecenas vitae rutrum ipsum." +
                        "\n\n" +
                        "Praesent scelerisque id ex non ultrices. Nulla dignissim est ante, ac sollicitudin nibh dictum et. Curabitur ut tempus elit, a lacinia tortor. Duis accumsan dapibus purus vitae mollis. Praesent libero neque, auctor et efficitur et, commodo in ex. Integer suscipit ultricies lectus in dapibus. Phasellus lacinia mauris urna, a iaculis purus feugiat vel. Quisque facilisis fermentum faucibus. In sed venenatis nisi. Cras placerat risus est, in porttitor diam ultrices a. Duis accumsan, purus ut volutpat venenatis, urna elit pulvinar enim, nec congue augue dolor eget lorem. Mauris tincidunt mauris nulla, ut vehicula libero hendrerit id." +
                        "\n\n" +
                        "Aliquam sed eleifend libero. Praesent hendrerit, ex venenatis laoreet pellentesque, tortor tellus lacinia lectus, nec convallis sapien ex sed purus. Etiam sit amet quam lectus. Sed id venenatis enim. Donec at enim nunc. Morbi fermentum urna quam, id feugiat est sodales sed. Cras nec fermentum ante, tincidunt eleifend sapien. Nam orci ex, cursus nec tincidunt at, maximus quis augue. Nulla ultricies metus ac urna sagittis, malesuada aliquam velit porta. Etiam nec porta nunc, et varius justo.",
          "time"      : 90,
          "questions" : 75,
        })
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  //alttaki satır geri eklenmeli (veya düzgün bir error sayfası ayarlanabilir)
  //if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="Test container-fluid p-5 row d-flex flex-column justify-content-center">

      <h1 className="text-center m-3">{data.name}</h1>

      <p className="text-center m-3" style={{ whiteSpace: 'pre-line' }}>{data.body}</p>

      <div className="row justify-content-center m-3">
            <p className="col-4 text-center fw-bold">Test duration: {data.time} minutes</p>
            <p className="col-4 text-center fw-bold">Number of questions: {data.questions}</p>
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

      <Link to={`/questions/${id}/0`} className="btn btn-primary text-light align-self-center col-4 col-md-3 col-lg-2 m-5">Start The Test</Link>
      
    </div>
  );
}
 
export default Test;