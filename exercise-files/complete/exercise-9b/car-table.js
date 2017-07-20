import React from 'react';

import { CarRow } from './car-row';

export class CarTable extends React.Component {

  render() {
    return <table>
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
        {this.props.cars.map(car => <CarRow car={car} onDeleteCar={this.props.onDeleteCar} />)}
      </tbody>
    </table>;
  }

}