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

  it('renders a h1 component', () => {
    expect(app.find('h1').length).toBe(1);
  });

  it('renders a h3 component', () => {
    expect(app.find('h3').length).toBe(1);
  });

  it('renders a ul component', () => {
    expect(app.find('ul').length).toBe(1);
  });
  it('renders a li component', () => {
    expect(app.find('li').length).toBe(2);
  });
  it('renders a Link component', () => {
    expect(app.find('Link').length).toBe(2);
  });
});
