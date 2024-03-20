import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);
    const [idButton, setIdButton] = useState(1);
    
    const handleClick= () => {
        setIdButton(id)
    }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButton]);
  return (
    <div>
          <input type="text" value={id} onChange={e => setId(e.target.value)} />
          <button type="button"onClick={handleClick}>Fetch Data</button>
      <div>{data.title}</div>
      {/* <ul>
        {data.map((data) => (
          <li key={data.id}>{data.body}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default FetchData;
