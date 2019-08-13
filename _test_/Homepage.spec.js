import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
// import { create } from 'react-test-renderer';

import Homepage from '../src/views/Homepage';
import { homeData } from './testData/homeData';
import makeMockStore from './Utils/makeMockStore';

describe('Homepage', () => {
  let app;
  let res;

  // it('has a loadItems method', () => {
  //   const store = makeMockStore({
  //     article: {
  //       allArticles: homeData,
  //       loading: false,
  //     },
  //     errors: {},
  //   });
  //   const wrapper = create(<Homepage allArticles={homeData} store={store} />);
  //   const wrapperInstance = wrapper.getInstance();

  //   expect(wrapperInstance.loadItems()).toBeDefined();
  // });

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

  // it('has a loadItems method', () => {
  //   const store = makeMockStore({
  //     article: {
  //       allArticles: homeData,
  //       loading: false,
  //     },
  //     errors: {},
  //   });

  //   app = shallow(<Homepage store={store} />);
  //   res = app.dive().dive();
  //   res.loadItems = jest.fn();
  //   res.update();
  //   res.loadItems
  //     .mockImplementationOnce(() => null);
  //   res.loadItems();
  //   // app.dive().instance().componentDidMount();
  //   expect(res.loadItems).toBeDefined();
  // });

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
    expect(res.find('Loader').length).toBe(1);
  });
});
