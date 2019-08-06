import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Error from '../src/components/Error/Error';

describe('Error', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Error statusCode={404} message="Page not found" />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(3);
  });

  it('renders a h2 component', () => {
    expect(app.find('h2').length).toBe(1);
  });

  it('renders a p component', () => {
    expect(app.find('p').length).toBe(2);
  });

  it('renders a svg component', () => {
    expect(app.find('svg').length).toBe(1);
  });
});
