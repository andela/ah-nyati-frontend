import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import registerErrorsReducer from '../src/reducers/registerErrorsReducer';
import { GET_ERRS } from '../src/actions/types';
import { RegisterForm } from '../src/components/RegisterForm';
import Socials from '../src/components/Socials';
import InputField from '../src/components/InputField';
import Loader from '../src/components/Loader';


describe('Register', () => {
  let component;
  const props = {
    registerUser: jest.fn(),
    userName: '',
    email: '',
    password: '',
    auth: {},
    signupErrors: {},
    history: {},
    loading: false,
    loadingErrors: false,
  };


  beforeEach(() => {
    component = shallow(<RegisterForm {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a loader', () => {
    component.setProps({ loading: true, loadingErrors: true });
    expect(component.find(Loader).length).toBe(1);
  });

  it('should render errors', () => {
    component.setProps({ loading: false, loadingErrors: false });
    const state = { userName: 'Username is required' };
    expect(registerErrorsReducer(state, GET_ERRS)).toBe(state);
  });

  it('renders a div component', () => {
    expect(component.find('div').length).toBe(8);
  });

  it('renders an h1 tag', () => {
    expect(component.find('h1').length).toBe(1);
  });

  it('renders an h4 tag', () => {
    expect(component.find('h4').length).toBe(1);
  });

  it('renders a p tag', () => {
    expect(component.find('p').length).toBe(1);
  });

  it('renders a Socials component', () => {
    expect(component.find(Socials).length).toBe(2);
  });

  it('renders a form tag', () => {
    expect(component.find('form').length).toBe(1);
  });

  it('renders an InputField component', () => {
    expect(component.find(InputField).length).toBe(3);
  });

  it('renders an input tag', () => {
    expect(component.find('input').length).toBe(1);
  });

  it('should call the right function on form submission', () => {
    component.instance().onSubmit({ preventDefault: jest.fn() });
    expect(props.registerUser).toHaveBeenCalledTimes(1);
    expect(props.registerUser).toHaveBeenCalledWith(
      { userName: props.userName, email: props.email, password: props.password }, props.history,
    );
    component.setProps({ signupErrors: { userName: 'Username is required' } });
    component.setProps({ signupErrors: { email: 'Email is required' } });
    component.setProps({ signupErrors: { password: 'Password is required' } });
  });

  it('should change userName value when changeValueHandler is called', () => {
    const event = {
      target: {
        value: 'This is to test for userName change',
        name: 'userName',
      },
    };
    component.instance().changeValueHandler(event);
    const { userName } = component.state();
    expect(userName).toEqual(event.target.value);
  });

  it('should change email value when changeValueHandler is called', () => {
    const event = {
      target: {
        value: 'This is to test for userName change',
        name: 'email',
      },
    };
    component.instance().changeValueHandler(event);
    const { email } = component.state();
    expect(email).toEqual(event.target.value);
  });

  it('should change password value when changeValueHandler is called', () => {
    const event = {
      target: {
        value: 'This is to test for userName change',
        name: 'password',
      },
    };
    component.instance().changeValueHandler(event);
    const { password } = component.state();
    expect(password).toEqual(event.target.value);
  });
});
