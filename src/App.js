
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const clientId = "14eqdEZQGMp7h7vzOBTe1faiW_BEeXMH0yD1IRpd5TE";
  const [photo, setPhoto] = useState("");
  const [results, setResults] = useState([])

  function handleChange (e) {
     setPhoto(e.target.value) 
  }

  function handleSubmit () {
    console.log(photo);
    
      axios
      .get("https://api.unsplash.com/search/photos/?client_id="+clientId+"&query="+photo)
      .then((res)=> {
        console.log(res);
        setResults(res.data.results)
      })
  }
      
  return (
    <div className="app">
      <div className="header">
      <header>Photo Generator</header>
      <input onChange={handleChange} type="text" placeholder="search photos"/>
      <button onClick={handleSubmit} type="submit">Search</button>
      </div>
      

      <div>{results.map(result => 
            <img src={result.urls.small} height={200}/>
        )}</div>
    </div>
  );
}


export default App;