import "./styles.css";
import { useState, useEffect } from "react";
import { API_URL } from "../../config/apiUrl";

const GeneralInfo = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    loadGeneralInfo();
  }, [])

  const loadGeneralInfo = () => {
    
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => (
        setInfo(data)
        // console.log(data)
      ))

  };

  return (
    <div className="container">
      <h1>Informações Gerais</h1>
      <div className="general-infos">
        <div className="info">
          <h3><span>SentBytes: </span>{info.SentBytes}</h3>
        </div>
        <div className="info">
          <h3><span>QtyResponses: </span>{info.QtyResponses}</h3>
        </div>
        <div className="info">
          <h3><span>QtyMinifiedResponses: </span>{info.QtyMinifiedResponses}</h3>
        </div>
        <div className="info">
          <h3><span>QtyNonMinifiedResponses: </span>{info.QtyNonMinifiedResponses}</h3>
        </div>
        <div className="info">
          <h3><span>PollingInterval: </span>{info.PollingInterval}</h3>
        </div>
        <div className="info">
          <h3><span>StartedAt: </span>{info.StartedAt}</h3>
        </div>
        <div className="info">
          <h3><span>TotalMemory: </span>{info.TotalMemory}</h3>
        </div>
        <div className="info">
          <h3><span>HeapMemory: </span>{info.HeapMemory}</h3>
        </div>
        <div className="info">
          <h3><span>SecurityListCount: </span>{info.SecurityListCount}</h3>
        </div>
      </div>
    </div>
  )
};

export default GeneralInfo;