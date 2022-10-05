import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 5rem;
  height: 100vh;
  color: #fff;
  position: fixed;

  @media (max-width: 480px) {
    background-color: gray;
    width: 100%;
    height: auto;
    bottom: 0;
    z-index: 1;
    box-shadow: 20px 20px 50px rgb(0 0 0 / 50%);
    background: rgba(255,255,255,0.3);
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 30px;
  padding: 50% 0;

  @media (max-width: 480px) {
    justify-content: space-around;
    padding: 10px;
    flex-direction: row;
    gap: 0;
  }
`;

export const List = styled.li`

  a {
    color: #EBF2F1;
    transition: all ease 0.4s;

    :hover {
      color: #757575;
    }
  }

  svg {
    font-size: 30px;
  }
`;