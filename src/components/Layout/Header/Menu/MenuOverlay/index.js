import React from 'react';
import HeaderItem from '../../Item';
import styled from 'styled-components';


const SideDrawer = ({ openHandler, isOpened }) => (
  <SideDrawerStyled open={isOpened}>
    <ul role="button" onClick={openHandler}>
      <HeaderItem link="/">- Início</HeaderItem>
      <HeaderItem link="/#about">- Nossos Serviços</HeaderItem>
      <HeaderItem link="/#contact">- Fale Conosco</HeaderItem>
    </ul>
  </SideDrawerStyled>
);

const SideDrawerStyled = styled.div`
  position: fixed;
  width: 100%;
  max-width: 60%;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2000;
  background-color: var(--_color_4);
  padding: 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  ul {
    position: absolute;
    bottom: 20px;
    right: 0;
    width: 100%;
    padding: 0 20px;

    li {
      margin: 0;
      margin: 10px 0;
      font-weight: bold;
      list-style: none;

      a {
        display: block;
        width: 100%;
        font-weight: 500;
        font-size: 1rem;
        text-align: left;
        border: none;
        text-decoration: none;
        color: var(--_color_3);
        padding: 5px;
        //border: 1px solid var(--_color_3);
        border-radius: 4px;
      }
    }
  }
`;

export default SideDrawer