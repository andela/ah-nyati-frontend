import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import store from '../src/store';
import Homepage from '../src/views/Homepage';
import { homeData } from './testData/homeData';

describe('Homepage', () => {
  let app;
  let res;
  beforeEach(() => {
    app = shallow(<Homepage allArticles={homeData} store={store} />);
    res = app.dive().dive();
    console.log(res.debug());
    // console.log(app.debug());
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  // it('renders a div component', () => {
  //   expect(res.find('div').length).toBe(1);
  // });

  it('renders a Loader component', () => {
    // app = shallow(<Homepage allArticles={[]} store={store} />);
    expect(res.find('Loader').length).toBe(1);
  });
});
