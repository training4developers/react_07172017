import React from 'react';
import PropTypes from 'prop-types';

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

CarRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};
