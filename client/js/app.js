import React from 'react';
import ReactDOM from 'react-dom';

class Third extends React.Component {
  
  constructor(props) {
    super(props);
    console.log('constructor third');
  }

  componentWillMount() {
    console.log('component will mount third');
  }

  componentDidMount() {
    console.log('component did mount third');
  }

  shouldComponentUpdate() {
    console.log('should component update three');
    return true;
  }

  render() {
    console.log('render third');
    return <div>Third</div>;
  }
}

class Second extends React.PureComponent {

  constructor(props) {
    super(props);
    console.log('constructor second');
  }

  componentWillMount() {
    console.log('component will mount second');
  }

  componentDidMount() {
    console.log('component did mount second');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('should component update second');
  //   return true;

  //   // this.props and nextProps to determine if the nums array has changed
  //   // return this.props.nums !== nextProps.nums;
  // }

  render() {
    console.log('render second');
    return <div>
      Second
      <ul>
        {this.props.nums.map(num => <li key={num}>{num}</li>)}
      </ul>
      <Third />
    </div>;
  }
}

class First extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor first');

    this.state = {
      clickCount: 0,
      nums: [1,2,3,4],
    };
  }

  onClick = () => {
    //this.state.nums.push(this.state.nums.length + 1);
    this.setState({
      clickCount: this.state.clickCount + 1,
      nums: this.state.nums.concat(this.state.nums.length + 1),
    });
  }

  onClick2 = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
    });
  }

  componentWillMount() {
    console.log('component will mount first');
  }

  componentDidMount() {
    console.log('component did mount first');
  }

  render() {
    console.log('render first');
    return <div>
      First: {this.state.clickCount}
      <Second nums={this.state.nums} />
      <button onClick={this.onClick}>Click Me</button>
      <button onClick={this.onClick2}>Click Me 2</button>
    </div>;
  }


}

ReactDOM.render(<First />, document.querySelector('main'));