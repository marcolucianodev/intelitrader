import { useEffect, useState } from "react";
import axios from "axios";

import { MainContainer } from "../../components/MainContainer/styles";
import MainMenu from "../../components/MainMenu";
import { MainContent } from "../../components/MainContent/styles";
import { PageTitle } from "../Instruments/styles";
import { Container, InfoCards } from "./styles";

const GeneralInfo = () => {

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios.get(`http://demo.intelitrader.com.br:5200/iwg/stats/?t=webgateway`)
    .then((response) => {
      setInfos(response.data)
      console.log(response.data)
    })
    .catch(() => {
      console.error("DEU ERRO")
    })
  }, [])

  return (
    <MainContainer>

      <MainMenu />

      <MainContent>
        <PageTitle>Informações Gerais</PageTitle>

        <Container>
          <InfoCards>
            <h2>SentBytes</h2>
            <span>{infos.SentBytes}</span>
          </InfoCards>
          <InfoCards>
            <h2>QtyMinifiedResponses</h2>
            <span>{infos.QtyMinifiedResponses}</span>
          </InfoCards>
          <InfoCards>
            <h2>QtyNonMinifiedResponses</h2>
            <span>{infos.QtyNonMinifiedResponses}</span>
          </InfoCards>
          <InfoCards>
            <h2>PollingInterval</h2>
            <span>{infos.PollingInterval}</span>
          </InfoCards>
          <InfoCards>
            <h2>StartedAt</h2>
            <span>{infos.StartedAt}</span>
          </InfoCards>
          <InfoCards>
            <h2>TotalMemory</h2>
            <span>{infos.TotalMemory}</span>
          </InfoCards>
          <InfoCards>
            <h2>HeapMemory</h2>
            <span>{infos.HeapMemory}</span>
          </InfoCards>
          <InfoCards>
            <h2>SecurityListCount</h2>
            <span>{infos.SecurityListCount}</span>
          </InfoCards>
          <InfoCards>
            <h2>QtyResponses</h2>
            <span>{infos.QtyResponses}</span>
          </InfoCards>
        </Container>

      </MainContent>

    </MainContainer>
  )
}

export default GeneralInfo;