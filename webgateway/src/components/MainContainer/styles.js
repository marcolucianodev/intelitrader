import styled from "styled-components";
import imgBackground from "../../assets/images/bg-intelitrader-dark.jpg" 

export const MainContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #212121;
  background-image: url(${imgBackground});
  background-size: cover;
  background-position: center;
`;