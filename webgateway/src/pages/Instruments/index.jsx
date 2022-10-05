import { useState } from "react";
import axios from "axios";

import { MainContainer } from "../../components/MainContainer/styles.js";
import MainMenu from "../../components/MainMenu";
import { MainContent } from "../../components/MainContent/styles.js";
import { 
  Bottom,
  CardsArea,
  GetData,
  PageTitle, 
  SetData,
  SetDataButton,
  Top
} from "./styles.js";
import FormInstruments from "../../components/FormInstruments/index.jsx";
import InstrumentsCard from "../../components/InstrumentsCard/index.jsx";

const Instruments = () => {

  const [instruments, setInstruments] = useState([]);

  const [newInstruments, setNewInstruments] = useState([]);

  const [text, setText] = useState("");

  const [input, setInput] = useState(false);
  
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
      x: s,
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

    setInput(false);

    setText("")
  }

  const handleInput = () => {
    setInput(true)
  }


  //TRABALHAR DAQUI PRA CIMA
  
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
      <InstrumentsCard 
        symbol={instruments[i].Symbol}
        askPrice={instruments[i].Properties.AskPrice}
        bidPrice={instruments[i].Properties.BidPrice}
        minPrice={instruments[i].Properties.MinPrice} 
        maxPrice={instruments[i].Properties.MaxPrice}
        securityDesc={instruments[i].Properties.SecurityDesc}
        deleteButtom={deleteApiItem}
        key={instruments[i]}
      />
    )
  }

  return (
      <MainContainer>

        <MainMenu />

        <MainContent>
          <PageTitle>
            Instrumentos
          </PageTitle>

          {/* //CardsArea */}
          <CardsArea>
            <GetData>
              <SetData>
                <Top>
                  <SetDataButton onClick={handleInput}>
                    <p>
                      <span>Clique aqui</span><br/> e insira o código do ativo
                    </p>
                  </SetDataButton>
                </Top>
                <Bottom>
                  {input &&
                    <FormInstruments 
                    getData={getData} 
                    handleInstruments={handleInstruments} 
                    text={text}/>
                  }
                </Bottom>
              </SetData>
            </GetData>

            {instrumentData}

          </CardsArea>

          {/* Novas modificações AQUI */}
          {/* {newInstruments.map((item, index) => (
            <div key={index}>
              <h2>{item.x}</h2>
              <h2>{item.y}</h2>
              <button onClick={deleteItem}>close</button>
            </div>
          ))} */}
        </MainContent>
      </MainContainer>
  )
};

export default Instruments;
