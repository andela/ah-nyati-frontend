import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import TrendingSection from '../src/components/TrendingSection/TrendingSection';
import { homeData } from './testData/homeData';


describe('TrendingSection', () => {
  let app;
  beforeEach(() => {
    app = shallow(<TrendingSection
      data={homeData}
    />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('Wrapper').length).toBe(1);
  });

  it('renders an img component', () => {
    expect(app.find('ArticleCard').length).toBe(5);
  });
});
