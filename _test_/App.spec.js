import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/App';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a Switch component', () => {
    expect(app.find('Switch').length).toBe(1);
  });
  it('renders a Route component', () => {
    expect(app.find('Route').length).toBe(5);
  });
});
