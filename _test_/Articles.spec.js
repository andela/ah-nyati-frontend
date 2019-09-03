import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { GetAllArticles } from '../src/views/Articles';


Enzyme.configure({ adapter: new Adapter() });

describe('Articles', () => {
  describe('', () => {
    let app;
    const props = {
      paginate: jest.fn(),
      getAllArticles: jest.fn(),
      articles: {
        isLoading: false,
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
      },
    };

    beforeEach(() => {
      app = shallow(<GetAllArticles {...props} />);
    });

    it('renders successfully', () => {
      expect(app).toBeDefined();
    });

    it('renders a div component', () => {
      expect(app.find('div').length).toBe(2);
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
