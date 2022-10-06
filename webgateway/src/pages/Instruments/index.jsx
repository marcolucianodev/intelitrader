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

  //Função com a chamada da API, buscando o parâmentro "symbol"
  const loadAPI = (symbol) => {
        
      axios.get(`http://demo.intelitrader.com.br:5200/iwg/snapshot?q=${symbol}&t=webgateway&c=0&minify=false`)
      .then((response) => {
          setInstruments(response.data.Value)
          console.log(response.data.Value)
      })
      .catch(() => {
        console.error("DEU ERRO")
      })
  }

  //Função que pega o valor do input
  const handleInstruments = (e) => {
      setText(e.target.value);
      console.log(e.target.Value)
  }

  //Função que adiciona novos itens na lista
  const addOnCard = () => {

    const dados = []
    for(let i in instruments){
      dados.push(
        instrumentData[i]
      )
    }

    newInstruments.push(dados)
    setNewInstruments([...newInstruments])
    console.log(newInstruments)
    console.log(instrumentData)
  }

  //Função que ativa evento do click no botão e busca os dados na API
  const getData = () => {
    
    if(text !== "") {
      loadAPI(text);
    } else {
      alert("Por favor insira os dados do ATIVO")

    }

    addOnCard();

    setInput(false);

    setText("")
  }

  //Função que verifica se o input está ativo ou não
  const handleInput = () => {
    setInput(true)
  }

  //Função de deletar os itens
  const deleteItem = (index) => {
    const tempArr = [...instruments];
    tempArr.splice(index, 1);
    setInstruments(tempArr);
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
        deleteButtom={deleteItem}
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

          {newInstruments}

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
