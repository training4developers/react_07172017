import React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colors.slice(0),
      newColor: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.value,
    });
  };

  onClick = () => {
    this.setState({
      // immutable programming to produce a new array
      // instead of mutating the original array
      colors: this.state.colors.concat(this.state.newColor),
      newColor: '',
    });
  }

  render() {

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.state.colors.map(color => <li>{color}</li>)}
      </ul>
      <form>
        <div className="some-class">
          {/* React.createElement('label', { htmlFor: 'new-color-input' }, 'New Color:'); */}
          <label htmlFor="new-color-input">New Color:</label>
          <input type="text" id="new-color-input" name="newColor"
            value={this.state.newColor} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;
  }
}

