import React from 'react';

export class CarTool extends React.Component {


  render() {

    const cars = [
      { make: 'Ford', model: 'Fusion Hybrid', year: 2017, color: 'blue', price: 23000 },
      { make: 'Ford', model: 'Focus', year: 2015, color: 'yellow', price: 12000 },
    ];

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
          {cars.map(car => <tr>
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

