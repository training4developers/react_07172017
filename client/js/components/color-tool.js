import React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.currentTarget.value);
    this.setState({
      newColor: e.currentTarget.value,
    });
  }

  render() {

    console.log('render');

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.props.colors.map(color => <li>{color}</li>)}
      </ul>
      <form>
        <div className="some-class">
          {/* React.createElement('label', { htmlFor: 'new-color-input' }, 'New Color:'); */}
          <label htmlFor="new-color-input">New Color:</label>
          <input type="text" id="new-color-input" name="newColor"
            value={this.state.newColor} onChange={this.onChange} />
        </div>
      </form>
    </div>;
  }
}

