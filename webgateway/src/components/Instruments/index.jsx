import { useState, useEffect } from "react";
import { API_URL } from "../../config/apiUrl";
import axios from "axios";

import FormInstruments from "../FormInstruments";
//import './styles.css'

const Instruments = () => {

  const [instruments, setInstruments] = useState([]);

  const [newInstruments, setNewInstruments] = useState([]);

  const [text, setText] = useState("");

  const [txt, setTxt] = useState("")

  const [campo, setCampo] = useState('');

  const addInstruments = (symbol) => {

    axios.get(`http://demo.intelitrader.com.br:5200/iwg/snapshot?q=${symbol}&t=webgateway&c=0&minify=false`)
    .then((response) => {
      setInstruments(response.data.Value)
      console.log(response.data.Value)
    })
    .catch(() => {
      console.error("ERRO")
    })

    // const addOnCard = () => {

      for(let i in instruments){
        console.log(instruments[i].Symbol)
        var s = instruments[i].Symbol
      }
  
      const data = {
        x: s,
        // x: campo,
        // x: document.querySelector("#post").value.toUpperCase(),
        y: "POST 2"
      }
  
      newInstruments.push(data)
      setNewInstruments([...newInstruments])
      console.log(newInstruments)
  
    // }

  }

  const handle = (e) => {
    setText(e.target.value);
    console.log(e.target.Value)
  }

  
  //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


  const loadAPI = (postId) => {
        
      // postId = text
      console.log(postId)

      axios.get(`http://demo.intelitrader.com.br:5200/iwg/snapshot?q=${postId}&t=webgateway&c=0&minify=false`)
      .then((response) => {
        setInstruments(response.data.Value)
        console.log(response.data.Value)
      })
      .catch(() => {
        console.error("DEU ERRO")
      })


  }

  const handleInstruments = (e) => {
    setText(e.target.value);
    console.log(e.target.Value)
  }

  const addOnCard = () => {

    for(let i in instruments){
      console.log(instruments[i].Symbol)
      var s = instruments[i].Symbol
    }

    const data = {
      x: 222222,
      // x: campo,
      // x: document.querySelector("#post").value.toUpperCase(),
      y: "POST 2"
    }

    newInstruments.push(data)
    setNewInstruments([...newInstruments])
    console.log(newInstruments)

  }

  const getData = () => {
    
    loadAPI(text);

    addOnCard();
  }


  //TRABALHAR DAQUI PRA CIMA




  // useEffect(() => {
    
  //   axios.get(`http://demo.intelitrader.com.br:5200/iwg/snapshot?q=${params.Symbol}&t=webgateway&c=0&minify=false`)
  //   .then((response) => {
  //     console.log(response.data.Value)
  //     setInstruments(response.data.Value)
  //   })
  //   .catch(() => {
  //     console.log("DEU ERRO!")
  //   })

  // }, []);

  // const instrumentServices = {
    
  //     getOne(postId){
  //       const endpoint = `http://demo.intelitrader.com.br:5200/iwg/snapshot?q=${postId}&t=webgateway&c=0&minify=false`
  //       axios.get(endpoint)
  //       return axios.get(endpoint)
  //     }
  // } 

  // const loadItem = async (postId) => {

  //   postId = document.querySelector("#symbol").value.toUpperCase()

  //   try {
  //       let response = await instrumentServices.getOne(postId)
  //       setInstruments(response.data.Value)
  //       console.log(response.data.Value)
  //   } catch (error) {
  //       console.log(error);
  //       alert("Não foi possível carregar.")
  //   }

  //   //função add cards na lista
  //   const kim = []
  //   for(let i in instruments) {
  //     kim.push(
  //       instruments[i].Symbol,
  //       instruments[i].Properties.Asset
  //     )
  //   }

  //   const data = {
  //     x: "TESTE",
  //     y: kim[1]
  //   }

  //   newInstruments.push(data)
  //   setNewInstruments([...newInstruments])
  //   console.log(newInstruments)
   
  // }
  
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


  const instrumentData = [];

  for(let i in instruments) {
    instrumentData.push(
      <div key={instruments[i].Symbol}>
        <h2>{instruments[i].Symbol}</h2>
        <h3>{instruments[i].UpdateTime}</h3>
        <p>{instruments[i].Properties.Asset}</p>
        <p>Min Price: {instruments[i].Properties.MinPrice}</p>
        <p>Max Price: {instruments[i].Properties.MaxPrice}</p>
        <p>AskPrice(Venda): {instruments[i].Properties.AskPrice}</p>
        <p>BidPrice(Compra): {instruments[i].Properties.BidPrice}</p>
        <button onClick={deleteApiItem}>X</button>
      </div>
    )
  }

  const campos = (e) => {
    setCampo(e.target.value);
    console.log(e.target.value);
  }

  const CampoBox = () => {
    return(
      <input
      type="text"
      onChange={campos}
      placeholder="Novo campo teste"
      value={campo}
      />
    )
  }

  return (
    <div className="container">
      <h1>Instrumentos</h1>

      <input 
      type="text" 
      placeholder="digite symbol" 
      // id="symbol"
      onChange={handleInstruments}
      value={text} 
      />
      {/* <input type="text" onChange={handleInput2} value={txt} /> */}
      <button onClick={getData}>Ver dados</button>

      {/* Novas modificações AQUI */}
      
      {instrumentData}

      {newInstruments.map((item, index) => (
        <div key={index}>
          <h2>{item.x}</h2>
          <h2>{item.y}</h2>
          <button onClick={deleteItem}>close</button>
        </div>
      ))}
      <hr />
      <CampoBox />

    </div>
  )
};

export default Instruments;
