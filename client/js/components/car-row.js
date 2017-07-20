import React from 'react';

export const CarRow = props => <tr>
  <td>{props.car.make}</td>
  <td>{props.car.model}</td>
  <td>{props.car.year}</td>
  <td>{props.car.color}</td>
  <td>{props.car.price}</td>
  <td><button type="button" onClick={() => props.onEditCar(props.car.id)}>
    Edit</button></td>
  <td><button type="button" onClick={() => props.onDeleteCar(props.car.id)}>
    Delete</button></td>
</tr>;
