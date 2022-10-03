import styled from "styled-components";

export const Container = styled.section`

`;

export const PageTitle = styled.h1`
  color: #EBF2F1;
  padding: 20px 0 40px;
  font-style: italic;
`;

export const CardsArea = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const GetData = styled.div`
  display: flex;
  width: 250px;
  height: 200px;
  background-color: #010101;
  border: 3px solid #E6E8E6;
  border-radius: 25px;
  box-sizing: content-box;
  padding: 3px;

  /* .set-data {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 0px 9px 2px #010101;

    .border-top{
      background-color: red;
      width: 100%;
      height: 10px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .top {
      //background-color: lime;
      background: linear-gradient(180deg, rgba(1,1,1,1) 0%, rgba(119,119,119,1) 100%, rgba(0,212,255,1) 100%);
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-top: 10px solid #EBF2F1;
      box-sizing: content-box;

      .set-data-button {
        width: 40%;
        background-color: #010101;
        padding: 5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        color: #FFFFFF;
        border: 2px solid #A9A9A9;
        box-sizing: content-box;
        cursor: pointer;
  
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
      }
    }

    .bottom {
      background-color: green;
      background: linear-gradient(180deg, rgba(119,119,119,1) 0%, rgba(46,43,42,1) 100%, rgba(0,212,255,1) 100%);
      width: 100%;
      height: 100%;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }

  } */
`

export const SetData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 0px 9px 2px #010101;
`;

export const Top = styled.div`
  background: linear-gradient(180deg, rgba(1,1,1,1) 0%, rgba(119,119,119,1) 100%, rgba(0,212,255,1) 100%);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 10px solid #EBF2F1;
  box-sizing: content-box;
`;

export const Bottom = styled.div`
  background: linear-gradient(180deg, rgba(119,119,119,1) 0%, rgba(46,43,42,1) 100%, rgba(0,212,255,1) 100%);
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const SetDataButton = styled.div`
  width: 40%;
  background-color: #010101;
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #FFFFFF;
  border: 2px solid #A9A9A9;
  box-sizing: content-box;
  cursor: pointer;

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
`;

export const CardHeader = styled.header`

`;

export const BidInfo = styled.section`

`;

export const CardBody = styled.article`

`;

export const CloseButton = styled.button`

`;