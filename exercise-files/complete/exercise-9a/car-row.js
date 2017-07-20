import React from 'react';

export const CarRow = props => <tr>
  <td>{props.car.make}</td>
  <td>{props.car.model}</td>
  <td>{props.car.year}</td>
  <td>{props.car.color}</td>
  <td>{props.car.price}</td>
</tr>;
