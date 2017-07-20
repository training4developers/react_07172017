import React from 'react';

export class CarTool extends React.Component {

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

  render() {

    return <div>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cars.map(car => <tr>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>{car.price}</td>
          </tr>)}
        </tbody>
      </table>
      <form>
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
      </form>
    </div>;
  }
}


