import React from 'react';

export class UnorderedList extends React.Component {

  render() {
    return <ul>
      {this.props.items.map(item => <li>{item}</li>)}
    </ul>;
  }

}