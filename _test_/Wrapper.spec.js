import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Wrapper from '../src/components/Wrapper/Index';

describe('Wrapper', () => {
  let app;
  beforeEach(() => {
    app = shallow(
      <Wrapper>
        <div>Test Wrapper</div>
      </Wrapper>,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(2);
  });
});
