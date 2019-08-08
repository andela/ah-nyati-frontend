import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { toast } from 'react-toastify';

import { PasswordReset } from '../src/components/PasswordReset/PasswordReset';


const mockStore = configureMockStore();

describe('App', () => {
  const props = {
    resetNewPassword: jest.fn(),
    reset: {
      redirect: false,
    },
    location: {
      search: '',
    },
  };
  let app;
  let store;

  beforeEach(() => {
    const initialState = {
      password: {},
      confirmPassword: {},
    };
    store = mockStore(initialState);

    jest.spyOn(toast, 'error').mockReturnValue("Passwords don't match");

    app = shallow(
      <PasswordReset store={store} {...props} />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders snapshot uccessfully', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders a FormContainer tag', () => {
    expect(app.find('FormContainer').length).toBe(1);
  });

  it('renders a form tag', () => {
    expect(app.find('form').length).toBe(1);
  });

  it('renders a div tag', () => {
    expect(app.find('div').length).toBe(3);
  });

  it('renders a p tag', () => {
    expect(app.find('p').length).toBe(2);
  });

  it('renders a input tag', () => {
    expect(app.find('input').length).toBe(3);
  });

  it('Simulates an onchange event on form password input', () => {
    const event = {
      target: {
        id: 'password',
        value: 'password',
        name: 'password',
      },
    };
    app.find('input').at(0).simulate('change', event);
  });

  it('Simulates an onConfirmPasswordChange event on form password input', () => {
    const event = {
      target: {
        id: 'password',
        value: 'password',
        name: 'password',
      },
    };
    app.find('input').at(1).simulate('change', event);
  });

  it('Simulates a event on form password input', () => {
    app.setState({
      password: {
        password: 'password',
      },
      confirmPassword: {
        confirmPassword: 'confirmPassword',
      },
    });
    expect(app).toMatchSnapshot();
    expect(app.state().password.password).toBe('password');
    expect(app.state().confirmPassword.confirmPassword).toBe('confirmPassword');
  });
  
  it('Simulates an onSubmit event on form password input', () => {
    const event = {
      target: {
        id: 'password',
        value: 'password',
        name: 'password',
      },
    };
    
    app.find('input').at(2).simulate('click', event);
  });
  it('Simulates a form submit event', () => {
    app.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
  
  it('Simulate a event on form password input', () => {
    app.setState({
      password: {
        password: 'password',
      },
      confirmPassword: {
        confirmPassword: '1password',
      },
    });
    app.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(app.state().password.password).toBe('password');
    expect(app.state().confirmPassword.confirmPassword).toBe('1password');
  });
});
