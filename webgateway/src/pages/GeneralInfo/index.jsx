import { MainContainer } from "../../components/MainContainer/styles";
import MainMenu from "../../components/MainMenu";
import { MainContent } from "../../components/MainContent/styles";
import { PageTitle } from "../Instruments/styles";

const GeneralInfo = () => {
  return (
    <MainContainer>

      <MainMenu />

      <MainContent>
        <PageTitle>Informações Gerais</PageTitle>
      </MainContent>

    </MainContainer>
  )
}

export default GeneralInfo;