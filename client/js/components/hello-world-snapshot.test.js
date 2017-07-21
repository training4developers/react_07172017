import React from 'react';
import renderer from 'react-test-renderer';

import { render } from 'enzyme';

import { HelloWorld } from './hello-world';

describe('<HelloWorld /> React Test Renderer Snapshot', () => {

  it('<HelloWorld /> renders', () => {

    const tree = renderer.create(<HelloWorld />).toJSON();
    expect(tree).toMatchSnapshot();

  });

});

describe('<HelloWorld /> Enzyme Static HTML', () => {

  it('<HelloWorld /> renders', () => {

    const component = render(<HelloWorld />);
    expect(component.text()).toContain('Hello World!');

  });

});
