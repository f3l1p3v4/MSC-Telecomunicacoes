import React from 'react';
import styled from 'styled-components';

const DrawerToggle = ({ openHandler, isOpened }) => (
  <Toogle
    role="button"
    onClick={openHandler}
    className={isOpened ? 'opened' : null}
  >
    <span />
  </Toogle>
);

const Toogle = styled.div`
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
  z-index: 2100;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 10px;

  & span {
    position: relative;
    display: block;
    background: var(--_color_0);
    width: 26px;
    height: 2px;
    transition: 0.5s ease-in-out;
    &:before,
    &:after {
      background: var(--_color_0);
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
  &.opened span {
  transform: rotate(45deg);
  
  &:before {
    top: 0;
    transform: rotate(90deg);
  }
  
  &:after {
    transform: rotate(90deg);
    bottom: 0;
  }
}
`

export default DrawerToggle