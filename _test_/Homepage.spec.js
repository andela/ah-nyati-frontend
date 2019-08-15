import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Homepage, { Homepage as Home } from '../src/views/Homepage';
import { homeData } from './testData/homeData';
import makeMockStore from './Utils/makeMockStore';

describe('Homepage', () => {
  let app;
  let res;

  const getArticles = jest.fn();

  it('contains a loadItems method', () => {
    const comp = shallow(<Home allArticles={homeData} fetchArticles={getArticles} />);
    const inst = comp.instance();
    inst.loadItems();
    // console.log(inst.debug());
  });

  it('componentWillUnmount should be called on unmount', () => {
    const component = shallow(<Home allArticles={homeData} fetchArticles={getArticles} />);
    const componentWillUnmount = jest.spyOn(component.instance(), 'componentWillUnmount');
    component.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });

  it('renders successfully', () => {
    const store = makeMockStore({
      article: {
        allArticles: homeData,
        loading: false,
      },
      errors: {},
    });

    app = shallow(<Homepage store={store} />);
    res = app.dive().dive();
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    const store = makeMockStore({
      article: {
        allArticles: homeData,
        loading: false,
      },
      errors: {},
    });

    app = shallow(<Homepage store={store} />);
    res = app.dive().dive();
    expect(res.find('div').length).toBe(1);
  });

  it('renders a FeaturedSection component', () => {
    const store = makeMockStore({
      article: {
        allArticles: homeData,
        loading: false,
      },
      errors: {},
    });

    app = shallow(<Homepage store={store} />);
    res = app.dive().dive();

    expect(res.find('FeaturedSection').length).toBe(1);
  });

  it('renders a HorizontalBar component', () => {
    const store = makeMockStore({
      article: {
        allArticles: homeData,
        loading: false,
      },
      errors: {},
    });

    app = shallow(<Homepage store={store} />);
    res = app.dive().dive();
    expect(res.find('HorizontalBar').length).toBe(1);
  });

  it('renders a TrendingSection component', () => {
    const store = makeMockStore({
      article: {
        allArticles: homeData,
        loading: false,
      },
      errors: {},
    });

    app = shallow(<Homepage store={store} />);
    res = app.dive().dive();
    expect(res.find('TrendingSection').length).toBe(1);
  });

  it('renders a Loader component', () => {
    const store = makeMockStore({
      article: {
        allArticles: [],
        loading: false,
      },
      errors: {},
    });

    app = shallow(<Homepage store={store} />);
    res = app.dive().dive();
    expect(res.find('Index').length).toBe(1);
  });
});
