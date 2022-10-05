import { Container, List, MenuList } from "./styles";
import HomeIcon from '@mui/icons-material/Home';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import InfoIcon from '@mui/icons-material/Info';

import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <Container>
      <MenuList>
        <List>
          <Link to="/" title="Home"><HomeIcon /></Link>
        </List>
        <List>
          <Link to="/intelimarket" title="Intelimarket"><CandlestickChartIcon /></Link>
        </List>
        <List>
          <Link to="/informacoes-gerais" title="Informações Gerais"><InfoIcon /></Link>
        </List>
      </MenuList>
    </Container>
  )
};

export default MainMenu;