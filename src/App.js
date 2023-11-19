import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://161.97.89.22:9090/api/container", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
     <div id="particles-js"></div>
          <div className="content">
          <h1>Container Name: {data || 'Loading'}</h1>
          <p>Welcome to Demo Deploy</p>
          <button className="spacex-button">OK</button>
          </div>
    </div>
  );
}

export default App;
