import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ArticleCard from '../src/components/ArticleCard/Index';
import { articleCardData } from './testData/articleData';

const {
  title,
  text,
  img,
  date,
  time,
  likes,
  views,
} = articleCardData;

describe('ArticleCard', () => {
  let app;
  beforeEach(() => {
    app = shallow(<ArticleCard
      title={title}
      imageUrl={img}
      text={text}
      date={date}
      readTime={time}
      likeCount={parseInt(likes, 10)}
      viewCount={views}
      count={2}
    />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(4);
  });

  it('renders an img component', () => {
    expect(app.find('img').length).toBe(1);
  });

  it('renders a h3 component', () => {
    expect(app.find('h3').length).toBe(1);
  });

  it('renders a p component', () => {
    expect(app.find('p').length).toBe(2);
  });
});
