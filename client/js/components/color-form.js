import React from 'react';

import { BaseForm } from './base-form';

export class ColorForm extends BaseForm {

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
    };
  }

  onClick = () => {
    this.props.onSaveColor(this.state.newColor);

    this.setState({
      newColor: '',
    });
  }

  render() {
    return <form>
      <div className="some-class">
        <label htmlFor="new-color-input">New Color:</label>
        <input type="text" id="new-color-input" name="newColor"
          value={this.state.newColor} onChange={this.onChange} />
      </div>
      <button type="button" onClick={this.onClick}>Add Color</button>
    </form>;
  }

}