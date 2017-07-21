import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import { ColorForm } from './color-form';

jest.unmock('./color-form');

describe('<ColorForm /> Shallow with Enzyme', () => {

  const newColorValue = 'purple';
  const eventHandlers = { saveColor: () => {} };

  let component;
  let saveColorSpy;
  let renderSpy;
  let onClickSpy;

  beforeEach(() => {
    saveColorSpy = jest.spyOn(eventHandlers, 'saveColor');
    // use this approach for true class functions
    renderSpy = jest.spyOn(ColorForm.prototype, 'render');
    component = shallow(<ColorForm onSaveColor={eventHandlers.saveColor} />);
    // use this approach for class arrow functions
    onClickSpy = jest.spyOn(component.instance(), 'onClick');
  });

  test('<ColorForm /> renders', () => {

    // instance is needed here because onSaveColor is not passed to the form node
    expect(component.instance().props.onSaveColor, saveColorSpy);
    expect(component.state().newColor).toBe('');

    const newColorInput = component.find('input');
    expect(newColorInput.prop('value')).toBe('');

    newColorInput.simulate('change', {
      target: { value: newColorValue, name: 'newColor' },
      currentTarget: { value: newColorValue }, name: 'newColor',
    });

    expect(component.state().newColor).toBe(newColorValue);

    component.find('button').simulate('click');

    expect(renderSpy).toHaveBeenCalled();
    expect(onClickSpy).toHaveBeenCalled();
    expect(saveColorSpy).toHaveBeenCalledWith(newColorValue);
  });

});