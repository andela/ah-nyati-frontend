import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Dashboard from '../src/views/Dashboard';

describe('Dashboard', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Dashboard />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div component', () => {
    expect(component.find('div').length).toBe(1);
  });

  it('renders an h4 tag', () => {
    expect(component.find('h4').length).toBe(1);
  });

  it('renders a ul tag', () => {
    expect(component.find('ul').length).toBe(2);
  });

  it('renders a li tag', () => {
    expect(component.find('li').length).toBe(2);
  });

  it('renders a Link tag', () => {
    expect(component.find('Link').length).toBe(2);
  });
});
