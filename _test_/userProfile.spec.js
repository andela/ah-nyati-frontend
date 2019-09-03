import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { UserProfile } from '../src/components/Dashboard/UserProfile';

const mockStore = configureMockStore();

describe('Dashboard', () => {
  const props = {
    userProfile: {
      profile: {
        firstName: '',
        lastName: '',
        userName: '',
        imageUrl: '',
        bio: '',
      },
      followers: '',
      followees: '',
      articles: [],
    },
  };
  let app;
  let store;

  beforeEach(() => {
    store = mockStore();
    app = shallow(
      <UserProfile store={store} {...props} />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
