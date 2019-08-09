import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import FeaturedSection from '../src/components/FeaturedSection/FeaturedSection';
import { homeData } from './testData/homeData';


describe('TrendingSection', () => {
  let app;
  beforeEach(() => {
    app = shallow(<FeaturedSection
      data={homeData}
    />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('Wrapper').length).toBe(4);
  });

  it('renders an img component', () => {
    expect(app.find('FeaturedArticle').length).toBe(5);
  });
});
