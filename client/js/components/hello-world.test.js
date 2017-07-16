import React from 'react';
import renderer from 'react-test-renderer';

import { HelloWorld } from './hello-world';

it('renders correctly', () => {

  const tree = renderer.create(<HelloWorld />).toJSON();
  expect(tree).toMatchSnapshot();

});
