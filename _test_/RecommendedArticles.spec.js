import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Recommended from '../src/components/SingleArticle/Recommended';
import image from '../src/assets/articleImage.png';

describe('Main Article', () => {
  let component;

  const props = {
    allArticles: [{
      title: 'Hello',
      article: { slug: 'hello-1', imageUrl: '' },
    },
    {
      title: 'Hellos',
      article: { slug: 'hello-2', imageUrl: '' },
    },
    {
      title: 'Helloey',
      article: { slug: 'hello-3', imageUrl: '' },
    }],
  };

  beforeEach(() => {
    component = shallow(<Recommended {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div tag', () => {
    expect(component.find('div').length).toBe(2);
  });

  it('renders an h3 tag', () => {
    expect(component.find('h3').length).toBe(1);
  });

  it('renders three h4 tags', () => {
    expect(component.find('h4').length).toBe(3);
  });

  it('renders three image tags', () => {
    expect(component.find('img').length).toBe(3);
    component.setProps({
      allArticles: {
        0: { article: { slug: 'hello-1', imageUrl: image } },
        1: { article: { slug: 'hello-2', imageUrl: image } },
        2: { article: { slug: 'hello-3', imageUrl: image } },
      },
    });
  });

  it('renders three Link tags', () => {
    expect(component.find('Link').length).toBe(3);
  });

  it('returns null', () => {
    component.setProps({ allArticles: [] });
    expect(component).toEqual({});
  });
});
