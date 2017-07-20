import React from 'react';

export class CarRow extends React.Component {

  render() {
    return <tr>
      <td>{this.props.car.make}</td>
      <td>{this.props.car.model}</td>
      <td>{this.props.car.year}</td>
      <td>{this.props.car.color}</td>
      <td>{this.props.car.price}</td>
    </tr>;    
  }

}