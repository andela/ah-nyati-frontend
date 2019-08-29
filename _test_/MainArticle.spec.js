import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import MainArticle from '../src/components/SingleArticle/MainArticle';
import image from '../src/assets/articleImage.png';

describe('Main Article', () => {
  let component;

  const props = {
    views: 1,
    imageUrl: '',
  };

  beforeEach(() => {
    component = shallow(<MainArticle {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders three div tags', () => {
    expect(component.find('div').length).toBe(3);
    component.setProps({ views: 2 });
    component.setProps({ imageUrl: image });
  });

  it('renders an h1 tag', () => {
    expect(component.find('h1').length).toBe(1);
  });

  it('renders an Link tag', () => {
    expect(component.find('Link').length).toBe(2);
  });

  it('renders a p tag', () => {
    expect(component.find('p').length).toBe(3);
  });

  it('renders a span tag', () => {
    expect(component.find('span').length).toBe(4);
  });

  it('renders an image tag', () => {
    expect(component.find('img').length).toBe(1);
  });
});
