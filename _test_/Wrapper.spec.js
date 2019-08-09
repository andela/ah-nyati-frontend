import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Wrapper from '../src/components/Wrapper/Wrapper';

describe('HorizontalBar', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Wrapper />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });
});
