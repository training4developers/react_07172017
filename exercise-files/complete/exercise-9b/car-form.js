import React from 'react';

export class CarForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };    
  }

  onChange = e => {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.type === 'number'
        ? Number(e.currentTarget.value)
        : e.currentTarget.value, 
    });
  };  
  
  onClick = () => {
    
    this.props.onSaveCar({
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      color: this.state.color,
      price: this.state.price,
    });

    this.setState({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  render() {

    return <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make"
          value={this.state.make} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model"
          value={this.state.model} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year"
          value={this.state.year} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={this.state.color} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price"
          value={this.state.price} onChange={this.onChange} />
      </div>
      <button type="button" onClick={this.onClick}>Save Car</button>
    </form>;

  }

}