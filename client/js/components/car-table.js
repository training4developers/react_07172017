import React from 'react';

import { CarRow } from './car-row';
import { CarEditRow } from './car-edit-row';

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
        {this.props.cars.map(car =>
          car.id === this.props.editCarId
            ? <CarEditRow car={car} onSaveCar={this.props.onSaveCar} onCancelCar={this.props.onCancelCar} />
            : <CarRow car={car} onEditCar={this.props.onEditCar} onDeleteCar={this.props.onDeleteCar} />
        )}
      </tbody>
    </table>;
  }

}