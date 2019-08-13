import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import HorizontalBar from '../src/components/HorizontalBar/Index';

describe('HorizontalBar', () => {
  let app;
  beforeEach(() => {
    app = shallow(<HorizontalBar />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a h2 component', () => {
    expect(app.find('h2').length).toBe(1);
  });
});
