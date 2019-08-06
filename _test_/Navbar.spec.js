import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import NavBar from '../src/components/NavBar/NavBar';

describe('Navbar', () => {
  let app;
  beforeEach(() => {
    app = shallow(<NavBar />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(2);
  });

  it('renders a nav component', () => {
    expect(app.find('nav').length).toBe(1);
  });

  it('renders a svg component', () => {
    expect(app.find('svg').length).toBe(1);
  });
});
