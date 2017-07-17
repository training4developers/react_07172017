import React from 'react';

export class ColorTool extends React.Component {

  render() {

    //this.props.colors.push('purple');

    //this.props.newProp = 'new value';

    // Object.preventExtensions(obj);
    // Object.seal(obj);
    // Object.freeze(obj);

    //console.log(Object.isFrozen(this.props));

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.props.colors.map(color => <li>{color}</li>)}
      </ul>
    </div>;
  }
}

