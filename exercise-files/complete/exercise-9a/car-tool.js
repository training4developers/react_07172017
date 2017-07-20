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
    this.setState({
      cars: this.state.cars.concat(newCar),
    });
  }

  render() {

    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars} />
      <CarForm onSaveCar={this.addCar} />
    </div>;
  }
}


