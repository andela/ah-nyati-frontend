import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { UserDashboard } from '../src/components/Dashboard/index';

const mockStore = configureMockStore();

describe('Dashboard', () => {
  const props = {
    authUserProfile: jest.fn(),
    getAuthUserFollowers: jest.fn(),
    getAuthUserFollowee: jest.fn(),
    getAuthUserArticles: jest.fn(),
    auth: {
      user: {
        userName: '',
        id: '',
      },
    },
  };

  let app;
  let store;

  beforeEach(() => {
    store = mockStore();
    app = shallow(<UserDashboard store={store} {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div tag', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders dashboard index', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders without auth', () => {
    props.auth = null;
    app = shallow(<UserDashboard store={store} {...props} />);
    expect(app).toMatchSnapshot();
  });
});
