import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Loader from '../src/components/Loader/Index';

describe('Loader', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Loader loading />);
  });

  it('renders successfully', () => {
    app = shallow(<Loader loading />);
    expect(app).toBeDefined();
  });

  it('renders successfully  if loading is false', () => {
    app = shallow(<Loader loading={false} />);
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    app = shallow(<Loader loading />);
    expect(app.find('div').length).toBe(2);
  });
});
