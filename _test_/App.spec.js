import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/components/App';

Enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  let app;
  const props = localStorage.getItem('jwtToken');

  beforeEach(() => {
    app = shallow(<App {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(0);
  });

  it('renders a Switch component', () => {
    expect(app.find('Switch').length).toBe(1);
  });
  it('renders a Route component', () => {
    expect(app.find('Route').length).toBe(15);
  });
});
