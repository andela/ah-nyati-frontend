import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Login from '../src/views/Login';


describe('Login', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Login />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });
});
