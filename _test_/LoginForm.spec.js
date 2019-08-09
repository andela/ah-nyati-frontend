import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { LoginForm } from '../src/components/LoginForm/LoginForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<LoginForm />', () => {
  let app;
  const props = {
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
    expect(app.find('div').length).toBe(10);
  });
  it('renders an a component', () => {
    expect(app.find('a').length).toBe(4);
  });

  it('renders a h1 component', () => {
    expect(app.find('h1').length).toBe(1);
  });

  it('renders a p component', () => {
    expect(app.find('p').length).toBe(3);
  });
  it('renders a i component', () => {
    expect(app.find('i').length).toBe(4);
  });
  it('renders a input component', () => {
    expect(app.find('input').length).toBe(3);
  });
});
