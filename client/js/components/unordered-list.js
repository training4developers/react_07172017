import React from 'react';

let counter = 0;

export class ListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
    };

    this.counter = counter++;

    console.log('constructor: ', this.counter);
  }

  componentWillReceiveProps(nextProps) {

    console.log('current props', this.props, 'next props', nextProps);

    this.setState({
      item: nextProps.item,
    });

  }

  componentWillUnmount() {
    console.log('component being removed', this.counter)
  }

  render() {
    console.log('render: ', this.counter);
    return <li>props: {this.props.item}, state: {this.state.item}</li>;
  }

}

export class UnorderedList extends React.Component {

  render() {
    return <ul>
      {this.props.items.map( (item, i) => <ListItem key={i} item={item} />)}
    </ul>;
  }

}