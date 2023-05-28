import axios from "axios";
import { useState, useEffect } from "react";
import { Buffer } from 'buffer';
import adminLayout from "../../hoc/patientLayout";
import { useSelector } from "react-redux";
function App() {
  const [data, setData] = useState([]);
  const role = useSelector((state) => state.username);
  useEffect(() => {
    axios
      .get(`http://localhost:8003/file/${role}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  }, []); // <-- added empty dependency array to run only once on mount

  return (
    <div className="App">
      <h1>Report:</h1>
      {data.map((singleData) => {
  const base64String = Buffer.from(singleData.data, 'binary').toString('base64');
  return (
    <img
      key={singleData._id}
      src={`data:${singleData.contentType};base64,${base64String}`}
      alt={singleData.name}
      width="300"
    />
  );
})}

    </div>
  );
}

export default adminLayout(App);
