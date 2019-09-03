import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import DropLeft from '../src/components/SingleArticle/RatingsBtn/index';


describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<DropLeft />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
