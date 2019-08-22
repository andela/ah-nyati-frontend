import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { DraftArticles } from '../src/components/Dashboard/DraftArticles';

const mockStore = configureMockStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Draft Articles', () => {
  const props = {
    getAuthUserDraftArticles: jest.fn(),
    auth: { user: { id: 3 } },
    userProfile: {
      draft: {
        articles: [
          {
            id: 1,
            title: 'title 1',
            imageUrl: 'http://img.com',
            body: 'I am the body',
            isDraft: true,
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
      <DraftArticles store={store} {...props} />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('gets all draft articles', () => {
    const articleContainer = app.find('.article-title');
    expect(articleContainer).toHaveLength(1);
    expect(articleContainer.props().children).toEqual(props.userProfile.draft.articles[0].title);
  });

  it('Click on pagination', () => {
    app.instance().paginate(2);
    const render = jest.spyOn(app.instance(), 'paginate');
    expect(render).toHaveBeenCalledTimes(0);
  });
});
