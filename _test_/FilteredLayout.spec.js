import React from 'react';
import { shallow } from 'enzyme';
import FilteredLayout from '../src/components/FilteredLayout/index';

describe('Article Layout', () => {
  describe('When no article found', () => {
    let app;
    const article = {
      allArticles: [
        'No Article Found',
      ],
    };

    beforeEach(() => {
      app = shallow(<FilteredLayout article={article} />);
    });

    it('renders successfully', () => {
      expect(app).toBeDefined();
    });

    it('Check for div', () => {
      expect(app.find('div').length).toBe(1);
    });
  });

  describe('Load articles', () => {
    let app;
    const article = {
      allArticles: [
        {
          article: {
            id: 3,
            title: 'Article 3',
            slug: 'article',
            description: '',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            imageUrl: '',
            isDraft: true,
            views: 21,
            read: 21,
            readRatio: 0,
            userId: 1,
            catId: 1,
            Category: {
              id: 1,
              name: 'Education',
            },
            User: {
              id: 1,
              firstName: null,
              lastName: null,
              userName: 'Alpha',
              bio: null,
              imageUrl: null,
            },
          },
        },
        {
          article: {
            id: 2,
            title: 'Article 2',
            slug: 'article',
            description: '',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            imageUrl: '',
            isDraft: true,
            views: 4,
            read: 4,
            readRatio: 0,
            userId: 1,
            catId: 1,
            Category: {
              id: 1,
              name: 'Education',
            },
            User: {
              id: 1,
              firstName: null,
              lastName: null,
              userName: 'Alpha',
              bio: null,
              imageUrl: null,
            },
          },
        },
      ],
    };

    beforeEach(() => {
      app = shallow(<FilteredLayout article={article} />);
    });

    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
  });
});
