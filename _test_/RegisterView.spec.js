import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Register from '../src/views/Register';

describe('Dashboard', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Register />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div component', () => {
    expect(component.find('div').length).toBe(1);
  });
});
