import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [advice, setAdvice] = useState([])

  const getAdvice = () => {
    return axios.get('https://api.adviceslip.com/advice')
      .then(response => response)
      .catch(error => console.log(error))
  }
  useEffect(() => { 
    randomAdvice() // eslint-disable-next-line
  }, [])

  const randomAdvice = () => {
    getAdvice().then((response) => {
      const { advice } = response.data.slip
      setAdvice(advice)
    })
  }

  return (
    <div className="container">
      <div className="box">
        <span className="advice"> {advice} </span>
      </div>
      <div className="btn-div">
        <button onClick={() => randomAdvice()} className="advice-btn">Get Advice</button>
      </div>
    </div>
  );
}

export default App;
