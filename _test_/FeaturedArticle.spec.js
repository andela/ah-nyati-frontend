import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import FeaturedArticle from '../src/components/FeaturedArticle/Index';
import { articleCardData } from './testData/articleData';

const {
  title,
  img,
} = articleCardData;

describe('FeaturedArticle', () => {
  let app;
  beforeEach(() => {
    app = shallow(<FeaturedArticle
      title={title}
      imageUrl={img}
    />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a h3 component', () => {
    expect(app.find('h3').length).toBe(1);
  });
});
