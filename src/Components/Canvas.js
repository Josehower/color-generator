import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const leftLimit = window.innerWidth - 202;
const topLimit = window.innerHeight - 202;

const screenSaverAnimation = keyframes`
 0% { border-radius: 50%; top: 0; left: 0 }
 30% { border-radius: 20px; top: ${topLimit}px; left: ${leftLimit / 3}px }
 60% { border-radius: 30px; top: ${topLimit / 5}px; left: ${
  (leftLimit / 3) * 2
}px}
 100% { border-radius: 50%; top: ${topLimit}px; left: ${leftLimit}px }
`;

const myAnimation = (props) =>
  css`
    animation: ${screenSaverAnimation} 9s infinite alternate;
  `;

const Wrapper = styled.div`
  width: 40vw;
  height: 30vh;
  background: ${(props) => props.color};
  border-radius: 4px;
  border: black solid 2px;
  ${(props) =>
    props.size === 'mediumSize' &&
    `width: 50vw;
    height: 40vh;`};
  ${(props) =>
    props.size === 'bigSize' &&
    `width: 90vw;
    height: 50vh;`};
  ${(props) =>
    props.size === 'fullScreen' &&
    `height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;`};
  ${(props) => props.size === 'screenSaver' && myAnimation};
  ${(props) =>
    props.size === 'screenSaver' &&
    `width: 200px;
    height: 200px;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    `};

  transition: all 1s, width 0.3s, height 0.3s;
  display: grid;
  justify-items: center;
  align-items: center;
`;

function Canvas(props) {
  return (
    <Wrapper size={props.size} color={props.color}>
      <h3>{props.color}</h3>
    </Wrapper>
  );
}

export default Canvas;
