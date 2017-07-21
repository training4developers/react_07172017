import React from 'react';

import { ToolHeader } from './tool-header';
import { UnorderedList } from './unordered-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colors.slice(),
    };
  }

  componentDidMount() {

    // setTimeout(() => {

    //   this.setState({
    //     colors: this.state.colors.slice(0,1).concat(this.state.colors.slice(2)),
    //   });

    // }, 4000);  

  }

  

  onChange = (e) => {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.value,
    });
  };

  onClick = newColor => {
    this.setState({
      colors: this.state.colors.concat(newColor),
    });
  }

  render() {

    const randomText = '<b>JavaScript is cool!</b>';

    return <div>
      <span dangerouslySetInnerHTML={{ __html: randomText }} />
      <ToolHeader headerText="Color Tool" />
      <UnorderedList items={this.state.colors} />
      <ColorForm onSaveColor={this.onClick} />
    </div>;
  }
}

