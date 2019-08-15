import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { LoginForm } from '../src/components/LoginForm/Index';

Enzyme.configure({ adapter: new Adapter() });

describe('<LoginForm />', () => {
  let app;
  const props = {
    email: '',
    password: '',
    type: 'email',
    errors: {
      email: 'error',
      password: 'error',
    },
    value: 'This is just for test',
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    auth: { isAuthenticated: true },
    history: {
      push: path => path,
    },
    loginUser: jest.fn(),
  };

  beforeEach(() => {
    app = shallow(<LoginForm {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(9);
  });

  it('renders a h1 component', () => {
    expect(app.find('h1').length).toBe(1);
  });
  it('renders a h3 component', () => {
    expect(app.find('h3').length).toBe(1);
  });
  it('renders a form component', () => {
    expect(app.find('form').length).toBe(1);
  });
  it('renders invalid credentials error component', () => {
    const form = shallow(<LoginForm
      {
        ...{ ...props, errors: { auth: 'Invalid email or password' } }
      }
    />);
    expect(form.find('div.err').text()).toBe('Invalid email or password');
  });

  it('it do not render invalid credentials on no auth error', () => {
    app = shallow(<LoginForm {...props} />);
    expect(app.find('div.err')).toEqual({});
  });

  it('renders a p component', () => {
    expect(app.find('p').length).toBe(3);
  });
  it('renders a input component', () => {
    expect(app.find('input').length).toBe(3);
  });
  it('If Submit works', () => {
    app.find('#submit').simulate('click', { preventDefault: jest.fn() });
    expect(props.loginUser).toHaveBeenCalledTimes(1);
    expect(props.loginUser).toHaveBeenCalledWith(
      { email: props.email, password: props.password },
    );
  });
  it('Should change email value when onChange was called', () => {
    const event = {
      target: {
        value: 'This is to test for email change',
        name: 'email',
      },
    };
    app.find('[type="email"]').simulate('change', event);
    const { state: { email } } = app.instance();
    expect(email).toEqual(event.target.value);
  });
  it('Should change password value when onChange was called', () => {
    const event = {
      target: {
        value: 'This is to test for password change',
        name: 'password',
      },
    };
    app.find('[type="password"]').simulate('change', event);
    const { state: { password } } = app.instance();
    expect(password).toEqual(event.target.value);
  });
});
