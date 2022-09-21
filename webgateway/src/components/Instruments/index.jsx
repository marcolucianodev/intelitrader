import { useState, useEffect } from "react";
import { API_URL } from "../../config/apiUrl";
import './styles.css'

const Instruments = () => {

  const [instruments, setInstruments] = useState([]);

  useEffect(() => {

    loadInstruments();

  }, []);

  const loadInstruments = () => {

    fetch(API_URL)
      .then(response => response.json())
      .then((data) => (
        setInstruments(data.Instruments)
        // console.log(data.Instruments)
      ))

  }

  return (
    <div className="container">
      <h1>Instruments</h1>
      <div className="instruments">
        {instruments.map((item) => (
          <div key={item.Symbol} className="instrument">
            <h2>{item.Symbol}</h2>
            <p>TradeCount: {item.TradeCount}</p>
            <p>Channel: {item.Channel}</p>
            <p>RequestCount: {item.RequestCount}</p>
            <p>EventCount: {item.EventCount}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Instruments;
