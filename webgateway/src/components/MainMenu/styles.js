import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 5rem;
  height: 100vh;
  color: #fff;
  position: fixed;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 30px;
  padding: 50% 0;
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