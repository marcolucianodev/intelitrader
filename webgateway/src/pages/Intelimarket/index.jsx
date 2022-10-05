import { useState, useEffect } from "react";
import axios from "axios";

import { MainContainer } from "../../components/MainContainer/styles";
import MainMenu from "../../components/MainMenu";
import { MainContent } from "../../components/MainContent/styles";
import { PageTitle } from "../Instruments/styles";
import { 
  Card, 
  CardContainer, 
  CardBody, 
  Container, 
  IdBox,
  CardData,
  TextData,
  Span
} from "./styles";

const Intelimarket = () => {

  const [market, setMarket] = useState([]);

  useEffect(() => {
    getMarkets();
  }, [])

  const getMarkets = () => {
        
    axios.get(`http://demo.intelitrader.com.br:5200/iwg/stats/?t=webgateway`)
    .then((response) => {
      setMarket(response.data.InteliMarket.feeders)
      console.log(response.data.InteliMarket.feeders)
    })
    .catch(() => {
      console.error("DEU ERRO")
    })
  }

  const marketData = [];

  for(let i in market) {
    marketData.push(
    <CardContainer>
      <Card>
        <CardBody>
          <IdBox>{market[i].id}</IdBox>
          <CardData>
            <TextData>LastSendingTime: <Span textColor="#2FB5ED">{market[i].LastSendingTime}</Span></TextData>
            <TextData>LastSeqNum: <Span>{market[i].LastSeqNum}</Span></TextData>
            <TextData>MessagesPerSecond: <Span textColor="#F5BC29">{market[i].MessagesPerSecond}</Span></TextData>
            <TextData>PID: <Span>{market[i].PID}</Span></TextData>
            <TextData>Phase: <Span textColor="#2FB5ED">{market[i].Phase}</Span></TextData>
            <TextData>QueuedMessages: <Span>{market[i].QueuedMessages}</Span></TextData>
            <TextData>StartTime: <Span textColor="#F5BC29">{market[i].StartTime}</Span></TextData>
          </CardData>
        </CardBody>
      </Card>
    </CardContainer>
    )
  }


  return (
    <MainContainer>

      <MainMenu />

      <MainContent>
        <PageTitle>Intelimarket</PageTitle>

        {/* <CardContainer>
          <Card>
            <CardBody>
              <IdBox>001</IdBox>
              <CardData>
                <TextData>LastSendingTime: <Span textColor="#2FB5ED">20221004184144565tt</Span></TextData>
                <TextData>LastSeqNum: <Span>123</Span></TextData>
                <TextData>MessagesPerSecond: <Span textColor="#F5BC29">123</Span></TextData>
                <TextData>PID: <Span>123</Span></TextData>
                <TextData>Phase: <Span textColor="#2FB5ED">123</Span></TextData>
                <TextData>QueuedMessages: <Span>123</Span></TextData>
                <TextData>StartTime: <Span textColor="#F5BC29">123</Span></TextData>
              </CardData>
            </CardBody>
          </Card>
        </CardContainer> */}

        <Container>
          {marketData}
        </Container>

      </MainContent>
    </MainContainer>
  )
}

export default Intelimarket;