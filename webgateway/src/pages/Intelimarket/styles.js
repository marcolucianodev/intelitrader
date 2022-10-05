import styled from "styled-components";
import { GetData, SetData, Top } from "../Instruments/styles";

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); */
  gap: 3px;
`;

export const CardContainer = styled(GetData)`
  height: auto;
`; 

export const Card = styled(SetData)`
`;

export const CardBody = styled(Top)`
  height: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  flex-direction: column;
  padding: 20px 5px;
  box-sizing: border-box;
  color: #FFFFFF;
  position: relative;
`;

export const IdBox = styled.div`
  width: 40%;
  background-color: #010101;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #FFFFFF;
  border: 2px solid #A9A9A9;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  margin: auto;
  left: 0;
  right: 0;
  padding: 5px 0;
  font-weight: 900;
`;

export const CardData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
  font-size: 14px;
  font-style: italic;

  p:first-child {
    font-size: 13px;
  }
`;

export const TextData = styled.p`
  :first-child {
    font-size: 13px;
  }

  span {
  }
  `;

export const Span = styled.span`
  color: ${props => props.textColor};
`;
