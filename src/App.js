import "./App.css";
import axios from "axios";
import divider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState([]);

  const fetchData = () => {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      const data = res.data.slip;
      setAdvice(data);
    });
  };
  useEffect(() => fetchData(), []);

  return (
    <div className="container">
      <div className="inner-container">
        <div className="advice-container">
          <div className="advice-number">Advice #{advice.id}</div>
          <div className="advice-text">{advice.advice}</div>
          <img className="divider-desktop" src={divider} alt="divider" />
        </div>
        <div className="button-container">
          <button onClick={fetchData} className="button-dice">
            <img className="dice-image" src={dice} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
