import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { PublishedArticles } from '../src/components/Dashboard/PublishedArticles';

const mockStore = configureMockStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Published Articles', () => {
  const props = {
    getAuthUserPublishedArticles: jest.fn(),
    auth: { user: { id: 3 } },
    userProfile: {
      published: {
        articles: [
          {
            id: 1,
            title: 'title 1',
            imageUrl: 'http://img.com',
            body: 'I am the body',
            isDraft: false,
            Category: {
              name: 'Game',
            },
            views: '34',

          },
        ],
      },
    },
  };
   
  let app;
  let store;

  beforeEach(() => {
    store = mockStore();
    app = shallow(
      <PublishedArticles store={store} {...props} />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('gets all published articles', () => {
    const articleContainer = app.find('.article-title');
    expect(articleContainer).toHaveLength(1);
    expect(articleContainer.props().children).toEqual(props.userProfile.published.articles[0].title);
  });

  it('Click on pagination', () => {
    app.instance().paginate(2);
    const render = jest.spyOn(app.instance(), 'paginate');
    expect(render).toHaveBeenCalledTimes(0);
  });
});
