// import React from 'react';
// import ReactDOM from 'react-dom';

// import { ColorTool } from './components/color-tool';

// const colorList = ['red','green','yellow','blue'];

// ReactDOM.render(
//   <ColorTool colors={colorList} />,
//   document.querySelector('main')
// );

import React from 'react';
import ReactDOM from 'react-dom';

import { CarTool } from './components/car-tool';

const carData = [
  { make: 'Ford', model: 'Fusion Hybrid', year: 2017, color: 'blue', price: 23000 },
  { make: 'Ford', model: 'Focus', year: 2015, color: 'yellow', price: 12000 },
];

ReactDOM.render(
  <CarTool cars={carData} />,
  document.querySelector('main')
);