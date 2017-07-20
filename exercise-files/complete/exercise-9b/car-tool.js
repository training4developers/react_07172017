import React from 'react';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';

export class CarTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: props.cars.concat(),
    };
  }

  addCar = newCar => {

    newCar.id = Math.max(...this.state.cars.map(car => car.id)) + 1;

    this.setState({
      cars: this.state.cars.concat(newCar),
    });
  }

  deleteCar = deleteCarId => {
    this.setState({
      cars: this.state.cars.filter(car => car.id !== deleteCarId),
    });
  }

  render() {

    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar} />
      <CarForm onSaveCar={this.addCar} />
    </div>;
  }
}


