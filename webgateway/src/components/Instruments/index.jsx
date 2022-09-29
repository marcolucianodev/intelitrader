import { useState, useEffect } from "react";
import { API_URL } from "../../config/apiUrl";

import FormInstruments from "../FormInstruments";
import './styles.css'

const Instruments = () => {

  const [instruments, setInstruments] = useState([]);

  const [newInstruments, setNewInstruments] = useState([]);

  useEffect(() => {

    loadInstruments();

  }, []);

  const loadInstruments = () => {

    fetch(API_URL)
      .then(response => response.json())
      .then((data) => (
        setInstruments(data.Instruments)
      ))

  }

  const addDados = (e) => {
    e.preventDefault();

    const newDados = {
      Symbol: document.querySelector("#symbol").value.toUpperCase(),
      TradeCount: document.querySelector("#trade-count").value,
      Channel: document.querySelector("#channel").value,
      RequestCount: document.querySelector("#request-count").value,
      EventCount: 0
    };

    if(newDados.Symbol !== "" && newDados.TradeCount !== "" && newDados.Channel !== "") {
      newInstruments.unshift(newDados);
      setNewInstruments([...newInstruments])
      alert("Dados adicionados com sucesso!")
    } else {
      alert("Favor preencher corretamente os dados.")
    }
  }

  const deleteItem = (index) => {
    const tempArr = [...newInstruments];
    tempArr.splice(index, 1)

    setNewInstruments(tempArr);
  }

  const deleteApiItem = (index) => {
    const delApiList = [...instruments];
    delApiList.splice(index, 1)
    setInstruments(delApiList)
  }

  return (
    <div className="container">
      <h1>Instruments</h1>

      <FormInstruments addDados={addDados} />

      <div className="instruments">

        {newInstruments.map((item, index) => (
          <div key={index} className="instrument">
            <div className="header">
              <h2>{item.Symbol}</h2>
              <button onClick={() => deleteItem(index)}>X</button>
            </div>
            <p>TradeCount: {item.TradeCount}</p>
            <p>Channel: {item.Channel}</p>
            <p>RequestCount: {item.RequestCount}</p>
            <p>EventCount: {item.EventCount}</p>
          </div>
        ))}

        {instruments.map((item, index) => (
          <div key={item.Symbol} className="instrument">
            <div className="header">
              <h2>{item.Symbol}</h2>
              <button onClick={() => deleteApiItem(index)} style={{visibility:"hidden"}}>X</button>
            </div>
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
