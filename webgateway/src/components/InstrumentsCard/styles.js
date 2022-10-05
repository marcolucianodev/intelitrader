import styled from "styled-components";
import { 
  GetData, 
  SetData, 
  Top 
} from "../../pages/Instruments/styles";

export const CardContainer = styled(GetData)``; 

export const Card = styled(SetData)``;

export const CardHeader = styled(Top)`
  position: relative;
  height: 69px;
`;

export const CardHeaderLeft = styled.div`
  width: 50%;
  border-top-left-radius: 10px;
  background-color: gray;
  display: flex;
  justify-content: flex-start;
  padding-left: 7px;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
  color: #FFFFFF;
  font-style: italic;
`;

export const CardHeaderCenter = styled.div`
  width: 40%;
  background-color: #010101;
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #FFFFFF;
  border: 2px solid #A9A9A9;
  box-sizing: content-box;
  position: absolute;
  right: 30%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    text-transform: uppercase;
    font-size: 11px;  
    line-height: 1.4;
    color: #A9A9A9;
  }

  p span {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 15px;
    color: #FFFFFF;
  }

  span.date-time {
    color: #A9A9A9;
    font-size: 9px;
    display: inline-block;
  }
`;

export const CardHeaderRight = styled.div`
  background-color: #48AF49;
  width: 50%;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: flex-end;
  padding-right: 12px;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
  color: #FFFFFF;
  font-style: italic;
`;

export const BidInfo = styled.section`
  display: flex;
  color: #FFFFFF;
  justify-content: space-between;
  font-style: italic;
`;

export const Sell = styled.div`
  background: linear-gradient(180deg, rgba(1,1,1,1) 0%, rgba(119,119,119,1) 100%, rgba(0,212,255,1) 100%);
  width: 40%;
  display: flex;
  justify-content: center;
  border-bottom-right-radius: 50px;
  border: 2px solid #777;
`;

export const BidInfoIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 20px;
  }
`;

export const Buy = styled.div`
  background: linear-gradient(180deg, rgba(1,1,1,1) 0%, rgba(119,119,119,1) 100%, rgba(0,212,255,1) 100%);
  width: 40%;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 50px;
  border: 2px solid #777;
`;


export const CardBody = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(119,119,119,1) 0%, rgba(46,43,42,1) 100%, rgba(0,212,255,1) 100%);
  height: 136px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
`;

export const Prices = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;

export const MinPrice = styled.div`
  width: 45%;

  span {
    background-color: #010101;
    text-align: center;
    padding: 3px;
    color: #FFFFFF;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 100%;
    display: inline-block;
    font-size: 13px;
  }
`;

export const MaxPrice = styled.div`
  width: 45%;

  span {
    background-color: #010101;
    text-align: center;
    padding: 3px;
    color: #FFFFFF;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    width: 100%;
    display: inline-block;
    font-size: 13px;
  }
`;

export const PriceValue = styled.div`
  padding: 15px 0;
  text-align: center;
  font-weight: bold;
  color: #FFFFFF;
  font-size: 18px;
  font-style: italic;
`;

export const CloseButton = styled.button`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  font-size: 12px;
  cursor: pointer;

  svg {
    color: red;
    font-size: 12px;
  }
`;