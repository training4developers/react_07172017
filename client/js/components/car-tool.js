import React from 'react';

export class CarTool extends React.Component {


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
    </div>;
  }
}

// <table>
//   <tr>
//     {Object.keys(this.props.cars[0]).map(key => <th>{key.toUpperCase()}</th>)}
//   </tr>
//   {this.props.cars.map(car => <tr>
//     {Object.keys(car).map(key => <td>{car[key]}</td>)}
//   </tr>)}
// </table>


