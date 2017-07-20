import React from 'react';

export class CarEditRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.car);
  }

  onChange = e => {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.type === 'number'
        ? Number(e.currentTarget.value)
        : e.currentTarget.value, 
    });
  };  

  render() {
    return <tr>
      <td>
        <input type="text" id="edit-make-input" name="make" 
          value={this.state.make} onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-model-input" name="model" 
          value={this.state.model} onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-year-input" name="year" 
          value={this.state.year} onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-color-input" name="color" 
          value={this.state.color} onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-price-input" name="price" 
          value={this.state.price} onChange={this.onChange} />
      </td>
      <td>
        <button type="button" onClick={() => {}}>Save</button>
        <button type="button" onClick={() => {}}>Cancel</button>
      </td>
    </tr>;
  }
}
