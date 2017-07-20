import React from 'react';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';

export class CarTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: props.cars.concat(),
      editCarId: 0,
    };
  }

  addCar = newCar => {

    newCar.id = Math.max(...this.state.cars.map(car => car.id)) + 1;

    this.setState({
      cars: this.state.cars.concat(newCar),
      editCarId: 0,
    });
  }

  deleteCar = deleteCarId => {
    this.setState({
      cars: this.state.cars.filter(car => car.id !== deleteCarId),
      editCarId: 0,
    });
  };

  cancelCar = () => {
    this.setState({
      editCarId: 0,
    });
  };

  saveCar = carToSave => {

    const editCarIndex = this.state.cars.findIndex(car => car.id === carToSave.id);

    this.setState({
      cars: [
        ...this.state.cars.slice(0, editCarIndex),
        carToSave,
        ...this.state.cars.slice(editCarIndex +1 )
      ],
      editCarId: 0,
    });
  };

  editCar = editCarId => {
    this.setState({
      editCarId,
    });
  };

  render() {

    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable {...this.state}
        onDeleteCar={this.deleteCar} onEditCar={this.editCar}
        onSaveCar={this.saveCar} onCancelCar={this.cancelCar}  />
      <CarForm onSaveCar={this.addCar} />
    </div>;
  }
}


