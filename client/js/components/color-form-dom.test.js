import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { ColorForm } from './color-form';

jest.unmock('./color-form');

describe('<ColorForm /> Test Utils Mock DOM', () => {

  const newColorValue = 'purple';
  const eventHandlers = { saveColor: () => {} };

  let component;
  let componentDOMNode;
  let saveColorSpy;

  beforeEach(() => {
    saveColorSpy = jest.spyOn(eventHandlers, 'saveColor');
    component = TestUtils.renderIntoDocument(<ColorForm onSaveColor={eventHandlers.saveColor} />);
    componentDOMNode = TestUtils.findRenderedDOMComponentWithTag(component, 'form');
  });

  test('<ColorForm /> renders', () => {

    expect(component.props.onSaveColor).toBe(saveColorSpy);
    expect(component.state.newColor).toBe('');

    const inputDOMNode = componentDOMNode.querySelector('input');
    expect(inputDOMNode.value).toBe('');

    inputDOMNode.value = newColorValue;
    TestUtils.Simulate.change(inputDOMNode);

    expect(component.state.newColor).toBe(newColorValue);

    TestUtils.Simulate.click(componentDOMNode.querySelector('button'));

    expect(saveColorSpy).toHaveBeenCalledWith(newColorValue);
  });

});

describe('<ColorForm /> Enzyme Mock DOM', () => {

  const newColorValue = 'purple';
  const eventHandlers = { saveColor: () => {} };

  let component;
  let saveColorSpy;

  beforeEach(() => {
    saveColorSpy = jest.spyOn(eventHandlers, 'saveColor');
    component = mount(<ColorForm onSaveColor={eventHandlers.saveColor} />);
  });

  test('<ColorForm /> renders', () => {

    expect(component.props().onSaveColor).toBe(saveColorSpy);
    expect(component.state().newColor).toBe('');

    const newColorInput = component.find('input');
    expect(newColorInput.prop('value')).toBe('');

    newColorInput.simulate('change', {
      target: { value: newColorValue, name: 'newColor' },
      currentTarget: { value: newColorValue }, name: 'newColor',
    });

    expect(component.state().newColor).toBe(newColorValue);

    component.find('button').simulate('click');

    expect(saveColorSpy).toHaveBeenCalledWith(newColorValue);
  });

});