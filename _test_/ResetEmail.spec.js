import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { ResetEmail } from '../src/components/PasswordReset/ResetEmail';

const mockStore = configureMockStore();

describe('App', () => {
  const props = {
    passwordResetEmail: jest.fn(),
    reset: {
      isLoading: false,
    },
  };
  let app;
  let store;

  beforeEach(() => {
    const initialState = {
      userEmail: {},
    };

    store = mockStore(initialState);
    app = shallow(
      <ResetEmail store={store} {...props} />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders reset email form template', () => {
    expect(app).toMatchSnapshot();
    expect(app.find('form').length).toBe(1);
  });
 
  it('renders a div tag', () => {
    expect(app.find('div').length).toBe(1);
  });
  
  it('renders a form tag', () => {
    expect(app.find('form').length).toBe(1);
  });

  it('renders a p tag', () => {
    expect(app.find('p').length).toBe(1);
  });

  it('renders a input tag', () => {
    expect(app.find('input').length).toBe(2);
  });

  it('renders a FormContainer tag', () => {
    expect(app.find('FormContainer').length).toBe(1);
  });

  it('Simulates an onchange event on form email input', () => {
    const event = {
      target: {
        id: 'email',
        value: 'This is to test for email change',
        name: 'email',
      },
    };
    app.find('input').at(0).simulate('change', event);
  });

  it('Simulates an onSubmit event on form email input', () => {
    const event = {
      target: {
        id: 'email',
        value: 'This is to test for email change',
        name: 'email',
      },
    };
    app.find('input').at(1).simulate('click', event);
  });

  it('Simulates a form submit event', () => {
    app.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
});
