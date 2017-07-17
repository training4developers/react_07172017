import React from 'react';

export class ColorTool extends React.Component {

  render() {

    const colors = ['red','green','yellow','blue'];

    // return React.createElement('h1', null, 'Color Tool');
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li>{color}</li>)}
      </ul>
    </div>;
  }
}

