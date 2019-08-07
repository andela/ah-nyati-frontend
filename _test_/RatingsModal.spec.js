import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import RatingsModal from '../src/components/SingleArticle/RatingsModal/index';


describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<RatingsModal />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('tags have classes', () => {
    expect(app.find('_class').length).toBe(9);
  });

  it('renders a span tag', () => {
    expect(app.find('span').length).toBe(1);
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a h2 tag', () => {
    expect(app.find('h2').length).toBe(1);
  });

  it('renders StarRatingComponent', () => {
    expect(app.find('StarRatingComponent').length).toBe(1);
  });
});



