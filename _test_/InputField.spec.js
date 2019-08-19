import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import InputField from '../src/components/InputField';

describe('InputField component', () => {
  let component;
  const props = {
    change: jest.fn(),
    value: '',
    label: '',
    type: '',
    name: '',
    classes: '',
    error: '',
  };

  beforeEach(() => {
    component = shallow(<InputField {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div component', () => {
    expect(component.find('div').length).toBe(2);
  });
});
