import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Components/Canvas';
import DropDown from './Components/DropDown';
import randomColor from 'randomcolor';
import { hue, lightness, sizeOptions } from './DropDownDataBase';
import styled from 'styled-components';
import './globalStyles.css';
import coolbackground from '../src/coolbackground.png'; //is unused but necessary

const Tittle = styled.h1`
  margin-top: 20px;
  font-size: 60px;
`;

const Generate = styled.button`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: red;
  color: white;
`;

const Rainbow = styled.span`
  background-image: linear-gradient(
    to left,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 1.5px 1.5px rgba(0, 0, 0, 0.4);
`;

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

const Row = styled.div`
  margin: 10px;
  grid-column: span 2;
  ${(props) =>
    props.twoColumn &&
    `
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  width: 50vw;
  `};
`;

function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  const [canvasSize, setCanvasSize] = useState('');
  const [colorHue, setColorHue] = useState('');
  const [colorLightness, setColorLightness] = useState('');
  const optionsColor = {
    hue: colorHue,
    luminosity: colorLightness,
  };

  return (
    <Grid>
      <Row>
        <Tittle>
          <Rainbow>Color</Rainbow> Generator
        </Tittle>
      </Row>
      <Row>
        <Canvas color={color} size={canvasSize} />
      </Row>
      <Row twoColumn>
        <DropDown options={hue} name="hue" onChange={setColorHue} />
        <DropDown
          options={lightness}
          name="lightness"
          onChange={setColorLightness}
        />
      </Row>
      <Row twoColumn>
        <Generate onClick={() => setColor(randomColor(optionsColor))}>
          Generate
        </Generate>
        <DropDown
          initial="normal size"
          options={sizeOptions}
          name="size"
          onChange={setCanvasSize}
        />
      </Row>
    </Grid>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
