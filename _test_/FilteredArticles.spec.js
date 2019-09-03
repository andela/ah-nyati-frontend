import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FilteredArticles } from '../src/views/FilteredArticles';

Enzyme.configure({ adapter: new Adapter() });

describe('Articles', () => {
  describe('', () => {
    let app;
    const props = {
      paginate: jest.fn(),
      getArticlesByTag: jest.fn(),
      loading: false,
      articles: {
        loading: false,
        allArticles: {
          articles: [
            {
              id: 1,
              title: 'title 1',
              imageUrl: 'http://img.com',
              body: 'I am the body',
              Category: {
                name: 'Game',
              },
              views: '34',
            },
            {
              id: 2,
              title: 'title 2',
              imageUrl: 'http://img.com',
              body: 'I am the body 2',
              Category: {
                name: 'Game',
              },
              views: '34',
            },
          ],
          articleCount: 2,
        },
      },
    };

    const propsTwo = {
      paginate: jest.fn(),
      loading: true,
      getArticlesByTag: jest.fn(),
      articles: {
        loading: true,
        allArticles: {
          articles: [],
          articleCount: 2,
        },
      },
    };

    beforeEach(() => {
      app = shallow(<FilteredArticles {...props} />);
    });

    it('renders successfully', () => {
      expect(app).toBeDefined();
    });

    it('renders a div component', () => {
      expect(app.find('div').length).toBe(2);
    });

    it('renders a loader component', () => {
      const appTwo = shallow(<FilteredArticles {...propsTwo} />);
      expect(appTwo.find('Index').length).toBe(1);
    });

    it('contains a paginate method', () => {
      const data = {
        selected: 2,
      };
      const inst = app.instance();
      inst.paginate(data);
    });
  });
});
