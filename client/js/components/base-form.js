import React from 'react';

export class BaseForm extends React.Component {

  // onChange = e => {
  //   this.setState({
  //     [ e.currentTarget.name ]: e.currentTarget.type === 'number'
  //       ? Number(e.currentTarget.value)
  //       : e.currentTarget.value, 
  //   });
  // };  

  onChange = (e) => {

    const newState = {};

    switch (e.target.type) {
      case 'number':
        newState[e.target.name] = Number(e.target.value);
        break;
      case 'checkbox':
        newState[e.target.name] = e.target.checked;
        break;
      case 'date':
        // write code to convert a string to a Date object
        break;
      default:
        if (e.target.multiple) {
          newState[e.target.name] = Array.from(e.target.options)
            .filter(option => option.selected)
            .map(option => option.value);
        } else {
          newState[e.target.name] = e.target.value;
        }
        break;
    }

    this.setState(newState);
  }

}