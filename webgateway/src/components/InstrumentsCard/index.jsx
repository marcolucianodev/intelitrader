import { 
  CardContainer,
  Card,
  CardHeader,
  CardHeaderLeft,
  CardHeaderRight,
  CardHeaderCenter,
  CardBody,
  BidInfo,
  Sell,
  BidInfoIcon,
  Buy,
  Prices,
  MinPrice,
  MaxPrice,
  PriceValue,
  CloseButton
} from "./styles";

import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CloseIcon from '@mui/icons-material/Close';


const InstrumentsCard = ({symbol, askPrice, bidPrice, minPrice, maxPrice, securityDesc, deleteButtom}) => {
  return (
    <CardContainer>
      <Card>
        <CardHeader>
          <CardHeaderLeft>
            <span>{askPrice}</span>
          </CardHeaderLeft>
          <CardHeaderCenter>
            <p>
              <span>{symbol}</span><br/> 
              {securityDesc}<br />
            </p>
          </CardHeaderCenter>
          <CardHeaderRight>     
            <span>{bidPrice}</span>
          </CardHeaderRight>
        </CardHeader> 
        <CardBody>
        <BidInfo>
          <Sell>vender</Sell>
          <BidInfoIcon>
            <SwapHorizIcon />
          </BidInfoIcon>
          <Buy>comprar</Buy>
        </BidInfo>
        <Prices>
          <MinPrice>
            <span>Min. Price</span>
            <PriceValue>{minPrice}</PriceValue>
          </MinPrice>
          <MaxPrice>
            <span>Max. Price</span>
            <PriceValue>{maxPrice}</PriceValue>
          </MaxPrice>
        </Prices>
        <CloseButton onClick={deleteButtom}>Fechar <CloseIcon /></CloseButton>
        </CardBody>
      </Card>
    </CardContainer>
  )
}

export default InstrumentsCard;