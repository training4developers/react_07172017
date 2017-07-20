import React from 'react';

export class CarTool extends React.Component {

  render() {
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
          <tr>
            <td>Ford</td>
            <td>Fusion Hybrid</td>
            <td>2017</td>
            <td>blue</td>
            <td>23000</td>
          </tr>
          <tr>
            <td>Ford</td>
            <td>Focus</td>
            <td>2015</td>
            <td>yellow</td>
            <td>12000</td>
          </tr>
        </tbody>
      </table>
    </div>;
  }
}

