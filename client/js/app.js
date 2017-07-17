import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colorList = ['red','green','yellow','blue'];

ReactDOM.render(
  <ColorTool colors={colorList} />,
  document.querySelector('main')
);
