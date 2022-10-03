import { useEffect, useState } from "react";
import { API_URL } from "../../config/apiUrl";
import FormIntelimarket from "../FormIntelimarket";
//import "./styles.css";

const InteliMarket = () => {

  const [intelimarket, setIntelimarket] = useState([]);

  const [newIntelimarket, setNewIntelimarket] = useState([]);

  useEffect(() => {

    loadInteliMarket();

  }, []);

  const loadInteliMarket = () => {

    fetch(API_URL)
      .then(response => response.json())
      .then((data) => (
        setIntelimarket(data.InteliMarket.feeders)
      ))

  }

  const inteliMarketData = [];

  for(let i in intelimarket) {
    inteliMarketData.push(
    <div key={i} className="market">
      <div className="header">
        <h2>{intelimarket[i].id}</h2>
        <button onClick={() => deleteApiItem(i)} style={{visibility:"hidden"}}>X</button>
      </div>
      <p>LastSendingTime: {intelimarket[i].LastSendingTime}</p>
      <p>LastSeqNum: {intelimarket[i].LastSeqNum}</p>
      <p>MessagesPerSecond: {intelimarket[i].MessagesPerSecond}</p>
      <p>PID: {intelimarket[i].PID}</p>
      <p>Phase: {intelimarket[i].Phase}</p>
      <p>QueuedMessages: {intelimarket[i].QueuedMessages}</p>
      <p>StartTime: {intelimarket[i].StartTime}</p>
    </div>
    )
  }

  const addDados = (e) => {
    e.preventDefault();

    const newDados = {
      LastSendingTime: 20220922222929622,
      LastSeqNum: document.querySelector("#last-seq-num").value,
      MessagesPerSecond: document.querySelector("#messages-per-second").value,
      PID: document.querySelector("#pid").value,
      Phase: document.querySelector("#phase").value,
      QueuedMessages: document.querySelector("#queued-messages").value,
      StartTime: new Date().toISOString()
    };

      if(newDados.LastSeqNum !== "" & newDados.MessagesPerSecond !== "" & newDados.PID !== "" & newDados.Phase !== "" & newDados.QueuedMessages !== "") {
        newIntelimarket.unshift(newDados);
        setNewIntelimarket([...newIntelimarket])
        alert("Dados adicionados com sucesso!")
      } else {
        alert('Favor preencher corretamente os dados.')
      }

  }

  const deleteItem = (index) => {
    const tempArr = [...newIntelimarket];
    tempArr.splice(index, 1)

    setNewIntelimarket(tempArr);
  }

  const deleteApiItem = (index) => {
    const delApiList = [...intelimarket];
    delApiList.splice(index, 1)
    setIntelimarket(delApiList)
  }

  return (
    <div className="container">
      <h1>InteliMarket</h1>

      <FormIntelimarket addDados={addDados} />

      <div className="markets">

        {inteliMarketData}

        {newIntelimarket.map((item, index) => (
          <div key={index} className="market">
            <div className="header">
              <h2>0{69 + index}</h2>
              <button onClick={() => deleteItem(index)}>X</button>
            </div>
            <p>LastSendingTime: {item.LastSendingTime}</p>
            <p>LastSeqNum: {item.LastSeqNum}</p>
            <p>MessagesPerSecond: {item.MessagesPerSecond}</p>
            <p>PID: {item.PID}</p>
            <p>Phase: {item.Phase}</p>
            <p>QueuedMessages: {item.QueuedMessages}</p>
            <p>StartTime: {item.StartTime}</p>
          </div>
        ))}
        
      </div>
    </div>
  )
};

export default InteliMarket;