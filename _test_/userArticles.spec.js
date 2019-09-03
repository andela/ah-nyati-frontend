import React from 'react';
import expect from 'expect';
import Enzyme, { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { UserArticles } from '../src/components/Dashboard/UserArticles';

const mockStore = configureMockStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Dashboard', () => {
  const props = {
    paginate: jest.fn(),
    getAuthUserArticles: jest.fn(),
    userProfile: {
      articles: {
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
          {
            id: 2,
            title: 'title 2',
            body: 'I am the body 2',
            isDraft: true,
            Category: {
              name: 'Game',
            },
            views: '34',
          },
        ],
      },
    },
    auth: { user: { id: 3 } },
  };
  let app;
  let store;


  beforeEach(() => {
    store = mockStore();
    app = shallow(
      <UserArticles store={store} {...props} />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('gets all active articles when article button is clicked', () => {
    const publishedButton = app.find('#published');
    expect(publishedButton).toHaveLength(1);
    publishedButton.simulate('click');

    expect(app).toMatchSnapshot();
  });

  it('gets all draft articles when draft button is clicked', () => {
    const draftButton = app.find('#draft');
    expect(draftButton).toHaveLength(1);
    draftButton.simulate('click');

    expect(app).toMatchSnapshot();

  });
});
