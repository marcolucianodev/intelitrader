import styled from "styled-components";
import { CardsArea } from "../Instruments/styles";

export const Container = styled(CardsArea)`
  gap: 10px;

  @media (max-width: 480px) {
    justify-content: center;
    padding-bottom: 80px;
  }
`;

export const InfoCards = styled.div`
  color: #EBF2F1;
  width: 280px;
  box-shadow: 20px 20px 50px rgb(0 0 0 / 50%);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 10px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  min-height: 8rem; 
  padding: 0 20px;
  gap: 10px;

  h2 {
    font-size: 18px;
    color: teal;
    font-style: italic;
  }

  span {
    font-size: 13px;
    font-style: italic;
  }
`;