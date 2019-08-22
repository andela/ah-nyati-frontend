import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { EditProfileForm } from '../src/components/Dashboard/EditProfileForm';

const mockStore = configureMockStore();

describe('App', () => {
  const props = {
    editAuthUserProfile: jest.fn(),
    auth: { user: { id: '' } },
    userProfile: { isLoading: '' },
  };
  let app;
  let store;

  beforeEach(() => {
    const initialState = {
      firstName: '',
      lastName: '',
      userName: '',
      bio: '',
      avatar: '',
    };

    store = mockStore(initialState);
    app = shallow(
      <EditProfileForm store={store} {...props} />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('Simulates an onchange event', () => {
    const event = {
      target: {
        id: 'firstName',
        value: 'This is to test for email change',
        name: 'firstName',
      },
    };
    app.find('input').at(0).simulate('change', event);
  });
  it('Simulates a form submit event', () => {
    app.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
});
