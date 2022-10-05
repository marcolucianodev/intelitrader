import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 2%;
  margin-left: 5rem;

  @media (max-width: 480px) {
    margin-left: 0;
  }

`;