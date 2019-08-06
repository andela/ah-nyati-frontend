import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import NotFound from '../src/views/NotFound';

describe('Not Found', () => {
  let app;
  beforeEach(() => {
    app = shallow(<NotFound />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
