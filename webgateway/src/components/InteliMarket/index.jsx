import { useEffect, useState } from "react";
import { API_URL } from "../../config/apiUrl";
import "./styles.css";

const InteliMarket = () => {

  const [intelimarket, setInteliMarket] = useState([]);

  useEffect(() => {

    loadInteliMarket();

  }, []);

  const loadInteliMarket = () => {

    fetch(API_URL)
      .then(response => response.json())
      .then((data) => (
        setInteliMarket(data.InteliMarket.feeders)
        // console.log(data.InteliMarket.feeders)
      ))

  }

  const inteliMarketData = [];

  for(let i in intelimarket) {
    inteliMarketData.push(
    <div className="market">
      <h2>{intelimarket[i].id}</h2>
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

  return (
    <div className="container">
      <h1>InteliMarket</h1>
      <div className="markets">
        {inteliMarketData}
      </div>
    </div>
  )
};

export default InteliMarket;